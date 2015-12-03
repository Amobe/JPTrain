package main

import (
    "fmt"
)

type KanaType int

const (
    SEION KanaType = 1 + iota
    DAKUON
    HAN_DAKUON
    YOON
    LONG
    SOKUON
)

var KanaTypeString = [...]string {
    "Seion", 
    "Dakuon", 
    "Han Dakuon", 
    "Yōon",
    "Long", 
    "Sokuon",
}

func (kt KanaType) String() string {
    return KanaTypeString[kt - 1]
}

type Kana struct {
    word string
    spell string
    kanaType KanaType
}

func (k Kana) String() string {
    return "[" + k.word + ":" + k.spell + "] " + k.kanaType.String()
}

type KanaMap struct {
    wordMap map[string]Kana
    spellMap map[string]Kana
}

func createKanaMap() *KanaMap {
    return &KanaMap{wordMap: make(map[string]Kana), spellMap: make(map[string]Kana)}
}

func addKana(k *KanaMap, word string, spell string, kanaType KanaType) *KanaMap {
    kana := Kana{word, spell, kanaType}
    k.wordMap[word] = kana
    k.spellMap[spell] = kana
    return k
}

func initHiragana(hiragana* KanaMap) *KanaMap {
    addKana(hiragana, "あ", "a", SEION)
    addKana(hiragana, "い", "i", SEION)
    addKana(hiragana, "う", "u", SEION)
    addKana(hiragana, "え", "e", SEION)
    addKana(hiragana, "お", "o", SEION)
    addKana(hiragana, "か", "ka", SEION)
    addKana(hiragana, "き", "ki", SEION)
    addKana(hiragana, "く", "ku", SEION)
    addKana(hiragana, "け", "ke", SEION)
    addKana(hiragana, "こ", "ko", SEION)
    addKana(hiragana, "さ", "sa", SEION)
    addKana(hiragana, "し", "shi", SEION)
    addKana(hiragana, "す", "su", SEION)
    addKana(hiragana, "せ", "se", SEION)
    addKana(hiragana, "そ", "so", SEION)
    addKana(hiragana, "な", "na", SEION)
    addKana(hiragana, "に", "ni", SEION)
    addKana(hiragana, "ぬ", "nu", SEION)
    addKana(hiragana, "ね", "ne", SEION)
    addKana(hiragana, "の", "no", SEION)
    addKana(hiragana, "は", "ha", SEION)
    addKana(hiragana, "ひ", "hi", SEION)
    addKana(hiragana, "ふ", "fu", SEION)
    addKana(hiragana, "へ", "he", SEION)
    addKana(hiragana, "ほ", "ho", SEION)
    addKana(hiragana, "ま", "ma", SEION)
    addKana(hiragana, "み", "mi", SEION)
    addKana(hiragana, "む", "mu", SEION)
    addKana(hiragana, "め", "me", SEION)
    addKana(hiragana, "も", "mo", SEION)
    addKana(hiragana, "や", "ya", SEION)
    addKana(hiragana, "ゆ", "yu", SEION)
    addKana(hiragana, "よ", "yo", SEION)
    addKana(hiragana, "ら", "ra", SEION)
    addKana(hiragana, "り", "ri", SEION)
    addKana(hiragana, "る", "ru", SEION)
    addKana(hiragana, "れ", "re", SEION)
    addKana(hiragana, "ろ", "ro", SEION)
    addKana(hiragana, "わ", "wa", SEION)
    addKana(hiragana, "ゐ", "wi", SEION)
    addKana(hiragana, "ゑ", "we", SEION)
    addKana(hiragana, "を", "wo", SEION)
    addKana(hiragana, "ん", "n", SEION)
    addKana(hiragana, "が", "ga", DAKUON)
    addKana(hiragana, "ぎ", "gi", DAKUON)
    addKana(hiragana, "ぐ", "gu", DAKUON)
    addKana(hiragana, "げ", "ge", DAKUON)
    addKana(hiragana, "ご", "go", DAKUON)
    addKana(hiragana, "ざ", "za", DAKUON)
    addKana(hiragana, "じ", "zi", DAKUON)
    addKana(hiragana, "ず", "zu", DAKUON)
    addKana(hiragana, "ぜ", "ze", DAKUON)
    addKana(hiragana, "ぞ", "zo", DAKUON)
    addKana(hiragana, "だ", "da", DAKUON)
    addKana(hiragana, "ぢ", "ji", DAKUON)
    addKana(hiragana, "づ", "zu", DAKUON)
    addKana(hiragana, "で", "de", DAKUON)
    addKana(hiragana, "ど", "do", DAKUON)
    addKana(hiragana, "ば", "ba", DAKUON)
    addKana(hiragana, "び", "bi", DAKUON)
    addKana(hiragana, "ぶ", "bu", DAKUON)
    addKana(hiragana, "べ", "be", DAKUON)
    addKana(hiragana, "ぼ", "bo", DAKUON)
    addKana(hiragana, "ぱ", "pa", HAN_DAKUON)
    addKana(hiragana, "ぴ", "pi", HAN_DAKUON)
    addKana(hiragana, "ぷ", "pu", HAN_DAKUON)
    addKana(hiragana, "ぺ", "pe", HAN_DAKUON)
    addKana(hiragana, "ぽ", "po", HAN_DAKUON)
    addKana(hiragana, "っ", "*", SOKUON)
    addKana(hiragana, "きゃ", "kya", YOON)
    addKana(hiragana, "しゃ", "sha", YOON)
    addKana(hiragana, "ちゃ", "cha", YOON)
    addKana(hiragana, "にゃ", "nya", YOON)
    addKana(hiragana, "ひゃ", "hya", YOON)
    addKana(hiragana, "みゃ", "mya", YOON)
    addKana(hiragana, "りゃ", "rya", YOON)
    addKana(hiragana, "ぎゃ", "gya", YOON)
    addKana(hiragana, "じゃ", "zya", YOON)
    addKana(hiragana, "ぢゃ", "ja", YOON)
    addKana(hiragana, "びゃ", "bya", YOON)
    addKana(hiragana, "ぴゃ", "pya", YOON)
    addKana(hiragana, "きゅ", "kyu", YOON)
    addKana(hiragana, "しゅ", "shu", YOON)
    addKana(hiragana, "ちゅ", "chu", YOON)
    addKana(hiragana, "にゅ", "nyu", YOON)
    addKana(hiragana, "ひゅ", "hyu", YOON)
    addKana(hiragana, "みゅ", "myu", YOON)
    addKana(hiragana, "りゅ", "ryu", YOON)
    addKana(hiragana, "ぎゅ", "gyu", YOON)
    addKana(hiragana, "じゅ", "zyu", YOON)
    addKana(hiragana, "ぢゅ", "ju", YOON)
    addKana(hiragana, "びゅ", "byu", YOON)
    addKana(hiragana, "ぴゅ", "pyu", YOON)
    addKana(hiragana, "きょ", "kyo", YOON)
    addKana(hiragana, "しょ", "sho", YOON)
    addKana(hiragana, "ちょ", "cho", YOON)
    addKana(hiragana, "にょ", "nyo", YOON)
    addKana(hiragana, "ひょ", "hyo", YOON)
    addKana(hiragana, "みょ", "myo", YOON)
    addKana(hiragana, "りょ", "ryo", YOON)
    addKana(hiragana, "ぎょ", "gyo", YOON)
    addKana(hiragana, "じょ", "zyo", YOON)
    addKana(hiragana, "ぢょ", "jo", YOON)
    addKana(hiragana, "びょ", "byo", YOON)
    addKana(hiragana, "ぴょ", "pyo", YOON)
    return hiragana
}

func initKatakana(katakana* KanaMap) *KanaMap {
    addKana(katakana, "ア", "a", SEION)
    addKana(katakana, "イ", "i", SEION)
    addKana(katakana, "ウ", "u", SEION)
    addKana(katakana, "エ", "e", SEION)
    addKana(katakana, "オ", "o", SEION)
    addKana(katakana, "カ", "ka", SEION)
    addKana(katakana, "キ", "ki", SEION)
    addKana(katakana, "ク", "ku", SEION)
    addKana(katakana, "ケ", "ke", SEION)
    addKana(katakana, "コ", "ko", SEION)
    addKana(katakana, "サ", "sa", SEION)
    addKana(katakana, "シ", "shi", SEION)
    addKana(katakana, "ス", "su", SEION)
    addKana(katakana, "セ", "se", SEION)
    addKana(katakana, "ソ", "so", SEION)
    addKana(katakana, "ナ", "na", SEION)
    addKana(katakana, "ニ", "ni", SEION)
    addKana(katakana, "ヌ", "nu", SEION)
    addKana(katakana, "ネ", "ne", SEION)
    addKana(katakana, "ノ", "no", SEION)
    addKana(katakana, "ハ", "ha", SEION)
    addKana(katakana, "ヒ", "hi", SEION)
    addKana(katakana, "フ", "fu", SEION)
    addKana(katakana, "ヘ", "he", SEION)
    addKana(katakana, "ホ", "ho", SEION)
    addKana(katakana, "マ", "ma", SEION)
    addKana(katakana, "ミ", "mi", SEION)
    addKana(katakana, "ム", "mu", SEION)
    addKana(katakana, "メ", "me", SEION)
    addKana(katakana, "モ", "mo", SEION)
    addKana(katakana, "ヤ", "ya", SEION)
    addKana(katakana, "ユ", "yu", SEION)
    addKana(katakana, "ヨ", "yo", SEION)
    addKana(katakana, "ラ", "ra", SEION)
    addKana(katakana, "リ", "ri", SEION)
    addKana(katakana, "ル", "ru", SEION)
    addKana(katakana, "レ", "re", SEION)
    addKana(katakana, "ロ", "ro", SEION)
    addKana(katakana, "ワ", "wa", SEION)
    addKana(katakana, "ヰ", "wi", SEION)
    addKana(katakana, "ヱ", "we", SEION)
    addKana(katakana, "ヲ", "wo", SEION)
    addKana(katakana, "ン", "n", SEION)
    addKana(katakana, "ガ", "ga", DAKUON)
    addKana(katakana, "ギ", "gi", DAKUON)
    addKana(katakana, "グ", "gu", DAKUON)
    addKana(katakana, "ゲ", "ge", DAKUON)
    addKana(katakana, "ゴ", "go", DAKUON)
    addKana(katakana, "ザ", "za", DAKUON)
    addKana(katakana, "ジ", "zi", DAKUON)
    addKana(katakana, "ズ", "zu", DAKUON)
    addKana(katakana, "ゼ", "ze", DAKUON)
    addKana(katakana, "ゾ", "zo", DAKUON)
    addKana(katakana, "ダ", "da", DAKUON)
    addKana(katakana, "ヂ", "ji", DAKUON)
    addKana(katakana, "ヅ", "zu", DAKUON)
    addKana(katakana, "デ", "de", DAKUON)
    addKana(katakana, "ド", "do", DAKUON)
    addKana(katakana, "バ", "ba", DAKUON)
    addKana(katakana, "ビ", "bi", DAKUON)
    addKana(katakana, "ブ", "bu", DAKUON)
    addKana(katakana, "ベ", "be", DAKUON)
    addKana(katakana, "ボ", "bo", DAKUON)
    addKana(katakana, "パ", "pa", HAN_DAKUON)
    addKana(katakana, "ピ", "pi", HAN_DAKUON)
    addKana(katakana, "プ", "pu", HAN_DAKUON)
    addKana(katakana, "ペ", "pe", HAN_DAKUON)
    addKana(katakana, "ポ", "po", HAN_DAKUON)
    addKana(katakana, "ッ", "*", SOKUON)
    addKana(katakana, "キャ", "kya", YOON)
    addKana(katakana, "シャ", "sha", YOON)
    addKana(katakana, "チャ", "cha", YOON)
    addKana(katakana, "ニャ", "nya", YOON)
    addKana(katakana, "ヒャ", "hya", YOON)
    addKana(katakana, "ミャ", "mya", YOON)
    addKana(katakana, "リャ", "rya", YOON)
    addKana(katakana, "ギャ", "gya", YOON)
    addKana(katakana, "ジャ", "zya", YOON)
    addKana(katakana, "ヂャ", "ja", YOON)
    addKana(katakana, "ビャ", "bya", YOON)
    addKana(katakana, "ピャ", "pya", YOON)
    addKana(katakana, "キュ", "kyu", YOON)
    addKana(katakana, "シュ", "shu", YOON)
    addKana(katakana, "チュ", "chu", YOON)
    addKana(katakana, "ニュ", "nyu", YOON)
    addKana(katakana, "ヒュ", "hyu", YOON)
    addKana(katakana, "ミュ", "myu", YOON)
    addKana(katakana, "リュ", "ryu", YOON)
    addKana(katakana, "ギュ", "gyu", YOON)
    addKana(katakana, "ジュ", "zyu", YOON)
    addKana(katakana, "ヂュ", "ju", YOON)
    addKana(katakana, "ビュ", "byu", YOON)
    addKana(katakana, "ピュ", "pyu", YOON)
    addKana(katakana, "キョ", "kyo", YOON)
    addKana(katakana, "ショ", "sho", YOON)
    addKana(katakana, "チョ", "cho", YOON)
    addKana(katakana, "ニョ", "nyo", YOON)
    addKana(katakana, "ヒョ", "hyo", YOON)
    addKana(katakana, "ミョ", "myo", YOON)
    addKana(katakana, "リョ", "ryo", YOON)
    addKana(katakana, "ギョ", "gyo", YOON)
    addKana(katakana, "ジョ", "zyo", YOON)
    addKana(katakana, "ヂョ", "jo", YOON)
    addKana(katakana, "ビョ", "byo", YOON)
    addKana(katakana, "ピョ", "pyo", YOON)
    return katakana
}

var hiragana *KanaMap = createKanaMap()
var katakana *KanaMap = createKanaMap()

func main() {
    fmt.Println("Hello World.")

    initHiragana(hiragana)
    fmt.Println(hiragana)

    initKatakana(katakana)
    fmt.Println(katakana.wordMap["ピョ"])
}