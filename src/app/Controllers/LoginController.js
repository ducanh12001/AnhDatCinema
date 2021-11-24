const user = require('../../models/user')
const express = require('express');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(express.static(path.join(__dirname,"resource/static")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../../resource/views"));

class LoginController {
    index(req,res) {
        res.render('login');
    }

    async login(req,res) {
        let email = req.body.username;
        let password = req.body.password;
        let arr = [];
        if(!email) {
            err.push('email trong')
        }
        if(!password) {
            err.push('password trong');
        }

        //dang nhap va check xem ton tai hay khong ton tai tai khoan 
        const User = await user.findOne({
            where:{
                Email : email 
            }
        }).then (User =>{
            console.log(User);
            console.log(password);
            if(User){
                    if(password == User.Password) {
                        let token  = jwt.sign(User.id,'matkhau')
                        if(User.UserType == 1) {
                        let link = '/home/' + token
                        return res.redirect(link);
                        } else {
                            let link = '/admin/' + token
                            return res.redirect(link);
                        }
                    }
                    else {
                        const err = "Mật khẩu không khớp"
                        return res.send(err);
                    }
            }
            else {
                const err = "Tài khoản chưa được kích hoạt vui lòng đăng ký tài khoản để đăng nhập"
                return res.send(err)
            }
        })
        
    }
}

module.exports = new LoginController;
