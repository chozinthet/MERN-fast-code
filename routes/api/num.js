const express = require('express');
const router = express.Router();

/* Mongoose model */
const num = require('../../models/num');

router.get('/', (req, res) => {
    num.find((err, doc) => {
        if(!err){
            res.json(doc);
        }
    })
})


module.exports = router;