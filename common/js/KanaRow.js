var KanaRow = function KanaRow(kanaList, keySpell, kanaType) {
    if (kanaList instanceof Array) {
        this.kanaList = kanaList;
    } else {
        this.kanaList = new Array();
    }
    this.keySpell = keySpell;
    this.kanaType = kanaType;
};

KanaRow.prototype.AddKana = function(kana) {
    if (checkObjectIsKana(kana) || checkObjectIsEmptyKana(kana)) {
        this.kanaList.push(kana);
    }
};

KanaRow.prototype.GetTypeName = function() {
    return this.constructor.name;
};

function checkObjectIsKanaRow(kanaRow) {
    if (typeof(kanaRow.GetTypeName) === 'function') {
        if (kanaRow.GetTypeName() == 'KanaRow')
            return true;
    }
    logging('Object is not a KanaRow: ' + kanaRow);
    return false;
};
