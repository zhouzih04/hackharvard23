const express = require('express')
const app = express()
const Offer = require('../databases/offer.js');
const Request = require('../databases/request.js');
const User = require('../databases/user.js');
const router = express.Router();

router.get('/:id',async(req,res) => {
    try{
        const id = req.params.id;
        const user = await User.findOne({id: id});
        const offers = await Offer.find({poster_id: id});
        const requests = await Request.find({poster_id: id});
        res.status(200).json({id: id, displayName: user.displayName, email: user.email, offers: offers, requests: requests});
    }catch (err) {
        res.status(400).json({message: err.message});
    }
})

module.exports = router;