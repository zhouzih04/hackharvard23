const express = require('express')
const app = express()
const Offer = require('../databases/offer.js');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('pages/offer');
});
router.get('/:id', async(req,res) => {
    try {
        const offer = await Offer.findOne({id: req.params.id});
        res.status(200).send(offer);
    }catch(err) {
        res.status(400).json({message: err.message});
    }
});
router.post('/', async(req, res)=> {

    const offer = new Offer({
        picture_url: req.body.picture_url,
        poster_id: req.body.poster_id,
        location: req.body.location,
        name: req.body.name,
        description: req.body.description,
        price_range: req.body.price_range
    });
    try {
        const newOffer = await offer.save();
        const id = newOffer._id.toString();
        newOffer.id = id;
        await newOffer.save();
        res.status(201).json(newOffer);
    }catch(err) {
        res.status(400).json({message: err.message});
    }
});

module.exports = router;