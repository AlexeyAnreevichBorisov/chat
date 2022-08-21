import template from './index.hbs'

window.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app')
    app.innerHTML = template({var: 'hello'})
})