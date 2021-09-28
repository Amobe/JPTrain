function EmptyKana() {
  EmptyKana._super.call(this);

  this.word = '.';
  this.spell = '.';
}

;
inherits(EmptyKana, Kana);

EmptyKana.prototype.GetTypeName = function () {
  return this.constructor.name;
};

function checkObjectIsEmptyKana(kana) {
  if (typeof kana.GetTypeName === 'function') {
    if (kana.GetTypeName() === 'EmptyKana') return true;
  }

  logging('Object is not a EmptyKana: ' + kana);
  return false;
}

;