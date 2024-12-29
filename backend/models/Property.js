const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    location: { type: String, required: true },
    images: [{ type: String }],
});

module.exports = mongoose.model('Property', propertySchema);
