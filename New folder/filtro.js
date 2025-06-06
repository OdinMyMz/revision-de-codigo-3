



// para que el DOM este cargado al manipular los elementos
// envolvemos todo en DOMContentLoaded

document.addEventListener('DOMContentLoaded', () => {
  const productos = [
    { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
    { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
    { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
    { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
    { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
  ];

  // seleccionar los elementos con getElementById
  const inputFiltro = document.getElementById('filtro-input');
  const botonFiltro = document.getElementById('filtro-btn');
  const contenedorProductos = document.getElementById('lista-de-productos');

  /**    esta funcion renderiza una lista de productos en el contenedor
    limpia antes de renderizar usando innerHTML = ''
    crea elementos dinamicamente y los añade       */
  function displayProductos(lista) {
    contenedorProductos.innerHTML = '';
    lista.forEach(item => {
      const productoDiv = document.createElement('div');
      productoDiv.classList.add('producto');

      const titulo = document.createElement('p');
      titulo.classList.add('titulo');
      titulo.textContent = item.nombre;

      const imagen = document.createElement('img');
      imagen.src = item.img;
      imagen.alt = item.nombre;

      productoDiv.appendChild(titulo);
      productoDiv.appendChild(imagen);
      contenedorProductos.appendChild(productoDiv);
    });
  }

  /**   funcion de filtrado:
    convierte el texto a minusculas
    si no hay criterio, devuelve la lista completa
    filtra por tipo o color                        */
  function filtrado(lista, texto) {
    const criterio = texto.trim().toLowerCase();
    if (!criterio) return lista;
    return lista.filter(item =>
      item.tipo.toLowerCase().includes(criterio) ||
      item.color.toLowerCase().includes(criterio)
    );
  }


  // vincular el evento click al boton filtro
  botonFiltro.addEventListener('click', () => {
    const textoBusqueda = inputFiltro.value;
    const resultados = filtrado(productos, textoBusqueda);
    displayProductos(resultados);
  });


  // Handler común para aplicar el filtro y mostrar resultados
    function aplicarFiltro() {
    const textoBusqueda = inputFiltro.value;
    const resultados = filtrado(productos, textoBusqueda);
    displayProductos(resultados);
  }

  // incluye evento de teclado al input para detectar Enter
  inputFiltro.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      aplicarFiltro();
    }
  });

  

  // muestra todos los productos al iniciar la pagina
  displayProductos(productos);
});