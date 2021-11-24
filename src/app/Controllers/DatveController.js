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

class DatveController{
    async index(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where :{
                id : token
            }
        })
        const Phim = req.params.phim;

        const Phims = await phim.findOne({
            where :{
                id : Phim
            }
        })
        const SuatChieu = await suatchieu.findAll({
            include :[ {
                model:phim,
                Where : {
                    id : Phim
                }
            }]
        })
        const cum = await cumrap.findAll({
        })

        const Rap = await rap.findAll({
        })
        res.render('booking',{log,cum,Rap,SuatChieu,Phim,Phims})
    }

    async book(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where :{
                id : token
            }
        })
        let tenrap = req.body.rap;
        let khunggio = req.body.khunggio;
        let tencumrap = req.body.cumrap;

        
        const rapchieu = await rap.findAll({
            where :{
                TenRap : tenrap
            }
        })
        const suat = await suatchieu.findAll({
            where :{
                phimId : req.params.phim,
            }
        })
        res.send(suat.attr('id'))
    }
}

module.exports = new DatveController;