const formularioPost ={
    title: 'nuevo post',
    body: 'este es el cuerpo del post',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST', //definimos el metodo
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
})
.then(response => response.json())
.then(json => {
    console.log('respuesta del servidor:', json);
    alert('Post creado con éxito');
});
