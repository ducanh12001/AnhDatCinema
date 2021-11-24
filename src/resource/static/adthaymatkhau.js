function checkSM(form) {
    pw1 = form.password.value;
    pw2 = form.newpassword.value;
    console.log(pw1);
    console.log(pw2 == "");
    if (!pw1) {
        alert ("bạn chưa nhập mật khẩu")
        return false;
    } else if(!pw2) {
        alert("bạn chưa nhập mật khẩu mới");
        return false;
    }
    else return true;
}
