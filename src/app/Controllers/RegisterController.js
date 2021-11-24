const user = require('../../models/user')
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,"resource/static")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"../../resource/views"));
const jwt = require('jsonwebtoken');

class RegisterController {
    index(req,res) {
        res.render('dangky');
    }

    //dang ky tai khoan
    async register(req,res) {
        const UserType = 0;
        let username = req.body.username;
        let password = req.body.password;
        let repassword = req.body.repassword;
        let email = req.body.email;
        const User = await user.findOne({
            where:{
                Email : email 
            }
        }).then(User=>{
            console.log(User)
            if(User) {
                let err="tài khoản đã tồn tại,vui lòng tạo tài khoản khác";
                res.send(err);
                setTimeout(()=>{
                    res.redirect('/register');
                },2000);
            }
            else{
                const newuser = user.create({
                    Email : email,
                    Name: username,
                    Password: password,
                    Phone: '0',
                    UserType: '0',
                    UserToken: '1',
                    Verify:'0',
                    Sex :'nam'
                })
                res.send('đã tạo tài khoản thành công');
            }
        })
    }
}

module.exports = new RegisterController;