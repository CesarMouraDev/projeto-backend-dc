const HStore = require('pg-hstore');
const hstore = new HStore();

// Objeto JavaScript
const obj = { key1: 'value1', key2: 'value2' };

// Converter objeto para hstore string
const hstoreString = hstore.stringify(obj);
console.log('HStore String:', hstoreString);

// Converter hstore string para objeto
const parsedObj = hstore.parse(hstoreString);
console.log('Parsed Object:', parsedObj);
