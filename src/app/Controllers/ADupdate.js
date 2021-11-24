const express = require('express');
const path = require('path');
const app = express();
const user = require('../../models/user');
const rap = require('../../models/rap');
const phim = require('../../models/phim');
const  ve = require('../../models/ve')
const loaive = require('../../models/loaive')
const jwt = require('jsonwebtoken')
class ADupdate {
    async index(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where :{
                id : token
            }
        })
        res.render('passAd',{log})
    }
    async change(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
              where :{
                  id : token
              }
        })
        let password = req.body.password;
        let newpassword = req.body.newpassword;
        const User = await user.findOne({
            where:{
                id : jwt.verify(req.params.auth,'matkhau')
            }
        }).then((User)=>{
            if(password) {
                if(User.Password == password) {
                    user.update({
                        Password : newpassword
                    },{
                        where :{
                            id:jwt.verify(req.params.auth,'matkhau')
                        }
                    }
                    )
                }
            }
        })
        const link = '/admin/' + log.UserToken;
        res.redirect(link)
    }
}

module.exports = new ADupdate