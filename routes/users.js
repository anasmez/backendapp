const express = require('express');
const Role = require('../database/models/Role');
const router=express.Router();
const User=require('../database/models/User')



// INDEX /api/users
router.get('/', (req, res) => {
    User.findAll({
        include: {
            model: Role,
            attributes: ['name', 'description']
        },
        attributes: ['name', 'surname', 'secondSurname', 'email']        
    }, ).then(users => {
        res.json(users);
    })
})


// CREATE /api/users

router.post('/', (req, res)=>{
    User.create({
        name: req.body.name,
        surname: req.body.surname,
        secondSurname: req.body.secondSurname,
        email: req.body.email,
    }).then(user=>{
        res.json(user);
    }).catch(err=>{
        res.json(err);
    })
});

// READ /api/users/:id

router.get('/:id', (req, res) => {
    User.findByPk(req.params.id).then(role => {
        res.json(role);
    });
});

// UPDATE /api/users/:id

router.patch('/:id', (req, res) => {
    User.update({
        name: req.body.name,
        surname: req.body.surname,
        secondSurname: req.body.secondSurname,
        email: req.body.email,
        roleId: req.body.roleId
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE /api/users/:id

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});


module.exports=router;