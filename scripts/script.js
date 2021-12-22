
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
const h2 = document.querySelector('h2')

const numberPantalla = 20;

h2.addEventListener('click', () => {
    obtenerPokemon()
})

const fetchPokemon = async (id_name) => {
    main.innerHTML = ''
    const URL = `https://pokeapi.co/api/v2/pokemon/${id_name}/`

    const resp = await fetch(URL)
    const data = await resp.json()
     
    createPokemon(data);

// const peticion = fetch(URL)
// await peticion.then(resp => {
//     resp.json().then(data => {
//         mostrarDatos(data.results)
//     })
// })

//     fetch(URL)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//             createPokemon(data);
//         });
}

function obtenerPokemon() {
    for (let i = 1; i <= numberPantalla; i++) {
        fetchPokemon(i)
    }
}

obtenerPokemon()

const createPokemon = (pokemon) => {
    
    const {name, id} = pokemon;

    image = pokemon.sprites.front_default;
    numero = `#${id.toString().padStart(3, 0)}`;

    const division = document.createElement('div')
    division.classList.add('card')
    division.innerHTML = `
    <img src="${image}" alt="">
    <div class="card-info">
        <h3>${name}</h3>
        <h3>${numero}</h3>

    </div>
    `
    main.appendChild(division)
    
}

form.addEventListener('submit', e => {
    e.preventDefault()
    const searchTerm = search.value
    if (searchTerm && searchTerm !== '') {
        fetchPokemon(searchTerm)
        search.value = ""
    } else {
        window.location.reload()
    }
})