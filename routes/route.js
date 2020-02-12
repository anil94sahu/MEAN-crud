const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

router.get('/contacts', (req, res, next) => {
    Contact.find((err, contacts) => {
        res.json(contacts);
    })
})

// add contact
router.post('/contacts', (req, res, next) => {
    // logic to add contact
    let newContact = new Contact({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        phone:req.body.phone,
    });

    newContact.save((err, contact) => {
        if (err){
            console.log({msg: 'failed to add contact'});
        }
        else {
            res.json({msg: 'contact added successfully'})
        }
    })
})

// delete contact
router.delete('/contacts/:id', (req, res, next) => {
    // logic to delete contact
    Contact.deleteOne({_id: req.params.id}, (err, result) => {
        if (err){res.json(err)}
        else {
            res.json(result)
        }
    })
})

module.exports = router;