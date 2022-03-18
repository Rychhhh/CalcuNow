var harga = document.getElementById('harga').value;
var diskon = document.getElementById('diskon').value;

function cari() {
    var harga = document.getElementById('harga').value;
    var diskon = document.getElementById('diskon').value;

    hasil = harga - (harga * diskon) / 100;

    document.getElementById('hasil').value = hasil;
}