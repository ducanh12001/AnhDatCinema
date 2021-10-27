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