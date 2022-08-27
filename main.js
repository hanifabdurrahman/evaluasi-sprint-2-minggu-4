////1
let formatPhone=(...angka)=>{return [...angka] } 
console.log(formatPhone);    
////2
function hitungGaji(angka) {


    let gaji = [{
        nama: 'huda',
        jabatan: 'kepala chef',
        gajiperhari: 'Rp100.000',
        absen:'2 hari',
        totalgaji:2800000

    }, {
        nama: 'abdullah',
        jabatan: 'assistant chef',
        gajiperhari:'Rp 90.000',
        absen: '3 hari',
        totalgaji: 2430000

    }, {
        nama: 'imran',
        jabatan:'kasir',
        gajiperhari:'Rp 50.000',
        absen: '1 hari',
        totalgaji: 1450000

    }, {
        nama: 'fajar',
        jabatan:'pelayan',
        gajiperhari:'Rp 50.000',
        absen: '1 hari',
        totalgaji: 1450000
    }]
    let data=[]
    for(let index in gaji){
        data.push(gaji[index])
    }
    console.table(gaji)
}
hitungGaji()
////3
function orderPizza(type,name){
    console.log('pizza ordered...');
}



