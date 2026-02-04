const carros = [
    {
        nombre: "Toyota Corolla",
        año: 2022,
        precio: "$18,500 USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/gallery-2022-toyota-corolla-5315.jpg"
    },
    {
        nombre: "Honda Civic",
        año: 2024,
        precio: "$25,000 USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/2024-Honda-Civic-eHEV-LX-review-22.jpg"
    },
    {
        nombre: "BMW X5",
        año: 2023,
        precio: "$48,000 USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/4-2025-BMW-X5-Competition-front-view.jpg"
    },
     {
        nombre: "Dodge Charger SRT Hellcat",
        año: 2025,
        precio: "$79,000 USD",
        estado: ("Nuevo", "Agotado"),
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/503521-Dodge-Charger-SRT-Hellcat-Redeye-LD-2023-1-870x491.jpg"
    },
     {
        nombre: "Lexus Es 350",
        año: 2022,
        precio: "$56,000 USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/lexus-es-350-2022-01-exterior-front-angle-sedan-white-scaled.webp"
    },
    {
        nombre: "Ford Mustang gt Fastback 2024",
        año: 2024,
        precio: "$76,000 USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/73f00378-a396-5013-a056-55fec6950000.avif"
    },
    {
        nombre: "Toyota Land Cruiser 2023 Limited",
        año: 2024,
        precio: "$70,000 USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/1-14_11zon-1-1.webp"
    },
    {
        nombre: "Chevrolet camaro SS 2023",
        año: 2023,
        precio: "$39,000 USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/403166-2023-chevrolet-camaro.jpg"
    },
     {
        nombre: "Mercedes AMG GLE 53 4MATIC+ 2021 ",
        año: 2021,
        precio: "$140,000 USD",
        estado: "Agotado",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/R.jpg"
    },
      {
        nombre: "Mercedes Benz G Class AMG G63 2022",
        año: 2022,
        precio: "$220,000 USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/2022-Mercedes-Benz-G-Class-AMG-G63-22.jpg"
    },
     {
        nombre: "Toyota Camry 2025",
        año: 2025,
        precio: "$30,000 USD",
        estado: "Nuevo",
        transmision: "Manual y Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/2025-toyota-camry (2).avif"
    }, 
    {
        nombre: "Honda Accord 2024 Touring",
        año: 2024,
        precio: "$35,500USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/2024-Honda-Accord.webp"
    },
    {
        nombre: "lexus Lx 570 2025",
        año: 2025,
        precio: "$95,500USD",
        estado: "Agotado",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/maxresdefault.jpg"
    },
    {
        nombre: "Kia K5 GT Line 2025",
        año: 2025,
        precio: "$29,000USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gas",
        imagen: "imgnuevos/93dfa4e3060dfc235b2d957b0d850408.jpg"
    },
     {
        nombre: "Kia Sonet 2026",
        año: 2026,
        precio: "$25,700USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/13142087.jpg"
    },
     {
        nombre: "Kia Sportage X-Line 2026 ",
        año: 2026,
        precio: "$44,700USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/2025-sportage-heromb.jpg"
    },
    {
        nombre: "Honda Fit 2025",
        año: 2025,
        precio: "$32,400USD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Gasolina",
        imagen: "imgnuevos/whatsapp-image-2025-11-03-at-16.28.08-c51aff88.263924a686761ed06a18b772be7c945c.jpg"
    },
     {
        nombre: "Honda Crv 2025",
        año: 2025,
        precio: "$37,550SD",
        estado: "Nuevo",
        transmision: "Automática",
        combustible: "Hibirido (Gasolina/Electrico)",
        imagen: "imgnuevos/OIP22.webp"
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
            <span class="estado ${carro.estado === "Nuevo" ? "nuevo" : "usado" ? "Agotado" : "Agotado"}">
                ${carro.estado}
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
Estado: ${c.estado}`;
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
