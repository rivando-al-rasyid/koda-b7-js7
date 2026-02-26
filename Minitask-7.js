nilaiUjian = [{ nama: "Ahmad", nilai: {mtk: 85, ipa: 90, bing: 80, bi:80 } },
              { nama: "Ronald", nilai: {mtk: 80, ipa: 80, bing: 70, bi:80 } }];

let [ahmad, ronald] = nilaiUjian;

function totalNilai(ahmad){
    let {nama, nilai:{mtk, ipa, bing, bi}} = ahmad;
    let total = mtk + ipa + bing + bi;
    let rataRata = total / 4;
    return {nama,total, rataRata};
}
console.log(`Nama : ${totalNilai(ahmad).nama}
Total Nilai  : ${totalNilai(ahmad).total}
Rata-rata    : ${totalNilai(ahmad).rataRata}`);
