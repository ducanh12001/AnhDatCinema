const express = require('express');
const path = require('path');
const app = express();
const user = require('../../models/user');
const rap = require('../../models/rap');
const phim = require('../../models/phim.js')
const  ve = require('../../models/ve')
const loaive = require('../../models/loaive')
const cumrap = require('../../models/cumrap');
const sizeof = require('object-sizeof');
const jwt = require('jsonwebtoken')

class ADPhimController {
   async index(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where :{
                id : token
            }
        })
        const phimchieu2 = await phim.findAll({
        })
        res.render('movieAd',{log,phimchieu2 : phimchieu2})
    }

    async deletephim(req,res) {
        await phim.destroy({
            where: {
              id: req.params.id,
            }
          });
          const token = jwt.verify(req.params.auth,'matkhau')
          const log = await user.findOne({
              where :{
                  id : token
              }
          })
          const link = '/admin/' + log.UserToken +"/phim";
        res.redirect(link)
    }

    async insertphim(req,res) {

        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
              where :{
                  id : token
              }
          })
        const link = '/admin/' + log.UserToken +"/phim";
        let ten = req.body.ten;
        let ngaycongchieu = req.body.ngaycongchieu;
        let poster = req.body.poster;
        let trailers = req.body.trailers;
        let thoiluong = req.body.thoiluong;
        let daodien = req.body.daodien;
        let dienvien = req.body.dienvien;
        let theloai = req.body.theloai;
        let noidung = req.body.noidung;
        let nhasanxuat = req.body.nhasanxuat;

        const Phim = await phim.create({
            Ten : ten,
            NgayCongChieu : ngaycongchieu,
            Poster : poster,
            TraiLers : trailers,
            ThoiLuong : thoiluong,
            DaoDien : daodien,
            DienVien : dienvien,
            TheLoai : theloai,
            NoiDung :noidung,
            NhaSanXuat : nhasanxuat
        })

        
        res.redirect(link)
    }
}

module.exports = new ADPhimController;