let a = document.getElementById('checkpass');
let b = document.getElementsByClassName('passcheck');
for(let i = 0; i<b.length;i++) {
    b[i].classList.add('passcheck1');
}
function check() {
if(a.checked == true) {
    console.log(b[0]);
    for(let i = 0; i<b.length;i++) {
        b[i].classList.remove('passcheck1');
    }
}
else {
    for(let i = 0; i<b.length;i++) {
        b[i].classList.add('passcheck1');
    }
}
}

let password = document.getElementsByName('password');
let newpassword = document.getElementsByName('newpassword');

console.log('ok');
let checksubmit = document.getElementById('checkpass');


function checkSM(form) {
    if(checkpass.checked) {
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
}
