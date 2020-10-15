const express = require('express');
const router = express.Router();
const Role = require('../database/models/Role');
const User = require('../database/models/User');

// INDEX /api/roles
router.get('/', (req, res) => {
    Role.findAll({
        include: {
            model: User,
            attributes: ['name', 'surname', 'secondSurname', 'email']
        },
        attributes: ['name', 'description']
    }, ).then(roles => {
        res.json(roles);
    })
})


// CREATE

router.post('/', (req, res) => {
    Role.create({
        name: req.body.name,
        description: req.body.description,
    }).then(role => {
        res.json(role);
    });
});

// READ /api/roles/:id

router.get('/:id', (req, res) => {
    Role.findByPk(req.params.id).then(role => {
        res.json(role);
    });
});

// UPDATE /api/roles/:id

router.patch('/:id', (req, res) => {
    Role.update({
        name: req.body.name,
        description: req.body.description
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

// DELETE /api/roles/:id

router.delete('/:id', (req, res) => {
    Role.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;