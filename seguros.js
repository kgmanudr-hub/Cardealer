
const aseguradoras = {
  anglo: {
    nombre: "Angloamericana de Seguros",
    telefono: "(809) 227-1002 / (809) 227-6005",
    direccion: "Av. Gustavo Mejía Ricart No.8, El Millón, Santo Domingo",
    descripcion: "Seguros de vehículos, salud y patrimoniales."
  },
  atlantica: {
    nombre: "Atlántica Seguros",
    telefono: "(809) 565-5591 / (809) 565-4343",
    direccion: "Av. Roberto Pastoriza No.315, Naco, Santo Domingo",
    descripcion: "Seguros vehiculares con amplia cobertura nacional."
  },
  AutoSeguro: {
    nombre: "Auto Seguro Dominicana",
    telefono: "(809) 530-1855 /  (809) 530-1580",
    direccion: "Avenida 27 de Febrero No. 442, Mirador Norte Santo Domingo, República Dominicana",
    descripcion: "Seguros vehiculares con amplia cobertura nacional."
  },
  Confedom: {
    nombre: "Confedom Seguros",
    telefono: "(809) 544-4144 /  (809) 540-4740",
    direccion: " Calle Salvador Sturla No. 17, Ensanche Naco Santo Domingo, República Dominicana",
    descripcion: "Seguros vehiculares con amplia cobertura nacional."
  },
  Coopeseguros: {
    nombre: "Coopesaguros Seguros",
    telefono: "(809) 682-6118  / (809) 682-6313",
    direccion: " Calle Hermanos Deligne No. 156, Gazcue Santo Domingo, República Dominicana",
    descripcion: "Seguros vehiculares con amplia cobertura nacional."
  },
  dominicanaSeguros: {
    nombre: "Dominicana Compañia de Seguros",
    telefono: "(809) 535-1030   / (809) 533-2676",
    direccion: " Avenida 27 de Febrero No. 302, Bella Vista Santo Domingo, República Dominicana",
    descripcion: "Seguros vehiculares con amplia cobertura nacional."
   },
  LaComercialDeSeguro: {
    nombre: "La Comercial de Seguros",
    telefono: "(809) 547-1119/ (809) 683-1110",
    direccion: " Avenida Ortega y Gasset No. 79, Ensanche La Fé Santo Domingo, República Dominicana",
    descripcion: "Seguros vehiculares con amplia cobertura nacional."
  },
  MapfreBHDSeguros: {
    nombre: "Mapfre BHD Seguros",
    telefono: "(809) 562-1271/ (809) 562-1825",
    direccion: " Avenida Abraham Lincoln No. 952, Ensanche Piantini Santo Domingo, República Dominicana",
    descripcion: "Seguros vehiculares con amplia cobertura nacional."
    
}
};

function verAseguradora(id){
  const a = aseguradoras[id];
  document.getElementById("detalle").innerHTML = `
    <h2>${a.nombre}</h2>
    <p><strong>📞 Teléfono:</strong> ${a.telefono}</p>
    <p><strong>📍 Dirección:</strong> ${a.direccion}</p>
    <p><strong>🛡️ Descripción:</strong> ${a.descripcion}</p>
    `;
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

