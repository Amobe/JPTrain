var Kana = function Kana(word, spell, kanaType) {
    this.word = word;
    this.spell = spell;
    this.kanaType = kanaType;
};

Kana.prototype.ShowKana = function() {
    return JSON.stringify(this);
};

Kana.prototype.GetTypeName = function() {
    return this.constructor.name;
};

function checkObjectIsKana(kana) {
    if (typeof(kana.GetTypeName) === 'function') {
        if (kana.GetTypeName() == "Kana")
            return true;
    }
    logging("Object is not a Kana: " + kana);
    return false;
};
