let a = document.getElementById('btn-save');
a.onclick = function() {
    document.getElementById("rap").value = document.getElementById("rapselect").value;
    document.getElementById("khuvuc").value= document.getElementById("cumselect").value;
    document.getElementById("khunggio").value = document.getElementById("gioselect").value;
    document.getElementById("gia").value = document.getElementById("giaselect").value;
}