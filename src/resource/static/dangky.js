let password = document.getElementsByName('password');
let repassword = document.getElementsByName('repassword');

console.log('ok');

function checkSM(form) {
    pw1 = form.password.value;
    pw2 = form.repassword.value;
    user = form.username.value;
    email = form.username.value;
    console.log(pw1);
    console.log(pw2 == "");
    if (pw1 != pw2) {
        alert ("mật khẩu không giống nhau ,vui lòng nhập lại")
        return false;
    } else if(pw1 == "" && pw2 == "") {
        alert("bạn chưa nhập mật khẩu");
        return false;
    } else if(user == "") {
        alert('bạn chưa nhập tài khoản');
        return false;
    } else if(email == "") {
        alert('bạn chưa nhập email');
        return false;
    }
    else return true;
}