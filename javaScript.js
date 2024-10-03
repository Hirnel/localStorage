// hago dos consts para pedir el id de contact-List y contact-form
const form = document.getElementById("contact-form");
const contactList = document.getElementById("contact-list");
const deleteSelect = document.getElementById("delete-select");
const deleteAllButton = document.getElementById("delete-all");



form.addEventListener("submit", function (event) {              // exijo la validacion gritando a los cielos add event Listener, y luego declaro que pido
    event.preventDefault();
    const name = document.getElementById("name").value;         //variables que recogen informacion 
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const url = document.getElementById("image-url").value;

    const contact = {
        name, email, message, url,                              //
    }

    saveContact(contact);                                       //
    // displayContact(contacts);       //Esto aun lo tengo que definir

})

function saveContact(contact) {
    let contacs = JSON.parse(localStorage.getItem("contacts")) || [];
    contacs.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacs))
}

// Usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave   ESTO ME LO SALTO

// Crea botón para borrar todos los contactos guardados en Local Storage
// Crea botón para borrar un contacto en concreto de Local Storage

deleteSelect.addEventListener("click", function () {
    localStorage.removeItem();

})

deleteAllButton.addEventListener("click", function () {
    localStorage.clear();

})
