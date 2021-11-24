const express = require('express');
const path = require('path');
const app = express();
const user = require('../../models/user');
const rap = require('../../models/rap');
const phim = require('../../models/phim');
const  ve = require('../../models/ve')
const loaive = require('../../models/loaive')
const cumrap = require('../../models/cumrap');
const sizeof = require('object-sizeof');
const jwt = require('jsonwebtoken')

class ADRapController {
    async index(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where :{
                id : token
            }
        })
        const CumRap = await cumrap.findAll({

        })
        const Rap = await rap.findAll({
            include : {
                model : cumrap,
                required:false
            },order:[
                ['id','ASC']
            ]
        })
        res.render('rapAD',{Rap,log})
    }

    async deleteRap(req,res) {
        await rap.destroy({
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
        const link = '/admin/' + log.UserToken +"/rap";
        res.redirect(link)
    }

    async insertRap(req,res) {
        let tenrap = req.body.tenrap;
        let loairap = req.body.loairap;
        let ktngang = req.body.ktngang;
        let ktdoc = req.body.ktdoc;
        let cumrapid = req.body.cumrapid;

        const Rap = await rap.create({
            TenRap : tenrap,
            LoaiRap : loairap,
            KTNgang : ktngang,
            KTDoc : ktdoc,
            cumrapId: cumrapid
        })

        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
              where :{
                  id : token
              }
        })
        const link = '/admin/' + log.UserToken +"/rap";
        res.redirect(link)
    }

}

module.exports = new ADRapController;