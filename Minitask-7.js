nilaiUjian = [{ nama: "Ahmad", nilai: {mtk: 85, ipa: 90, bing: 80, bi:80 } },
              { nama: "Ronald", nilai: {mtk: 80, ipa: 80, bing: 70, bi:80 } }];

let [ahmad, ronald] = nilaiUjian;

function totalNilai(namaSiswa){
    let {nama, nilai:{mtk, ipa, bing, bi}} = namaSiswa;
    let total = mtk + ipa + bing + bi;
    let rataRata = total / 4;
    let hasil = console.log(`${nama} memiliki total nilai ${total} dan rata-rata ${rataRata}`);
    return {hasil};
}

totalNilai(ronald);