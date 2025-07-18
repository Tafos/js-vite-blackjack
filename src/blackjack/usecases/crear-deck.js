import _ from "underscore";


// export const miNombre = 'Fernando'

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta  ejemplo: ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales ejemplo: ['A','J','Q','K'];
 * @returns {Array<string>}  retorn un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposdeCarta es obligatorio como un arreglo de string');
   
    let deck  = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

// export default crearDeck;