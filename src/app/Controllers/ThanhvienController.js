const user = require('../../models/user')
const phim = require('../../models/phim.js')
const jwt = require('jsonwebtoken')
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,"resource/static")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../../resource/views"));

class ThanhvienController{
    async index(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        const log = await user.findOne({
            where:{
                id: token
            }
        })
        res.render('main_thanhvien',{log})
    }

    async change(req,res) {
        const token = jwt.verify(req.params.auth,'matkhau')
        let name = req.body.name;
        let date = req.body.date;
        let phone = req.body.phone;
        let address = req.body.address;
        let birth = req.body.birth;
        let password = req.body.password;
        let newpassword = req.body.newpassword;
        const User = await user.findOne({
            where:{
                id : jwt.verify(req.params.auth,'matkhau')
            }
        }).then((User)=>{
            if(User.Name != name || User.Phone != phone || User.createdAt != date || User.Address != address || User.Birth != birth) {
                user.update({
                    Name :name,
                    Phone : phone,
                    createdAt : date,
                    Address : address,
                    Birth : birth
                },
                {
                    where:{
                        id:jwt.verify(req.params.auth,'matkhau')
                    }
                })
                let link = "/member/" + req.params.auth;
                res.redirect(link);
            } else {
                let link = "/member/" + req.params.auth;
                res.redirect(link);
            }
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
    }
}

module.exports = new ThanhvienController;