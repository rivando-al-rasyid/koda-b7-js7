// array of objects nama dan nilai ujian
nilaiUjian = [{ nama: "Ahmad", nilai: {mtk: 85, ipa: 90, bing: 80, bi:80 } },
              { nama: "Ronald", nilai: {mtk: 80, ipa: 80, bing: 70, bi:80 } }];

// destructuring array of objects
let [ahmad, ronald] = nilaiUjian;

// function untuk menghitung total nilai dan rata-rata
function totalNilai(namaSiswa){
    // destructuring object nilaiSiswa
    let {nama, nilai:{mtk, ipa, bing, bi}} = namaSiswa;
    // menghitung total nilai dan rata-rata
    let total = mtk + ipa + bing + bi;
    // menghitung rata-rata
    let rataRata = total / 4;
    // menampilkan hasil
    let hasil = console.log(`${nama} memiliki total nilai ${total} dan rata-rata ${rataRata}`);
    return {hasil};
}
// memanggil fungsi totalNilai dengan parameter ronald
totalNilai(ronald);