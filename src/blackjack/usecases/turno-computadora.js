// turno de la computadora

import { pedirCarta } from './pedir-carta';
import { valorCarta } from './valor-carta';
import { crearCartaHtml } from './crear-carta-html';

/**
 *
 * @param {number} puntosMinimos
 * @param {Array<string>} deck
 * @param {HTMLElement} divCartasComputadora
 * @param {HTMLElement} puntosHTML
 */
export const turnoComputadora = (puntosMinimos, deck = [], divCartasComputadora, puntosHTML) => {
	if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
	if (!puntosHTML) throw new Error('Argumentos puntosHTLM es necesario');

	let puntosComputadora = 0;
	do {
		const carta = pedirCarta(deck);

		puntosComputadora = puntosComputadora + valorCarta(carta);
		puntosHTML.innerText = puntosComputadora;

		// <img class="carta" src="assets/cartas/2C.png">
		const imgCarta = crearCartaHtml(carta);
		divCartasComputadora.append(imgCarta);

		if (puntosMinimos > 21) {
			break;
		}
	} while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

	setTimeout(() => {
		if (puntosComputadora === puntosMinimos) {
			alert('Nadie gana :(');
		} else if (puntosMinimos > 21) {
			alert('Computadora gana');
		} else if (puntosComputadora > 21) {
			alert('Jugador Gana');
		} else {
			alert('Computadora Gana');
		}
	}, 100);
};
