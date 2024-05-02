class Card {
  data = [];
  total = 0;
  static addCard(id) {
    this.total++;
    const index = this.data.findIndex((e) => e.orderId === id);
    if (index != -1) {
      this.data[index].count++;
    } else {
      this.data.push({
        orderId: id,
        count: 1,
      });
    }
  }
  static getCard() {
    return {
      data: this.data,
      total: this.total,
    };
  }
  static incrementValue(id, value) {
    // gerhgre4hyre
    return {
      data: this.data,
      total: this.total,
    };
  }
  static decermentValue(id, value) {
    // gerhgre4hyre
  }
}

Card.addCard(id);
