const express = require('express')
const app = express()
const Offer = require('../databases/offer.js');
const Request = require('../databases/request.js');

const router = express.Router();

router.get('/offers', async(req,res) => {
    try {
        const offers = await Offer.find({});
        res.status(200).json(offers);
    }catch(err) {
        res.status(400).json({message: err.message});
    }
});

router.get('/requests', async(req,res) => {
    try {
        const requests = await Request.find({});
        res.status(200).json(requests);
    }catch(err) {
        res.status(400).json({message: err.message});
    }
});

module.exports = router;