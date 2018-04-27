const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "({VALUE}) é menor que o valor mínimo permitido de ({MIN})."
mongoose.Error.messages.Number.max = "({VALUE}) é maior que o valor máximo permitido de ({MAX})."
mongoose.Error.messages.String.enum = "({VALUE}) não é uma opção para o campo ({PATH})."