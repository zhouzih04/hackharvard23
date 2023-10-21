const express = require('express')
const app = express()
const Request = require('../databases/request.js');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('pages/request');
});
router.get('/:id', async(req,res) => {
    try {
        const request = await Request.findOne({id: req.params.id});
        res.status(200).json(request);
    }catch(err) {
        res.status(400).json({message: err.message});
    }
});
router.post('/', async(req, res)=> {

    const request = new Request({
        picture_url: req.body.picture_url,
        poster_id: req.body.poster_id,
        location: req.body.location,
        name: req.body.name,
        description: req.body.description,
        price_range: req.body.price_range
    });
    try {
        const newRequest = await request.save();
        const id = newRequest._id.toString();
        newRequest.id = id;
        await newRequest.save();
        res.status(201).json(newRequest);
    }catch(err) {
        res.status(400).json({message: err.message});
    }
});

module.exports = router;