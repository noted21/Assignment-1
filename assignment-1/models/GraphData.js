var mongoose = require('mongoose');

var CardsSchema = new mongoose.Schema({
    name: String,
    colors: String,
    types: String,
},
{
 collection: 'Cards'   
});
mongoose.model ('GraphData', CardsSchema);
