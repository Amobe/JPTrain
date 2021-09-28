var KanaTable = function KanaTable() {
  this.kanaRowList = {};
};

KanaTable.prototype.AddKanaRow = function (kanaRow) {
  if (checkObjectIsKanaRow(kanaRow)) {
    this.kanaRowList[kanaRow.keySpell] = kanaRow;
  }
};