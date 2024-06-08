class Adam {
  constructor(ad, soyad) {
    this.ad = ad;
    this.soyad = soyad;
  }

  yemekYe(yemek) {
    console.log(yemek + "yeyirem");
  }
}

const adam = new Adam("Baktar", "Asadov");

class Proqramist extends Adam {
  constructor(ad, soyad) {
    super(ad, soyad);
  }
  kodYaz(dil) {
    console.log("men" + dil + " dilinde kod yaziram");
  }
}

const proqramist = new Proqramist("Baktar", "Asadov");
proqramist.kodYaz();
