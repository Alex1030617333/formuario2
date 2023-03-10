
const btnNuevoJuego = document.querySelector("#btnNuevoJuego"),
btnPedirCarta = document.querySelector("#btnpedir"),
btnDetener = document.querySelector("#btnDeneter"),
puntosHTML = document.querySelectorAll("small"),
jugadoresCartas = document.querySelectorAll(".cards");


let baraja = [],
  jugadoresPuntos = [];



const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"];


const init = (cantidadJugadores = 2) => {
  baraja = crearBaraja();
  jugadoresPuntos = [];

  for (let i = 0; i < cantidadJugadores; i++) jugadoresPuntos.push(0);

  for (let jugadorPuntos in jugadoresPuntos) {
    puntosHTML[jugadorPuntos].textContent = 0;
    jugadoresCartas[jugadorPuntos].textContent = "";
  }

  habilitarBotones();
};

const habilitarBotones = () => {
  btnPedirCarta.disabled = false;
  btnDetener.disabled = false;
};

const deshabilitarBotones = () => {
  btnPedirCarta.disabled = true;
  btnDetener.disabled = true;
};


const crearBaraja = () => {
  baraja = [];

  for (let tipo of tipos) {
    for (let i = 2; i <= 10; i++) {
      baraja.push(i + tipo);
    }

    for (let especial of especiales) baraja.push(especial + tipo);
  }

  return _.shuffle(baraja);
};

/** Se encarga de obtener una carta */
const obtenerCarta = () => {
  if (baraja.length <= 0) throw "No hay cartas en la baraja";

  return baraja.pop();
};


const acumularPuntos = ({ carta, turno }) => {
  jugadoresPuntos[turno] += obtenerValorDeCarta(carta);
  puntosHTML[turno].textContent = jugadoresPuntos[turno];

  return jugadoresPuntos[turno];
};

const obtenerValorDeCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);

  return !isNaN(valor) ? valor * 1 : valor === "A" ? 11 : 10;
};

const crearCarta = ({ carta, turno }) => {
  const imagen = document.createElement("img");
  imagen.src = `assets/${carta}.png`;
  imagen.classList.add("carta");
  jugadoresCartas[turno].append(imagen);
};

const turnoComputadora = (puntosMinimos) => {
  let computadoraPuntos = 0;

  do {
    const carta = obtenerCarta();
    computadoraPuntos = acumularPuntos({
      carta,
      turno: jugadoresPuntos.length - 1,
    });
    crearCarta({ carta, turno: jugadoresPuntos.length - 1 });
  } while (computadoraPuntos < puntosMinimos && puntosMinimos <= 21);

  determinarGanador(jugadoresPuntos);
};

const determinarGanador = ([jugadorPuntos, computadoraPuntos]) => {
  setTimeout(() => {
    if (jugadorPuntos > 21) {
      alert("Computadora gana!");
      return;
    }

    if (computadoraPuntos > 21) {
      alert("Jugador Gana!");
      return;
    }

    if (jugadorPuntos === computadoraPuntos) {
      alert("Nadie gana :(");
      return;
    }

    if (jugadorPuntos > computadoraPuntos) {
      alert("Jugador gana!");
      return;
    }

    alert("Computadora gana!");
  }, 400);
};


btnNuevoJuego.addEventListener("click", () => {
  init();
});

btnPedirCarta.addEventListener("click", () => {
  const carta = obtenerCarta();
  const jugadorPuntos = acumularPuntos({ carta, turno: 0 });
  crearCarta({ carta, turno: 0 });

  if (jugadorPuntos < 21) return;

  deshabilitarBotones();
  turnoComputadora(jugadorPuntos);
});

btnDetener.addEventListener("click", () => {
  deshabilitarBotones();
  turnoComputadora(jugadoresPuntos[0]);
});














