const user = require('../../models/user')
const express = require('express');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cumrap = require('../../models/cumrap')
const rap = require('../../models/rap');
const phim = require('../../models/phim');
const suatchieu = require('../../models/suatchieu');
app.use(express.static(path.join(__dirname,"resource/static")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../../resource/views"));

class CanhanController {
    async index(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where :{
                id : token
            }
        })
        res.render('Canhan',{log})
    }
}

module.exports = new CanhanController;