
/*Script con lógica de java que pide que complete todos los recuadros del formulario*/

const form = document.querySelector('.form-contact');
form.addEventListener('submit', (e) => {
    const name = form.querySelector('input[name="name"]').value.trim();
    const phone = form.querySelector('input[name="phone"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !phone || !email || !message) {
        e.preventDefault(); // Prevent form submission
        alert("Por favor, complete todos los campos antes de enviar el formulario.");
    }
});