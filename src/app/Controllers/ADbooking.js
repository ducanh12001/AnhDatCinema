const loaive = require('../../models/loaive')
const express = require('express');
const path = require('path');
const app = express();
const user = require('../../models/user');
const rap = require('../../models/rap');
const phim = require('../../models/phim');
const  ve = require('../../models/ve')

const jwt = require('jsonwebtoken')
const datcho = require('../../models/datcho')
class ADbooking {
    async index(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where :{
                id : token
            }
        })
        const Ves = await ve.findAll({
            include :{
                model : datcho
            }
        })
        res.render('bookingAd',{log,Ves})
    }
}

module.exports = new ADbooking;