class Contact{
    // Clase que define que datos tiene un contacto
    constructor(name,email,phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class UI{
    // Metodo que agrega los contactos a la UI
    addContact(contact){
        const contactList = document.getElementById("contact-list");
        const element = document.createElement("div")
        element.innerHTML = '<div class="card text-center mb-4"><div class="card-body"><strong>Nombre del contacto: </strong>'+contact.name+'</br><strong>E-mail del contacto: </strong>'+contact.email+'</br><strong>Numero del telefono del contacto: </strong>'+contact.phone+'</br><button class="btn btn-danger" name="Delete">Eliminar</button></div></div>';
        contactList.appendChild(element)
        this.showMessage("Se ha agregado el contacto satisfactoriamente","success")
    }
    // Metodo que resetea el formulario de añadir producto
    resetFormContact(){
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
    }
    // Metodo que elimina los contactos a la UI
    deleteContact(element){
        if(element.name == "Delete"){
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage("Se ha eliminado el contacto satisfactoriamente","danger")
        }
    }
    // Metodo para mostrar mensaje estilizado con Bootswatch
    showMessage(message,cssClass){
        console.log(message);
        console.log(cssClass);
        const div = document.createElement("div");
        div.className = "alert alert-"+cssClass+" mt-2";
        div.appendChild(document.createTextNode(message));
        // Mostrandolo en el DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#app");
        container.insertBefore(div,app)
        // Quitando el mensaje despues de un tiempo
        setTimeout(() => {
            document.querySelector(".alert").remove()
        }, 3000);

    }
}
// Obteniendo el elemento del formulario
const contactForm = document.getElementById("contact-form");
// Obteniendo el evento "submit del contactForm"
contactForm.addEventListener("submit",(e) => {
    // Evitar que se recargue la pagina cuando se envie el evento del formulario
    e.preventDefault();
    // Recogiendo los datos del contactForm
    const nameContact = document.getElementById("name").value;
    const emailContact = document.getElementById("email").value;
    const phoneContact = document.getElementById("phone").value;
    // Creando el objeto de la clase Contact
    const contact = new Contact(nameContact,emailContact,phoneContact)
    // Llamando a la clase UI
    const ui = new UI()
    // Llamando al metodo de agregar contacto a la interfaz del usuario
    ui.addContact(contact)
    // Llamando al metodo de resetear al formulario
    ui.resetFormContact()
})

document.getElementById("contact-list").addEventListener("click",(e) =>{
    // Llamando a la clase UI
    const ui = new UI()
    // Llamando al metodo de eliminar contacto a la interfaz del usuario
    ui.deleteContact(e.target)
})

// Creado Por Damian Zsiros
// Website: https://damian-zsiros.herokuapp.com