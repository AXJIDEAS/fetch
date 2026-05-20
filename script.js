const btnCargar = document.getElementById('btnCargar')
const lista =document.getElementById('listaUsuario')

btnCargar.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')

    .then(respuesta => {
        if(!respuesta.ok) throw new Error('Error de red');
        return respuesta.json();
    })

    .then(datos => {
        lista.innerHTML = '';
        
        datos.forEach(usuario=> {
            const li = document.createElement('li');
            li.textContent = `${usuario.name} - Email: ${usuario.email}`;
            lista.appendChild(li);
        });
    })
    
    .catch(error => console.error('hubo un problema:', error));
})