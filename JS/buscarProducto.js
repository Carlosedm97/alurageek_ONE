const searchForm = document.querySelector('[data-formsearch]');
const searchInput = searchForm.querySelector('input');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    search(searchInput.value);
});

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        search(searchInput.value);
    }
});

function search(query) {
    const busqueda = query.toLowerCase();
    document.querySelectorAll('.producto').forEach(producto => {
        if (producto.querySelector('.producto__titulo').textContent.toLowerCase().includes(busqueda) || producto.querySelector('.producto__descripcion').textContent.toLowerCase().includes(busqueda)) {
            producto.classList.remove('oculto');
        } else {
            producto.classList.add('oculto');
        }
    })
};