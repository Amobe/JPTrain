
var HIRAGANA_DATA;
var hiraganaTables = {};
var katakanaTables = {};

loadJSON('common/data/hiragana.json', function(obj) {
    HIRAGANA_DATA = JSON.parse(obj.responseText);
    logging(HIRAGANA_DATA);

    var tables = HIRAGANA_DATA.tables;
    for (var table in tables) {
        if (tables.hasOwnProperty(table))
            hiraganaTables[table] = createTable(tables[table]);
    }
});

loadJSON('common/data/katakana.json', function(obj) {
    KATAKANA_DATA = JSON.parse(obj.responseText);
    logging(KATAKANA_DATA);

    var tables = KATAKANA_DATA.tables;
    for (var table in tables) {
        if (tables.hasOwnProperty(table))
            katakanaTables[table] = createTable(tables[table]);
    }
});

function createTable(tableData) {
    // logging(tableData);
    var newTable = new KanaTable();

    tableData.forEach(function(row) {
        newTable.AddKanaRow(createRow(row));
    });

    return newTable;
}

function createRow(rowData) {
    // logging(rowData);
    var newRow = new KanaRow(null, rowData.row, null);

    var words = rowData.words;
    words.forEach(function(word) {
        newRow.AddKana(createWord(word));
    });

    return newRow;
}

function createWord(wordData) {
    // logging(wordData);
    return new Kana(wordData.word, wordData.spell, null);
}
