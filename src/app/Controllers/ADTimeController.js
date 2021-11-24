const express = require('express');
const path = require('path');
const app = express();
const user = require('../../models/user');
const rap = require('../../models/rap');
const phim = require('../../models/phim');
const  ve = require('../../models/ve')
const loaive = require('../../models/loaive')
const jwt = require('jsonwebtoken')
const suatchieu = require('../../models/suatchieu')
class ADTimeController {
    async index(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where :{
                id : token
            }
        })
        const SuatChieu = await suatchieu.findAll({})
        res.render('showtimeAD',{log,SuatChieu})
    }

    async deleteSuat(req,res) {
        await suatchieu.destroy({
            where: {
              id: req.params.id
            }
          });
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
              where :{
                  id : token
              }
        })
        const link = '/admin/' + log.UserToken +"/time";
        res.redirect(link)
    }
    async insertSuat(req,res) {
        let id = req.body.id;
        let thoidiembatdau = req.body.thoidiembatdau;
        let thoidiemketthuc = req.body.thoidiemketthuc;
        let rapid = req.body.rapid;
        let phimid = req.body.phimid;

        const SuatChieu = await suatchieu.create({
            id : id,
            ThoiDiemBatDau : thoidiembatdau,
            ThoiDiemKetThuc : thoidiemketthuc,
            rapId : rapid,
            phimId : phimid
        })

        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
              where :{
                  id : token
              }
        })
        const link = '/admin/' + log.UserToken +"/time";
        res.redirect(link)
    }
}

module.exports = new ADTimeController