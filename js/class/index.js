// const baktar = {
//   ad: "Baktar",
//   soyad: "Asadov",
// };

// const tangiz = {
//   ad: "Tangiz",
//   soyad: "Salamova",
// };

// function Adam(ad, soyad) {
//   this.ad = ad;
//   this.soyad = soyad;
// }

class Adam {
  constructor(ad, soyad) {
    this.ad = ad;
    this.soyad = soyad;
  }

  yemekYe(yemek) {
    console.log(yemek, " yeyirem");
  }
}

// const adam = new Adam("Baktar", "Asadov");
// adam.yemekYe("Pomidor Yumurta");
// console.log(adam.ad);
// const baktar = new Adam("baktar", "asadov");

class Proqramist extends Adam {
  constructor(ad, soyad) {
    super(ad, soyad);
  }

  kodYaz(dil) {
    console.log("men " + dil + "-da kod yaziram");
  }
}

const baktar = new Proqramist("baktar", "Asadov");
baktar.kodYaz("Go");

class Sofer extends Adam {
  constructor(ad, soyad, nese) {
    super(ad, soyad);
    this.nese = nese;
  }

  masinSur(masin) {
    console.log("men " + masin + "-ile suruculuk edirem");
  }
}

const sofer = new Sofer("Imran", "Yusubov", "nese");
sofer.masinSur("Bmw");
sofer.yemekYe();
