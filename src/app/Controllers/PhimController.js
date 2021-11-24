const user = require('../../models/user');
const phim = require('../../models/phim.js');
const jwt =require('jsonwebtoken');
const express = require('express');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.static(path.join(__dirname,"resource/static")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../../resource/views"));

class PhimController {
    async index(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const Phim = await phim.findOne({
            where :{
                Ten : req.params.namephim
            }
        });
        const log = await user.findOne({
            where :{
                id : token
            }
        })
        res.render('./main_thongtin',{Phim,log});
    }
    
    
}

module.exports = new PhimController;