const express = require('express');
const app = express();
const User = require('../../models/userModel')
const bcrypt = require('bcrypt');

// CREATE NEW USER
app.post('/user', (req, res) => {

    let body = req.body
    
    let user  = new User({
        name: body.name,
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 4),
        bdate: body.bdate,
        genre: body.genre,
        adress: body.adress,
        tlf: body.tlf,
        subscribe: body.subscribe,
        role: body.role
    })

    user.save((err, userDB) => {
        if (err) {
            return res.status(500).json({
                success: false,
                err,
                message: 'Ha ocurrido un error al crear el usuario'
            })
        }
        res.status(201).json({
            success: true,
            message: 'Usuario creado correctamente'
        })
    })
})

module.exports = app