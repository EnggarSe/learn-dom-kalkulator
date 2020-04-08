const penjumlahan = document.getElementById("tambah");
const pengurangan = document.getElementById("kurang");
const perkalian = document.getElementById("kali");
const pembagian = document.getElementById("bagi")
const klikAngka1 = document.getElementById("angka1")
const klikAngka2 = document.getElementById("angka2")
const modulus = document.getElementById("modulus")

function angka1() {
    let firstNum = document.getElementById("angka1").value;
    return firstNum
}
function angka2() {
    let secondNum = document.getElementById("angka2").value;
    return secondNum
}

function angkaClear(hasil){
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = hasil;
}

const hasilOperasi = (hasil) => {
    let hasilInput = document.getElementById("hasilOperasi");
    hasilInput.innerHTML = ""
    if (hasil) {
        console.log(hasil);
        hasilInput.innerHTML += `<input id = "hasil" type="number" disabled class="form-control" 
        id="exampleInputPassword1" placeholder = ${hasil} >`;
    }
}
const addOperation = (event, firstNum = angka1(), secondNum = angka2()) => {
    event.preventDefault();
    if (firstNum == "" || secondNum == "") {
        alert("angka tidak boleh kosong")
    }
    else {
        let hasil = parseFloat(firstNum) + parseFloat(secondNum);
        hasilOperasi(hasil);
        angkaClear(hasil)   
    }
}
const subOperation = (event, firstNum = angka1(), secondNum = angka2()) => {
    event.preventDefault();
    if (firstNum == "" || secondNum == "") {
        alert("angka tidak boleh kosong")
    }
    else {
        let hasil = parseFloat(firstNum) - parseFloat(secondNum);
        hasilOperasi(hasil);
        angkaClear(hasil)   
    }
}
const divOperation = (event, firstNum = angka1(), secondNum = angka2()) => {
    event.preventDefault();
    if (firstNum == "" || secondNum == "") {
        alert("angka tidak boleh kosong")
    }
    else {
        let hasil = parseF(firstNum) / parseFloat(secondNum);
        hasilOperasi(hasil);
        angkaClear(hasil)   
    }
}
const timesOperation = (event, firstNum = angka1(), secondNum = angka2()) => {
    event.preventDefault();
    if (firstNum == "" || secondNum == "") {
        alert("angka tidak boleh kosong")
    }
    else {
        let hasil = parseFloat(firstNum) * parseFloat(secondNum);
        hasilOperasi(hasil);
        angkaClear(hasil)   
    }
}
const modOperation = (event, firstNum = angka1(), secondNum = angka2()) => {
    event.preventDefault();
    if (firstNum == "" || secondNum == "") {
        alert("angka tidak boleh kosong")
    }
    else {
        let hasil = parseFloat(firstNum) % parseFloat(secondNum);
        hasilOperasi(hasil);
        angkaClear(hasil)   
    }
}
const klikNum = (event)=>{
    event.preventDefault();
    let hasilInput = document.getElementById("hasilOperasi");
    hasilInput.innerHTML = `<input id = "hasil" type="number" disabled class="form-control" 
        id="exampleInputPassword1" placeholder = "0" >`;
}

penjumlahan.addEventListener('click', addOperation);
pengurangan.addEventListener('click', subOperation);
pembagian.addEventListener('click', divOperation);
perkalian.addEventListener('click', timesOperation);  
modulus.addEventListener('click', modOperation);  
klikAngka1.addEventListener('click', klikNum);
klikAngka2.addEventListener('click', klikNum);