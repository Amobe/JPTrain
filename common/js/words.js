
/*
    ##    ##    ###    ##    ##    ###            ######## ##    ## ########  ######## 
    ##   ##    ## ##   ###   ##   ## ##              ##     ##  ##  ##     ## ##       
    ##  ##    ##   ##  ####  ##  ##   ##             ##      ####   ##     ## ##       
    #####    ##     ## ## ## ## ##     ##            ##       ##    ########  ######   
    ##  ##   ######### ##  #### #########            ##       ##    ##        ##       
    ##   ##  ##     ## ##   ### ##     ##            ##       ##    ##        ##       
    ##    ## ##     ## ##    ## ##     ## #######    ##       ##    ##        ######## 
*/

var KanaType = {
    SEION: "seion", DAKUON: "dakuon",HAN_DAKUON: "han dakuon",YOON: "yōon",LONG: "long",SOKUON: "sokuon"
};

/*
    ##    ##    ###    ##    ##    ###    
    ##   ##    ## ##   ###   ##   ## ##   
    ##  ##    ##   ##  ####  ##  ##   ##  
    #####    ##     ## ## ## ## ##     ## 
    ##  ##   ######### ##  #### ######### 
    ##   ##  ##     ## ##   ### ##     ## 
    ##    ## ##     ## ##    ## ##     ## 
*/

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
}

function checkObjectIsKana(kana) {
    if (typeof(kana.GetTypeName) === 'function') {
        if (kana.GetTypeName() == "Kana")
            return true;
    }
    console.log("Object is not a kana: " + kana);
    return false;
}

/*
    ##    ##    ###    ##    ##    ###            ########   #######  ##      ## 
    ##   ##    ## ##   ###   ##   ## ##           ##     ## ##     ## ##  ##  ## 
    ##  ##    ##   ##  ####  ##  ##   ##          ##     ## ##     ## ##  ##  ## 
    #####    ##     ## ## ## ## ##     ##         ########  ##     ## ##  ##  ## 
    ##  ##   ######### ##  #### #########         ##   ##   ##     ## ##  ##  ## 
    ##   ##  ##     ## ##   ### ##     ##         ##    ##  ##     ## ##  ##  ## 
    ##    ## ##     ## ##    ## ##     ## ####### ##     ##  #######   ###  ###  
*/

var KanaRow = function KanaRow(kanaList, keySpell, kanaType) {
    if (kanaList instanceof Array) {
        this.kanaList = kanaList;
    } else {
        this.kanaList = new Array();
    }
    this.keySpell = keySpell;
    this.kanaType = kanaType;
}

KanaRow.prototype.AddKana = function(kana) {
    if (checkObjectIsKana(kana)) {
        this.kanaList.push(kana);
    }
}

/*
    ##    ##    ###    ##    ##    ###            ##     ##    ###    ########  
    ##   ##    ## ##   ###   ##   ## ##           ###   ###   ## ##   ##     ## 
    ##  ##    ##   ##  ####  ##  ##   ##          #### ####  ##   ##  ##     ## 
    #####    ##     ## ## ## ## ##     ##         ## ### ## ##     ## ########  
    ##  ##   ######### ##  #### #########         ##     ## ######### ##        
    ##   ##  ##     ## ##   ### ##     ##         ##     ## ##     ## ##        
    ##    ## ##     ## ##    ## ##     ## ####### ##     ## ##     ## ## 
*/

var KanaMap = function KanaMap() {
    this.wordMap = {};
    this.spellMap = {};
};

KanaMap.prototype.AddKana = function(kana) {
    if (kana.GetTypeName() == "Kana") {
        this.wordMap[kana.word] = kana;
        this.spellMap[kana.spell] = kana;
    }
};

KanaMap.prototype.ShowAllKana = function() {
    for (var k in this.wordMap) {
        if (this.wordMap.hasOwnProperty(k)) {
            console.log(this.wordMap[k].ShowKana());
        }
    }
};

var hiragana = new KanaMap();
hiragana.AddKana(new Kana("あ", "a", KanaType.SEION));
hiragana.AddKana(new Kana("い", "i", KanaType.SEION));
hiragana.AddKana(new Kana("う", "u", KanaType.SEION));
hiragana.AddKana(new Kana("え", "e", KanaType.SEION));
hiragana.AddKana(new Kana("お", "o", KanaType.SEION));
hiragana.AddKana(new Kana("か", "ka", KanaType.SEION));
hiragana.AddKana(new Kana("き", "ki", KanaType.SEION));
hiragana.AddKana(new Kana("く", "ku", KanaType.SEION));
hiragana.AddKana(new Kana("け", "ke", KanaType.SEION));
hiragana.AddKana(new Kana("こ", "ko", KanaType.SEION));
hiragana.AddKana(new Kana("さ", "sa", KanaType.SEION));
hiragana.AddKana(new Kana("し", "shi", KanaType.SEION));
hiragana.AddKana(new Kana("す", "su", KanaType.SEION));
hiragana.AddKana(new Kana("せ", "se", KanaType.SEION));
hiragana.AddKana(new Kana("そ", "so", KanaType.SEION));
hiragana.AddKana(new Kana("な", "na", KanaType.SEION));
hiragana.AddKana(new Kana("に", "ni", KanaType.SEION));
hiragana.AddKana(new Kana("ぬ", "nu", KanaType.SEION));
hiragana.AddKana(new Kana("ね", "ne", KanaType.SEION));
hiragana.AddKana(new Kana("の", "no", KanaType.SEION));
hiragana.AddKana(new Kana("は", "ha", KanaType.SEION));
hiragana.AddKana(new Kana("ひ", "hi", KanaType.SEION));
hiragana.AddKana(new Kana("ふ", "fu", KanaType.SEION));
hiragana.AddKana(new Kana("へ", "he", KanaType.SEION));
hiragana.AddKana(new Kana("ほ", "ho", KanaType.SEION));
hiragana.AddKana(new Kana("ま", "ma", KanaType.SEION));
hiragana.AddKana(new Kana("み", "mi", KanaType.SEION));
hiragana.AddKana(new Kana("む", "mu", KanaType.SEION));
hiragana.AddKana(new Kana("め", "me", KanaType.SEION));
hiragana.AddKana(new Kana("も", "mo", KanaType.SEION));
hiragana.AddKana(new Kana("や", "ya", KanaType.SEION));
hiragana.AddKana(new Kana("ゆ", "yu", KanaType.SEION));
hiragana.AddKana(new Kana("よ", "yo", KanaType.SEION));
hiragana.AddKana(new Kana("ら", "ra", KanaType.SEION));
hiragana.AddKana(new Kana("り", "ri", KanaType.SEION));
hiragana.AddKana(new Kana("る", "ru", KanaType.SEION));
hiragana.AddKana(new Kana("れ", "re", KanaType.SEION));
hiragana.AddKana(new Kana("ろ", "ro", KanaType.SEION));
hiragana.AddKana(new Kana("わ", "wa", KanaType.SEION));
hiragana.AddKana(new Kana("ゐ", "wi", KanaType.SEION));
hiragana.AddKana(new Kana("ゑ", "we", KanaType.SEION));
hiragana.AddKana(new Kana("を", "wo", KanaType.SEION));
hiragana.AddKana(new Kana("ん", "n", KanaType.SEION));
hiragana.AddKana(new Kana("が", "ga", KanaType.DAKUON));
hiragana.AddKana(new Kana("ぎ", "gi", KanaType.DAKUON));
hiragana.AddKana(new Kana("ぐ", "gu", KanaType.DAKUON));
hiragana.AddKana(new Kana("げ", "ge", KanaType.DAKUON));
hiragana.AddKana(new Kana("ご", "go", KanaType.DAKUON));
hiragana.AddKana(new Kana("ざ", "za", KanaType.DAKUON));
hiragana.AddKana(new Kana("じ", "zi", KanaType.DAKUON));
hiragana.AddKana(new Kana("ず", "zu", KanaType.DAKUON));
hiragana.AddKana(new Kana("ぜ", "ze", KanaType.DAKUON));
hiragana.AddKana(new Kana("ぞ", "zo", KanaType.DAKUON));
hiragana.AddKana(new Kana("だ", "da", KanaType.DAKUON));
hiragana.AddKana(new Kana("ぢ", "ji", KanaType.DAKUON));
hiragana.AddKana(new Kana("づ", "zu", KanaType.DAKUON));
hiragana.AddKana(new Kana("で", "de", KanaType.DAKUON));
hiragana.AddKana(new Kana("ど", "do", KanaType.DAKUON));
hiragana.AddKana(new Kana("ば", "ba", KanaType.DAKUON));
hiragana.AddKana(new Kana("び", "bi", KanaType.DAKUON));
hiragana.AddKana(new Kana("ぶ", "bu", KanaType.DAKUON));
hiragana.AddKana(new Kana("べ", "be", KanaType.DAKUON));
hiragana.AddKana(new Kana("ぼ", "bo", KanaType.DAKUON));
hiragana.AddKana(new Kana("ぱ", "pa", KanaType.HAN_DAKUON));
hiragana.AddKana(new Kana("ぴ", "pi", KanaType.HAN_DAKUON));
hiragana.AddKana(new Kana("ぷ", "pu", KanaType.HAN_DAKUON));
hiragana.AddKana(new Kana("ぺ", "pe", KanaType.HAN_DAKUON));
hiragana.AddKana(new Kana("ぽ", "po", KanaType.HAN_DAKUON));
hiragana.AddKana(new Kana("っ", "*", KanaType.SOKUON));
hiragana.AddKana(new Kana("きゃ", "kya", KanaType.YOON));
hiragana.AddKana(new Kana("しゃ", "sha", KanaType.YOON));
hiragana.AddKana(new Kana("ちゃ", "cha", KanaType.YOON));
hiragana.AddKana(new Kana("にゃ", "nya", KanaType.YOON));
hiragana.AddKana(new Kana("ひゃ", "hya", KanaType.YOON));
hiragana.AddKana(new Kana("みゃ", "mya", KanaType.YOON));
hiragana.AddKana(new Kana("りゃ", "rya", KanaType.YOON));
hiragana.AddKana(new Kana("ぎゃ", "gya", KanaType.YOON));
hiragana.AddKana(new Kana("じゃ", "zya", KanaType.YOON));
hiragana.AddKana(new Kana("ぢゃ", "ja", KanaType.YOON));
hiragana.AddKana(new Kana("びゃ", "bya", KanaType.YOON));
hiragana.AddKana(new Kana("ぴゃ", "pya", KanaType.YOON));
hiragana.AddKana(new Kana("きゅ", "kyu", KanaType.YOON));
hiragana.AddKana(new Kana("しゅ", "shu", KanaType.YOON));
hiragana.AddKana(new Kana("ちゅ", "chu", KanaType.YOON));
hiragana.AddKana(new Kana("にゅ", "nyu", KanaType.YOON));
hiragana.AddKana(new Kana("ひゅ", "hyu", KanaType.YOON));
hiragana.AddKana(new Kana("みゅ", "myu", KanaType.YOON));
hiragana.AddKana(new Kana("りゅ", "ryu", KanaType.YOON));
hiragana.AddKana(new Kana("ぎゅ", "gyu", KanaType.YOON));
hiragana.AddKana(new Kana("じゅ", "zyu", KanaType.YOON));
hiragana.AddKana(new Kana("ぢゅ", "ju", KanaType.YOON));
hiragana.AddKana(new Kana("びゅ", "byu", KanaType.YOON));
hiragana.AddKana(new Kana("ぴゅ", "pyu", KanaType.YOON));
hiragana.AddKana(new Kana("きょ", "kyo", KanaType.YOON));
hiragana.AddKana(new Kana("しょ", "sho", KanaType.YOON));
hiragana.AddKana(new Kana("ちょ", "cho", KanaType.YOON));
hiragana.AddKana(new Kana("にょ", "nyo", KanaType.YOON));
hiragana.AddKana(new Kana("ひょ", "hyo", KanaType.YOON));
hiragana.AddKana(new Kana("みょ", "myo", KanaType.YOON));
hiragana.AddKana(new Kana("りょ", "ryo", KanaType.YOON));
hiragana.AddKana(new Kana("ぎょ", "gyo", KanaType.YOON));
hiragana.AddKana(new Kana("じょ", "zyo", KanaType.YOON));
hiragana.AddKana(new Kana("ぢょ", "jo", KanaType.YOON));
hiragana.AddKana(new Kana("びょ", "byo", KanaType.YOON));
hiragana.AddKana(new Kana("ぴょ", "pyo", KanaType.YOON));

var katakana = new KanaMap();
katakana.AddKana(new Kana("ア", "a", KanaType.SEION));
katakana.AddKana(new Kana("イ", "i", KanaType.SEION));
katakana.AddKana(new Kana("ウ", "u", KanaType.SEION));
katakana.AddKana(new Kana("エ", "e", KanaType.SEION));
katakana.AddKana(new Kana("オ", "o", KanaType.SEION));
katakana.AddKana(new Kana("カ", "ka", KanaType.SEION));
katakana.AddKana(new Kana("キ", "ki", KanaType.SEION));
katakana.AddKana(new Kana("ク", "ku", KanaType.SEION));
katakana.AddKana(new Kana("ケ", "ke", KanaType.SEION));
katakana.AddKana(new Kana("コ", "ko", KanaType.SEION));
katakana.AddKana(new Kana("サ", "sa", KanaType.SEION));
katakana.AddKana(new Kana("シ", "shi", KanaType.SEION));
katakana.AddKana(new Kana("ス", "su", KanaType.SEION));
katakana.AddKana(new Kana("セ", "se", KanaType.SEION));
katakana.AddKana(new Kana("ソ", "so", KanaType.SEION));
katakana.AddKana(new Kana("ナ", "na", KanaType.SEION));
katakana.AddKana(new Kana("ニ", "ni", KanaType.SEION));
katakana.AddKana(new Kana("ヌ", "nu", KanaType.SEION));
katakana.AddKana(new Kana("ネ", "ne", KanaType.SEION));
katakana.AddKana(new Kana("ノ", "no", KanaType.SEION));
katakana.AddKana(new Kana("ハ", "ha", KanaType.SEION));
katakana.AddKana(new Kana("ヒ", "hi", KanaType.SEION));
katakana.AddKana(new Kana("フ", "fu", KanaType.SEION));
katakana.AddKana(new Kana("ヘ", "he", KanaType.SEION));
katakana.AddKana(new Kana("ホ", "ho", KanaType.SEION));
katakana.AddKana(new Kana("マ", "ma", KanaType.SEION));
katakana.AddKana(new Kana("ミ", "mi", KanaType.SEION));
katakana.AddKana(new Kana("ム", "mu", KanaType.SEION));
katakana.AddKana(new Kana("メ", "me", KanaType.SEION));
katakana.AddKana(new Kana("モ", "mo", KanaType.SEION));
katakana.AddKana(new Kana("ヤ", "ya", KanaType.SEION));
katakana.AddKana(new Kana("ユ", "yu", KanaType.SEION));
katakana.AddKana(new Kana("ヨ", "yo", KanaType.SEION));
katakana.AddKana(new Kana("ラ", "ra", KanaType.SEION));
katakana.AddKana(new Kana("リ", "ri", KanaType.SEION));
katakana.AddKana(new Kana("ル", "ru", KanaType.SEION));
katakana.AddKana(new Kana("レ", "re", KanaType.SEION));
katakana.AddKana(new Kana("ロ", "ro", KanaType.SEION));
katakana.AddKana(new Kana("ワ", "wa", KanaType.SEION));
katakana.AddKana(new Kana("ヰ", "wi", KanaType.SEION));
katakana.AddKana(new Kana("ヱ", "we", KanaType.SEION));
katakana.AddKana(new Kana("ヲ", "wo", KanaType.SEION));
katakana.AddKana(new Kana("ン", "n", KanaType.SEION));
katakana.AddKana(new Kana("ガ", "ga", KanaType.DAKUON));
katakana.AddKana(new Kana("ギ", "gi", KanaType.DAKUON));
katakana.AddKana(new Kana("グ", "gu", KanaType.DAKUON));
katakana.AddKana(new Kana("ゲ", "ge", KanaType.DAKUON));
katakana.AddKana(new Kana("ゴ", "go", KanaType.DAKUON));
katakana.AddKana(new Kana("ザ", "za", KanaType.DAKUON));
katakana.AddKana(new Kana("ジ", "zi", KanaType.DAKUON));
katakana.AddKana(new Kana("ズ", "zu", KanaType.DAKUON));
katakana.AddKana(new Kana("ゼ", "ze", KanaType.DAKUON));
katakana.AddKana(new Kana("ゾ", "zo", KanaType.DAKUON));
katakana.AddKana(new Kana("ダ", "da", KanaType.DAKUON));
katakana.AddKana(new Kana("ヂ", "ji", KanaType.DAKUON));
katakana.AddKana(new Kana("ヅ", "zu", KanaType.DAKUON));
katakana.AddKana(new Kana("デ", "de", KanaType.DAKUON));
katakana.AddKana(new Kana("ド", "do", KanaType.DAKUON));
katakana.AddKana(new Kana("バ", "ba", KanaType.DAKUON));
katakana.AddKana(new Kana("ビ", "bi", KanaType.DAKUON));
katakana.AddKana(new Kana("ブ", "bu", KanaType.DAKUON));
katakana.AddKana(new Kana("ベ", "be", KanaType.DAKUON));
katakana.AddKana(new Kana("ボ", "bo", KanaType.DAKUON));
katakana.AddKana(new Kana("パ", "pa", KanaType.HAN_DAKUON));
katakana.AddKana(new Kana("ピ", "pi", KanaType.HAN_DAKUON));
katakana.AddKana(new Kana("プ", "pu", KanaType.HAN_DAKUON));
katakana.AddKana(new Kana("ペ", "pe", KanaType.HAN_DAKUON));
katakana.AddKana(new Kana("ポ", "po", KanaType.HAN_DAKUON));
katakana.AddKana(new Kana("ッ", "*", KanaType.SOKUON));
katakana.AddKana(new Kana("キャ", "kya", KanaType.YOON));
katakana.AddKana(new Kana("シャ", "sha", KanaType.YOON));
katakana.AddKana(new Kana("チャ", "cha", KanaType.YOON));
katakana.AddKana(new Kana("ニャ", "nya", KanaType.YOON));
katakana.AddKana(new Kana("ヒャ", "hya", KanaType.YOON));
katakana.AddKana(new Kana("ミャ", "mya", KanaType.YOON));
katakana.AddKana(new Kana("リャ", "rya", KanaType.YOON));
katakana.AddKana(new Kana("ギャ", "gya", KanaType.YOON));
katakana.AddKana(new Kana("ジャ", "zya", KanaType.YOON));
katakana.AddKana(new Kana("ヂャ", "ja", KanaType.YOON));
katakana.AddKana(new Kana("ビャ", "bya", KanaType.YOON));
katakana.AddKana(new Kana("ピャ", "pya", KanaType.YOON));
katakana.AddKana(new Kana("キュ", "kyu", KanaType.YOON));
katakana.AddKana(new Kana("シュ", "shu", KanaType.YOON));
katakana.AddKana(new Kana("チュ", "chu", KanaType.YOON));
katakana.AddKana(new Kana("ニュ", "nyu", KanaType.YOON));
katakana.AddKana(new Kana("ヒュ", "hyu", KanaType.YOON));
katakana.AddKana(new Kana("ミュ", "myu", KanaType.YOON));
katakana.AddKana(new Kana("リュ", "ryu", KanaType.YOON));
katakana.AddKana(new Kana("ギュ", "gyu", KanaType.YOON));
katakana.AddKana(new Kana("ジュ", "zyu", KanaType.YOON));
katakana.AddKana(new Kana("ヂュ", "ju", KanaType.YOON));
katakana.AddKana(new Kana("ビュ", "byu", KanaType.YOON));
katakana.AddKana(new Kana("ピュ", "pyu", KanaType.YOON));
katakana.AddKana(new Kana("キョ", "kyo", KanaType.YOON));
katakana.AddKana(new Kana("ショ", "sho", KanaType.YOON));
katakana.AddKana(new Kana("チョ", "cho", KanaType.YOON));
katakana.AddKana(new Kana("ニョ", "nyo", KanaType.YOON));
katakana.AddKana(new Kana("ヒョ", "hyo", KanaType.YOON));
katakana.AddKana(new Kana("ミョ", "myo", KanaType.YOON));
katakana.AddKana(new Kana("リョ", "ryo", KanaType.YOON));
katakana.AddKana(new Kana("ギョ", "gyo", KanaType.YOON));
katakana.AddKana(new Kana("ジョ", "zyo", KanaType.YOON));
katakana.AddKana(new Kana("ヂョ", "jo", KanaType.YOON));
katakana.AddKana(new Kana("ビョ", "byo", KanaType.YOON));
katakana.AddKana(new Kana("ピョ", "pyo", KanaType.YOON));
