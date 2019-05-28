import './polyfills/endsWith';

const bendings = [
    'Airbending',
    'Firebending',
    'Waterbending',
    'Energybending',
    'Earthbending',
    'Bending arts'
];

const originals = bendings.filter(bending => bending.endsWith('bending'));

console.log(originals);
