const newRouter = require('./login.js')
const newRouter2 = require('./register.js')
const newRouter3 = require('./trangchu.js')
const newRouter4 = require('./phim.js')
const newRouter5 = require('./Thanhvien.js')
const newRouter6 = require('./datve.js')
const admin1 = require('./admin.js')
const admin2 = require('./adminrap.js')
const admin3 = require('./adminphim.js')
const admin4 = require('./adminbooking')
const admin5 = require('./admintime')
const admin6 = require('./adminupdate')
const admin7 = require('./adminuser')
const admin8 = require('./dsphim')
const admin9 = require('./canhan')
function route(app) {
    
    app.use('/login',newRouter);
    app.use('/register',newRouter2);
    app.use('/home',newRouter3);
    app.use('/phim',newRouter4);
    app.use('/member',newRouter5);
    app.use('/booking',newRouter6)
    app.use('/admin',admin1)
    app.use('/admin',admin2)
    app.use('/admin',admin3)
    app.use('/admin',admin4)
    app.use('/admin',admin5)
    app.use('/admin',admin6)
    app.use('/admin',admin7)
    app.use('/dsphim',admin8)
    app.use('/canhan',admin9)
}

module.exports = route;