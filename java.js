// MD5
function MD5calculateHash() {
    var data = document.getElementById("inputDataMD5").value;
    var hashValue = CryptoJS.MD5(data).toString();
    document.getElementById('resultMD5').innerHTML = `<b>Hash value:</b> ${hashValue}`;
}

// SHA-1
function SHA1calculateHash() {
    var data = document.getElementById("inputDataSHA1").value;
    var hashValue = CryptoJS.SHA1(data).toString();
    document.getElementById('resultSHA1').innerHTML = `<b>Hash value:</b> ${hashValue}`;
}

// SHA-2
function SHA2calculateHash() {
    var data = document.getElementById("inputDataSHA2").value;
    var hashValue = CryptoJS.SHA224(data).toString();
    var hashValue1 = CryptoJS.SHA256(data).toString();
    var hashValue2 = CryptoJS.SHA384(data).toString();
    var hashValue3 = CryptoJS.SHA512(data).toString();
    document.getElementById("resultSHA2").innerHTML = "";
    document.getElementById('resultSHA2').innerHTML += `<p><b>Hash value 224:</b> ${hashValue}</p>`;
    document.getElementById('resultSHA2').innerHTML += `<p><b>Hash value 256:</b> ${hashValue1}</p>`;
    document.getElementById('resultSHA2').innerHTML += `<p><b>Hash value 385:</b> ${hashValue2}</p>`;
    document.getElementById('resultSHA2').innerHTML += `<p><b>Hash value 512:</b> ${hashValue3}</p>`;
}

// SHA-3
function SHA3calculateHash() {
    var data = document.getElementById("inputDataSHA3").value;
    var hashValue = CryptoJS.SHA3(data).toString();
    document.getElementById('resultSHA3').innerHTML = `<b>Hash value:</b> ${hashValue}`;
}

// RIPEMD-160
function RIPEMD160calculateHash() {
    var data = document.getElementById("inputDataRIPEMD160").value;
    var hashValue = CryptoJS.RIPEMD160(data).toString();
    document.getElementById('resultRIPEMD160').innerHTML = `<b>Hash value:</b> ${hashValue}`;
}