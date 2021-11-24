
const express = require('express');
const path = require('path');
const app = express();
const user = require('../../models/user');
const rap = require('../../models/rap');
const phim = require('../../models/phim');
const  ve = require('../../models/ve')
const loaive = require('../../models/loaive')
const jwt = require('jsonwebtoken')
class AdminController {
    
    async index(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where :{
                id : token
            }
        })
       const User = await user.findAndCountAll({
           where : {
               UserType : 1
           }
       })
       let users = User.count;
       const Rap = await user.findAndCountAll({
       })
       let raps = Rap.count;
       const Phim = await phim.findAndCountAll({
       })
       let phims = Phim.count;
       const Ve = await ve.findAndCountAll({
       })
       let ves = Ve.count;
       res.render('admin',{users,raps,phims,ves,log});
    }
    
}

module.exports = new AdminController;