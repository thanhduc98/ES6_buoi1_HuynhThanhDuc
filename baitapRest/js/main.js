let domID = id => document.getElementById(id);

const diemTb = (...arrDiem) => {
    let result = 0;
    let tong = 0;
    for (let num of arrDiem){
        result += num;
        tong = arrDiem.length   ;
    }
    return result / tong;
}

domID("btnKhoi1").onclick = function(){
    let toan = domID("inpToan").value*1;
    let ly = domID("inpLy").value*1;
    let hoa = domID("inpHoa").value*1;
    let dtb1 = diemTb(toan,ly,hoa).toFixed(2);
    domID("tbKhoi1").innerHTML = dtb1;
}
domID("btnKhoi2").onclick = () =>{
    let van = domID("inpVan").value*1;
    let su = domID("inpSu").value*1;
    let dia = domID("inpDia").value*1;
    let engLish = domID("inpEnglish").value*1;
    let dtb2 = diemTb(van,su,dia,engLish).toFixed(2);
    domID("tbKhoi2").innerHTML = dtb2;
}