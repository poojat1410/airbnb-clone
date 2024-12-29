const express = require('express');
const Property = require('../models/Property');
const router = express.Router();

// Add Property
router.post('/add', async (req, res) => {
    const { title, description, pricePerNight, location, images } = req.body;
    try {
        const newProperty = new Property({ title, description, pricePerNight, location, images });
        await newProperty.save();
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
