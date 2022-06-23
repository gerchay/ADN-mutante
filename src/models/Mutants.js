const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Mutants = mongoose.model('Mutant',new Schema({
    checksumDna: String,
    isMutant: Boolean,
}));

module.exports = Mutants;