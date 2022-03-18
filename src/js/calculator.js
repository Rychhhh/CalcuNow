let outputscreen = document.getElementById('output-screen');

function display(num) {
    outputscreen.value += num;
}

function calculator() {

    if(eval(outputscreen.value) == undefined) {
        alert('anda tidak memasukan angka');
    } else {
        try {
            outputscreen.value = eval(outputscreen.value);
        } catch(err) {
            alert('error');
        }
    }
    
}

function bersihkan() {
        outputscreen.value = "";
}

function del() {
    outputscreen.value = outputscreen.value.slice(0,-1);
}