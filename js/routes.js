const ROUTES = [
    {
        path: 'index.html#inicio',
        name: 'Inicio'
    },
    {
        path: 'index.html#aboutUs',
        name: 'Acerca de nosotros'
    },
    {
        path: 'index.html#contact',
        name: 'Contacto'
    },
    {
        path: 'index.html#list',
        name: 'Lista de elementos'
    },
    {
        path: 'index.html#pixelart',
        name: 'Pixel Art'
    },
    {
        path: 'section.html',
        name: 'Section'
    },
    {
        path: 'domtests.html',
        name: 'Pruebas con DOM'
    },
    {
        path: 'jquery.html',
        name: 'JQuery'
    },
    {
        path: 'ExerJQuery.html',
        name: 'Ejercicios JQuery'
    },
    {
        path: 'jqueryUI.html',
        name: 'JQuery UI'
    }
]
window.addEventListener('load', () => {
    console.log('Routes loaded')
    const routes_container = document.getElementById('routes');
    if(!routes_container) return;
    loadRoutes(routes_container)
})
    
const loadRoutes= (routes_container) =>{
    const routes = ROUTES.map((route) =>`
    <li>
        <a id= "menu" href="${route.path}">${route.name}</a>
    </li>
    `).join('')
    routes_container.innerHTML = routes
}