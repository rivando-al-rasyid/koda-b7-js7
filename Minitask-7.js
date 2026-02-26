nilaiUjian = { nama: "Ahmad", nilai: {mtk: 85, ipa: 90, bing: 80, bi:80 } };

let {nama, nilai:{mtk, ipa, bing, bi}} = nilaiUjian;

function totalNilai(nama, mtk, ipa, bing, bi){
    let total = mtk + ipa + bing + bi;
    let rataRata = total / 4;
    return {total, rataRata};
}
console.log(`Nama : ${nama}
        MTK : ${mtk}
        IPA : ${ipa}
        BING : ${bing}
        BI : ${bi}
Total Nilai : ${totalNilai(nama, mtk, ipa, bing, bi).total}
Rata-rata   : ${totalNilai(nama, mtk, ipa, bing, bi).rataRata}`);
