const carros = [
    {
        nombre: "Toyota Corolla",
        año: 2006,
        precio: "$4,500 USD",
        estado: "Usado",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "/usados/R.jpg",
        agotado: false
    },
     {
        nombre: "Honda fit",
        año: 2008,
        precio: "$6,200 USD",
        estado: "Usado",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "/usados/OIP.webp  ",
        agotado: true
    },
     {
        nombre: "Toyota Passo",
        año: 2010,
        precio: "$4,500 USD",
        estado: "Usado",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "/usados/293143-1.webp",
        agotado: true
    },


];
const catalogo = document.getElementById("catalogo");

carros.forEach((carro, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => abrirModal(index);

    card.innerHTML = `
        <img src="${carro.imagen}">
        <div class="card-content">
            <span class="estado ${carro.agotado ? "agotado" : "usado"}">
                ${carro.agotado ? "Agotado" : carro.estado}
            </span>
            <h3>${carro.nombre}</h3>
            <p>Año: ${carro.año}</p>
            <p class="precio">${carro.precio}</p>
        </div>
    `;

    catalogo.appendChild(card);
});

function abrirModal(index) {
    const c = carros[index];
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-img").src = c.imagen;
    document.getElementById("modal-titulo").innerText = c.nombre;
    document.getElementById("modal-info").innerText =
        `Año: ${c.año}
Transmisión: ${c.transmision}
Combustible: ${c.combustible}
Estado: ${c.agotado ? "Agotado" : c.estado}`;
    document.getElementById("modal-precio").innerText = `Precio: ${c.precio}`;
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

const menu = document.getElementById("menu");

function toggleMenu(){
  menu.classList.toggle("active");
}

document.addEventListener("click", function(e){
  if(menu.classList.contains("active") &&
     !menu.contains(e.target) &&
     !e.target.closest(".logo")){
    menu.classList.remove("active");
  }
});

function aplicarFiltros() {
    const marca = document.getElementById("marca").value;
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const cardMarca = card.querySelector("h3").innerText.split(" ")[0];
        if (marca === "" || cardMarca === marca) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function limpiarFiltros() {
    document.getElementById("marca").value = "default";
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.display = "flex";
    });
}
