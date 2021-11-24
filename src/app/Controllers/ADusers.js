const express = require('express');
const path = require('path');
const app = express();
const user = require('../../models/user');
const rap = require('../../models/rap');
const phim = require('../../models/phim');
const  ve = require('../../models/ve')
const loaive = require('../../models/loaive')
const jwt = require('jsonwebtoken')

class ADusers {
    async index(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where :{
                id : token
            }
        })
        const User = await user.findAll({
        })
        res.render('userAd',{log,User})
    }
}

module.exports = new ADusers;