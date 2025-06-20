//your code here
/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script> */
// <!-- Trigger Modal via JavaScript -->
const openBtn = document.getElementById('open-modal');
const newtonModal = new bootstrap.Modal(document.getElementById('newton-modal'));

openBtn.addEventListener('click', () => {
    newtonModal.show();
});