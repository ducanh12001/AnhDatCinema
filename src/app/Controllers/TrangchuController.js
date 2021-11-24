const express = require('express');
const path = require('path');
const app = express();
const phim = require('../../models/phim.js')
const user = require('../../models/user.js')
const jwt = require('jsonwebtoken');
app.use(express.static(path.join(__dirname,"resource/static")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../../resource/views"));

class TrangchuController {
    async index(req,res) {
        const phimchieu = await phim.findAll({
            limit: 4,
            order: [
                ['createdAt','ASC']
            ]
        })
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where :{
                id : token
            }
        })
        res.render('trangchuLog',{phimchieu,log});
    }

}

module.exports = new TrangchuController;