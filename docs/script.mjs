const blade_data = [{"name":"アイアンマン","type":"D","size":48.5,"weight":33.7,"turn":"R","attack":17,"defense":55,"stamina":28,"annotation":""},{"name":"インパクトドレイク","type":"A","size":51,"weight":38.8,"turn":"R","attack":75,"defense":25,"stamina":10,"annotation":""},{"name":"ヴァイスタイガー","type":"B","size":48.5,"weight":34.7,"turn":"R","attack":45,"defense":30,"stamina":25,"annotation":""},{"name":"ヴァイパーテイル","type":"S","size":48.5,"weight":34.6,"turn":"R","attack":30,"defense":20,"stamina":50,"annotation":""},{"name":"ウィザードアロー","type":"S","size":48,"weight":32,"turn":"R","attack":15,"defense":30,"stamina":55,"annotation":""},{"name":"ウィザードロッド","type":"S","size":50.5,"weight":35.4,"turn":"R","attack":15,"defense":15,"stamina":60,"annotation":""},{"name":"ヴェノム","type":"A","size":49,"weight":34.2,"turn":"R","attack":55,"defense":22,"stamina":23,"annotation":""},{"name":"エアロペガサス","type":"A","size":51,"weight":38.2,"turn":"R","attack":70,"defense":30,"stamina":35,"annotation":""},{"name":"オプティマスプライマル","type":"A","size":49.5,"weight":35.6,"turn":"R","attack":60,"defense":27,"stamina":13,"annotation":""},{"name":"オプティマスプライム","type":"D","size":48.5,"weight":33,"turn":"R","attack":22,"defense":55,"stamina":23,"annotation":""},{"name":"クリムゾンガルーダ","type":"B","size":49,"weight":35.1,"turn":"R","attack":45,"defense":25,"stamina":30,"annotation":""},{"name":"クロコランチ","type":"A","size":48.5,"weight":33.8,"turn":"R","attack":65,"defense":27,"stamina":23,"annotation":""},{"name":"ゴーストサークル","type":"S","size":45,"weight":26.6,"turn":"R","attack":5,"defense":40,"stamina":55,"annotation":""},{"name":"ゴーレムロック","type":"D","size":50,"weight":33.9,"turn":"R","attack":30,"defense":60,"stamina":10,"annotation":""},{"name":"コバルトドラグーン","type":"A","size":50.5,"weight":37.7,"turn":"L","attack":60,"defense":15,"stamina":25,"annotation":""},{"name":"コバルトドレイク","type":"A","size":48,"weight":37.7,"turn":"R","attack":70,"defense":35,"stamina":25,"annotation":""},{"name":"サノス","type":"D","size":48.5,"weight":29.2,"turn":"R","attack":22,"defense":60,"stamina":16,"annotation":""},{"name":"サムライカリバー","type":"B","size":45,"weight":36.2,"turn":"R","attack":40,"defense":30,"stamina":30,"annotation":""},{"name":"サムライスチール","type":"B","size":49,"weight":31.5,"turn":"R","attack":40,"defense":37,"stamina":23,"annotation":""},{"name":"サムライセイバー","type":"A","size":50,"weight":36.4,"turn":"R","attack":65,"defense":20,"stamina":25,"annotation":"収納時49.0"},{"name":"シェルタードレイク","type":"B","size":50,"weight":32.6,"turn":"R","attack":25,"defense":40,"stamina":35,"annotation":""},{"name":"シノビシャドウ","type":"D","size":48.5,"weight":28.1,"turn":"R","attack":10,"defense":70,"stamina":20,"annotation":""},{"name":"シノビナイフ","type":"D","size":45.5,"weight":31,"turn":"R","attack":28,"defense":55,"stamina":32,"annotation":""},{"name":"シャークエッジ","type":"A","size":49,"weight":34.5,"turn":"R","attack":60,"defense":25,"stamina":15,"annotation":""},{"name":"シャークスケイル","type":"A","size":49.7,"weight":37.3,"turn":"R","attack":70,"defense":15,"stamina":15,"annotation":""},{"name":"シルバーウルフ","type":"S","size":49,"weight":36.9,"turn":"R","attack":15,"defense":30,"stamina":65,"annotation":""},{"name":"スコーピオスピア","type":"D","size":50.5,"weight":39.6,"turn":"R","attack":25,"defense":55,"stamina":30,"annotation":"55,25,30"},{"name":"スタースクリーム","type":"S","size":48.5,"weight":30.2,"turn":"R","attack":18,"defense":27,"stamina":55,"annotation":""},{"name":"ストームペガシス","type":"A","size":48.5,"weight":31.2,"turn":"R","attack":55,"defense":15,"stamina":30,"annotation":""},{"name":"スパイダーマン","type":"S","size":49,"weight":33.1,"turn":"R","attack":33,"defense":17,"stamina":50,"annotation":""},{"name":"スフィンクスカウル","type":"D","size":48,"weight":32.6,"turn":"R","attack":35,"defense":55,"stamina":10,"annotation":""},{"name":"ゼノエクスカリバー","type":"A","size":49.5,"weight":30.8,"turn":"R","attack":65,"defense":25,"stamina":10,"annotation":""},{"name":"ダース・ベイダー","type":"D","size":48,"weight":30.8,"turn":"R","attack":28,"defense":60,"stamina":12,"annotation":""},{"name":"ティラノビート","type":"A","size":49,"weight":37,"turn":"R","attack":65,"defense":30,"stamina":5,"annotation":""},{"name":"ティラノロア","type":"A","size":49.5,"weight":36.1,"turn":"R","attack":60,"defense":28,"stamina":12,"annotation":""},{"name":"ドライガースラッシュ","type":"B","size":49,"weight":28.6,"turn":"R","attack":40,"defense":35,"stamina":25,"annotation":""},{"name":"ドラグーンストーム","type":"A","size":49,"weight":25.1,"turn":"L","attack":55,"defense":30,"stamina":15,"annotation":""},{"name":"ドラシエルシールド","type":"S","size":50,"weight":28.2,"turn":"R","attack":30,"defense":50,"stamina":20,"annotation":""},{"name":"ドランザースパイラル","type":"B","size":48.5,"weight":27.8,"turn":"R","attack":35,"defense":30,"stamina":35,"annotation":""},{"name":"ドランソード","type":"A","size":48.5,"weight":34.8,"turn":"R","attack":55,"defense":25,"stamina":20,"annotation":""},{"name":"ドランダガー","type":"A","size":48,"weight":34.9,"turn":"R","attack":50,"defense":25,"stamina":25,"annotation":""},{"name":"ドランバスター","type":"A","size":49,"weight":36.5,"turn":"R","attack":70,"defense":20,"stamina":10,"annotation":""},{"name":"トリケラスパイキー","type":"D","size":47.5,"weight":29.8,"turn":"R","attack":32,"defense":55,"stamina":13,"annotation":""},{"name":"トリケラプレス","type":"D","size":49,"weight":36.4,"turn":"R","attack":20,"defense":65,"stamina":15,"annotation":""},{"name":"ナイトシールド","type":"D","size":48,"weight":32.3,"turn":"R","attack":20,"defense":55,"stamina":25,"annotation":""},{"name":"ナイトメイル","type":"D","size":48,"weight":36.6,"turn":"R","attack":10,"defense":65,"stamina":35,"annotation":""},{"name":"ナイトランス","type":"D","size":47.5,"weight":32.9,"turn":"R","attack":25,"defense":60,"stamina":15,"annotation":""},{"name":"ビクトリーヴァルキリー","type":"A","size":49,"weight":33.4,"turn":"R","attack":55,"defense":20,"stamina":25,"annotation":""},{"name":"フェニックスウイング","type":"A","size":49.5,"weight":37.9,"turn":"R","attack":65,"defense":30,"stamina":20,"annotation":""},{"name":"フェニックスフェザー","type":"A","size":48.5,"weight":33.2,"turn":"R","attack":50,"defense":20,"stamina":30,"annotation":""},{"name":"フェニックスラダー","type":"S","size":48.5,"weight":34.7,"turn":"R","attack":15,"defense":40,"stamina":60,"annotation":""},{"name":"プテラスイング","type":"S","size":49,"weight":34.4,"turn":"R","attack":27,"defense":23,"stamina":50,"annotation":""},{"name":"ブラックシェル","type":"D","size":48.5,"weight":32.4,"turn":"R","attack":10,"defense":65,"stamina":25,"annotation":""},{"name":"ベアスクラッチ","type":"D","size":45.5,"weight":30.2,"turn":"R","attack":25,"defense":45,"stamina":30,"annotation":""},{"name":"ヘルズサイズ","type":"B","size":48,"weight":32.7,"turn":"R","attack":30,"defense":35,"stamina":35,"annotation":""},{"name":"ヘルズチェイン","type":"B","size":48,"weight":33.2,"turn":"R","attack":35,"defense":40,"stamina":25,"annotation":""},{"name":"ヘルズハンマー","type":"B","size":48,"weight":33.2,"turn":"R","attack":50,"defense":25,"stamina":25,"annotation":""},{"name":"ホエールウェーブ","type":"B","size":50,"weight":38,"turn":"R","attack":45,"defense":35,"stamina":20,"annotation":""},{"name":"マンダロリアン","type":"A","size":49,"weight":30.8,"turn":"R","attack":40,"defense":43,"stamina":17,"annotation":""},{"name":"マンモスタスク","type":"B","size":48.5,"weight":32.4,"turn":"R","attack":38,"defense":40,"stamina":37,"annotation":""},{"name":"メガトロン","type":"B","size":48.5,"weight":31.5,"turn":"R","attack":27,"defense":35,"stamina":38,"annotation":""},{"name":"モフ・ギデオン","type":"B","size":48.5,"weight":31,"turn":"R","attack":32,"defense":35,"stamina":33,"annotation":""},{"name":"ユニコーンスティング","type":"B","size":48,"weight":33.2,"turn":"R","attack":35,"defense":35,"stamina":30,"annotation":""},{"name":"ライトニングエルドラゴ（アッパー型）","type":"A","size":48.5,"weight":33.8,"turn":"L","attack":55,"defense":25,"stamina":20,"annotation":""},{"name":"ライトニングエルドラゴ（連打型）","type":"A","size":48.5,"weight":33.3,"turn":"L","attack":50,"defense":30,"stamina":20,"annotation":""},{"name":"ライノホーン","type":"D","size":45.5,"weight":32.8,"turn":"R","attack":20,"defense":50,"stamina":30,"annotation":""},{"name":"ルーク・スカイウォーカー","type":"D","size":48.5,"weight":31.4,"turn":"R","attack":23,"defense":55,"stamina":22,"annotation":""},{"name":"レオンクレスト","type":"D","size":49,"weight":35,"turn":"R","attack":15,"defense":70,"stamina":15,"annotation":""},{"name":"レオンクロー","type":"B","size":49,"weight":31.5,"turn":"R","attack":40,"defense":40,"stamina":20,"annotation":""},{"name":"ロックレオーネ","type":"D","size":48,"weight":30,"turn":"R","attack":30,"defense":55,"stamina":15,"annotation":""},{"name":"ワイバーンゲイル","type":"S","size":48,"weight":32,"turn":"R","attack":10,"defense":40,"stamina":50,"annotation":""}];

const ratchet_data = [{"name":"0-70","tooth":0,"height":70,"weight":7,"attack":3,"defense":13,"stamina":14},{"name":"0-80","tooth":0,"height":80,"weight":7.6,"attack":17,"defense":4,"stamina":9},{"name":"1-60","tooth":1,"height":60,"weight":5.9,"attack":17,"defense":9,"stamina":4},{"name":"1-80","tooth":1,"height":80,"weight":6.7,"attack":17,"defense":4,"stamina":9},{"name":"2-60","tooth":2,"height":60,"weight":6.2,"attack":16,"defense":8,"stamina":6},{"name":"2-70","tooth":2,"height":70,"weight":6.3,"attack":10,"defense":12,"stamina":8},{"name":"2-80","tooth":2,"height":80,"weight":6.9,"attack":10,"defense":11,"stamina":9},{"name":"3-60","tooth":3,"height":60,"weight":6.3,"attack":15,"defense":9,"stamina":6},{"name":"3-70","tooth":3,"height":70,"weight":6.4,"attack":15,"defense":8,"stamina":7},{"name":"3-80","tooth":3,"height":80,"weight":6.9,"attack":15,"defense":7,"stamina":8},{"name":"3-85","tooth":3,"height":85,"weight":4.8,"attack":5,"defense":15,"stamina":10},{"name":"4-55","tooth":4,"height":55,"weight":4.8,"attack":7,"defense":11,"stamina":12},{"name":"4-60","tooth":4,"height":60,"weight":6.3,"attack":11,"defense":13,"stamina":6},{"name":"4-70","tooth":4,"height":70,"weight":6.5,"attack":11,"defense":12,"stamina":7},{"name":"4-80","tooth":4,"height":80,"weight":6.9,"attack":11,"defense":11,"stamina":8},{"name":"5-60","tooth":5,"height":60,"weight":6.6,"attack":12,"defense":9,"stamina":9},{"name":"5-70","tooth":5,"height":70,"weight":6.7,"attack":12,"defense":8.5,"stamina":9.5},{"name":"5-80","tooth":5,"height":80,"weight":7.1,"attack":12,"defense":8,"stamina":10},{"name":"6-60","tooth":6,"height":60,"weight":6.2,"attack":14,"defense":8,"stamina":8},{"name":"6-70","tooth":6,"height":70,"weight":6.2,"attack":14,"defense":7,"stamina":9},{"name":"6-80","tooth":6,"height":80,"weight":6.9,"attack":14,"defense":6,"stamina":10},{"name":"7-60","tooth":7,"height":60,"weight":7.2,"attack":8,"defense":14,"stamina":8},{"name":"7-70","tooth":7,"height":70,"weight":7.3,"attack":8,"defense":12,"stamina":10},{"name":"7-80","tooth":7,"height":80,"weight":7.8,"attack":7,"defense":14,"stamina":9},{"name":"9-60","tooth":9,"height":60,"weight":6.2,"attack":13,"defense":10,"stamina":7},{"name":"9-70","tooth":9,"height":70,"weight":6.3,"attack":13,"defense":10,"stamina":7},{"name":"9-80","tooth":9,"height":80,"weight":6.9,"attack":13,"defense":10,"stamina":7},{"name":"M-85","tooth":5,"height":85,"weight":10.8,"attack":8,"defense":19,"stamina":13}];

const bits_data = [{"name":"A","yomi":"アクセル","type":"A","tooth":16,"burst":80,"height":29.6,"exposure_height":12.2,"weight":2.6,"attack":40,"defense":10,"stamina":10,"dash":40,"annotation":""},{"name":"B","yomi":"ボール","type":"S","tooth":12,"burst":30,"height":29.8,"exposure_height":12.4,"weight":2.1,"attack":15,"defense":25,"stamina":50,"dash":10,"annotation":""},{"name":"BS","yomi":"バウンドスパイク","type":"D","tooth":12,"burst":30,"height":29.6,"exposure_height":13.6,"weight":2,"attack":5,"defense":60,"stamina":30,"dash":30,"annotation":"収縮時12.3"},{"name":"C","yomi":"サイクロン","type":"A","tooth":12,"burst":80,"height":29.8,"exposure_height":12.3,"weight":2.2,"attack":40,"defense":5,"stamina":10,"dash":45,"annotation":""},{"name":"D","yomi":"ドット","type":"D","tooth":12,"burst":30,"height":29.8,"exposure_height":12.3,"weight":2,"attack":10,"defense":55,"stamina":25,"dash":10,"annotation":""},{"name":"DB","yomi":"ディスクボール","type":"S","tooth":12,"burst":30,"height":31.9,"exposure_height":14.6,"weight":3.2,"attack":15,"defense":20,"stamina":55,"dash":10,"annotation":""},{"name":"E","yomi":"エレベート","type":"B","tooth":12,"burst":30,"height":29,"exposure_height":11.8,"weight":3.2,"attack":30,"defense":15,"stamina":20,"dash":35,"annotation":""},{"name":"F","yomi":"フラット","type":"A","tooth":12,"burst":80,"height":29.7,"exposure_height":12.3,"weight":2.2,"attack":40,"defense":15,"stamina":10,"dash":35,"annotation":""},{"name":"FB","yomi":"フリーボール","type":"S","tooth":12,"burst":30,"height":29.7,"exposure_height":12.3,"weight":1.9,"attack":10,"defense":25,"stamina":60,"dash":5,"annotation":""},{"name":"G","yomi":"グライド","type":"S","tooth":16,"burst":30,"height":30.2,"exposure_height":12.4,"weight":2.6,"attack":20,"defense":10,"stamina":55,"dash":15,"annotation":""},{"name":"GB","yomi":"ギヤボール","type":"S","tooth":12,"burst":30,"height":29.7,"exposure_height":12.3,"weight":2.1,"attack":10,"defense":15,"stamina":45,"dash":30,"annotation":""},{"name":"GF","yomi":"ギヤフラット","type":"A","tooth":12,"burst":80,"height":29.6,"exposure_height":12.3,"weight":2.3,"attack":50,"defense":5,"stamina":5,"dash":40,"annotation":""},{"name":"GN","yomi":"ギヤニードル","type":"D","tooth":12,"burst":30,"height":29.4,"exposure_height":12,"weight":2,"attack":20,"defense":40,"stamina":10,"dash":30,"annotation":""},{"name":"GP","yomi":"ギヤポイント","type":"B","tooth":12,"burst":80,"height":30,"exposure_height":12.4,"weight":2.3,"attack":30,"defense":25,"stamina":15,"dash":30,"annotation":""},{"name":"GR","yomi":"ギヤラッシュ","type":"A","tooth":10,"burst":80,"height":29.7,"exposure_height":12.3,"weight":2.1,"attack":45,"defense":10,"stamina":10,"dash":35,"annotation":""},{"name":"H","yomi":"ヘキサ","type":"B","tooth":16,"burst":80,"height":29.4,"exposure_height":12.2,"weight":2.6,"attack":30,"defense":35,"stamina":20,"dash":15,"annotation":""},{"name":"HN","yomi":"ハイニードル","type":"D","tooth":12,"burst":30,"height":30.7,"exposure_height":13.3,"weight":2.2,"attack":15,"defense":55,"stamina":20,"dash":10,"annotation":""},{"name":"HT","yomi":"ハイテーパー","type":"B","tooth":12,"burst":80,"height":30.6,"exposure_height":13.3,"weight":2.3,"attack":30,"defense":25,"stamina":20,"dash":25,"annotation":""},{"name":"K","yomi":"キック","type":"B","tooth":12,"burst":80,"height":29.6,"exposure_height":12.5,"weight":2.2,"attack":35,"defense":25,"stamina":15,"dash":25,"annotation":""},{"name":"L","yomi":"レベル","type":"A","tooth":16,"burst":80,"height":29.5,"exposure_height":12.5,"weight":2.6,"attack":40,"defense":5,"stamina":15,"dash":40,"annotation":""},{"name":"LF","yomi":"ローフラット","type":"A","tooth":12,"burst":80,"height":28.7,"exposure_height":11.3,"weight":2.2,"attack":45,"defense":5,"stamina":10,"dash":40,"annotation":""},{"name":"LO","yomi":"ローオーブ","type":"S","tooth":12,"burst":30,"height":28.5,"exposure_height":11.2,"weight":1.9,"attack":5,"defense":25,"stamina":55,"dash":15,"annotation":""},{"name":"LR","yomi":"ローラッシュ","type":"A","tooth":10,"burst":80,"height":28.7,"exposure_height":11.3,"weight":1.9,"attack":45,"defense":5,"stamina":15,"dash":35,"annotation":""},{"name":"M","yomi":"マージ","type":"B","tooth":18,"burst":80,"height":33.9,"exposure_height":16.3,"weight":3.4,"attack":50,"defense":20,"stamina":10,"dash":20,"annotation":""},{"name":"MN","yomi":"メタルニードル","type":"D","tooth":12,"burst":30,"height":29.7,"exposure_height":12.4,"weight":2.8,"attack":8,"defense":57,"stamina":30,"dash":5,"annotation":""},{"name":"N","yomi":"ニードル","type":"D","tooth":12,"burst":30,"height":29.4,"exposure_height":12.3,"weight":2,"attack":10,"defense":50,"stamina":30,"dash":10,"annotation":""},{"name":"O","yomi":"オーブ","type":"S","tooth":12,"burst":30,"height":29.8,"exposure_height":12.3,"weight":2,"attack":10,"defense":30,"stamina":50,"dash":10,"annotation":""},{"name":"P","yomi":"ポイント","type":"B","tooth":12,"burst":80,"height":29.8,"exposure_height":12.4,"weight":2.2,"attack":25,"defense":25,"stamina":25,"dash":25,"annotation":""},{"name":"Q","yomi":"クエイク","type":"A","tooth":12,"burst":80,"height":29.6,"exposure_height":12.3,"weight":2.2,"attack":55,"defense":15,"stamina":5,"dash":25,"annotation":""},{"name":"R","yomi":"ラッシュ","type":"A","tooth":10,"burst":80,"height":29.7,"exposure_height":12.3,"weight":2.1,"attack":40,"defense":10,"stamina":20,"dash":30,"annotation":""},{"name":"RA","yomi":"ラバーアクセル","type":"A","tooth":16,"burst":80,"height":30,"exposure_height":12.3,"weight":3.1,"attack":60,"defense":17,"stamina":3,"dash":20,"annotation":""},{"name":"S","yomi":"スパイク","type":"D","tooth":12,"burst":30,"height":29.8,"exposure_height":12.3,"weight":2,"attack":10,"defense":45,"stamina":35,"dash":10,"annotation":""},{"name":"T","yomi":"テーパー","type":"B","tooth":12,"burst":80,"height":29.7,"exposure_height":12.3,"weight":2.2,"attack":35,"defense":20,"stamina":20,"dash":25,"annotation":""},{"name":"TP","yomi":"トランスポイント","type":"B","tooth":12,"burst":80,"height":28.6,"exposure_height":11.5,"weight":2.2,"attack":35,"defense":25,"stamina":25,"dash":15,"annotation":"延長時13.0"},{"name":"U","yomi":"ユナイト","type":"B","tooth":12,"burst":80,"height":29.3,"exposure_height":12.3,"weight":2.1,"attack":25,"defense":25,"stamina":30,"dash":20,"annotation":""},{"name":"UF","yomi":"アンダーフラット","type":"A","tooth":12,"burst":80,"height":27.4,"exposure_height":10.3,"weight":2.2,"attack":55,"defense":5,"stamina":5,"dash":35,"annotation":""},{"name":"UN","yomi":"アンダーニードル","type":"D","tooth":12,"burst":30,"height":27.5,"exposure_height":10.2,"weight":1.9,"attack":10,"defense":60,"stamina":20,"dash":10,"annotation":""},{"name":"V","yomi":"ボルテックス","type":"A","tooth":12,"burst":80,"height":29.4,"exposure_height":12.3,"weight":2.1,"attack":45,"defense":10,"stamina":5,"dash":40,"annotation":""},{"name":"W","yomi":"ウェッジ","type":"D","tooth":10,"burst":30,"height":29.7,"exposure_height":12.7,"weight":1.9,"attack":5,"defense":55,"stamina":30,"dash":10,"annotation":""},{"name":"Z","yomi":"ザップ","type":"B","tooth":16,"burst":80,"height":28.8,"exposure_height":11.5,"weight":2.5,"attack":30,"defense":20,"stamina":15,"dash":35,"annotation":""},{"name":"Tr","yomi":"ターボ","type":"A","tooth":16,"burst":30,"height":25.5,"exposure_height":22.2,"weight":12.4,"attack":55,"defense":30,"stamina":60,"dash":10,"annotation":"延長時24.2(55,20,10,45)"},{"name":"WB","yomi":"ウォールボール","type":"S","tooth":16,"burst":30,"height":30.7,"exposure_height":14,"weight":2.5,"attack":15,"defense":30,"stamina":45,"dash":10,"annotation":""}];

const lock_data = [{"name":"ドラン","weight":1},{"name":"ウィザード","weight":1},{"name":"ペルセウス","weight":1},{"name":"ヘルズ","weight":1},{"name":"ライノ","weight":1},{"name":"フォックス","weight":1},{"name":"ペガサス","weight":1},{"name":"ケルベロス","weight":1},{"name":"ホエール","weight":1},{"name":"ワルキューレ","weight":5.5}];

const main_data = [{"name":"ブレイブ","size":52.5,"weight":31.2,"turn":"R"},{"name":"アーク","size":51,"weight":29.4,"turn":"R"},{"name":"ダーク","size":51.5,"weight":30.3,"turn":"R"},{"name":"リーパー","size":51.5,"weight":28.9,"turn":"R"},{"name":"ブラッシュ","size":51,"weight":30.4,"turn":"R"},{"name":"ブラスト","size":51,"weight":32.8,"turn":"R"},{"name":"フレイム","size":49.1,"weight":28.6,"turn":"R"},{"name":"ボルト","size":50,"weight":31,"turn":"R"}];

const assist_data = [{"name":"J","yomi":"ジャギー","size":46,"weight":4.8,"height":10},{"name":"C","yomi":"チャージ","size":45,"weight":5,"height":11},{"name":"T","yomi":"ターン","size":48.5,"weight":5.6,"height":11},{"name":"B","yomi":"バンパー","size":48,"weight":5.2,"height":11},{"name":"R","yomi":"ラウンド","size":47.5,"weight":4.7,"height":11},{"name":"S","yomi":"スラッシュ","size":47.5,"weight":4.6,"height":10},{"name":"A","yomi":"アサルト","size":50.3,"weight":5,"height":11},{"name":"W","yomi":"ウィール","size":48,"weight":7,"height":12.9},{"name":"M","yomi":"マッシブ","size":48,"weight":5.2,"height":9.7}];

const bey_types = {"A":"アタック","B":"バランス","D":"ディフェンス","S":"スタミナ"};
const turn_types = {"L":"ひだり","R":"みぎ"}

const ignore_bits = ["Tr"] 


document.addEventListener('DOMContentLoaded', () => {
    const tableConfigs = [
        {
            id: 'bladeTable',
            data: blade_data,
            //headers: ['name', 'type', 'size', 'weight', 'turn', 'annotation'],
            //headers: ['name', 'type', 'size', 'weight', 'turn'],
            headers: ['name', 'type', 'size', 'weight'],
            displayNames: {
                'name': '<ruby><rb>名前</rb><rt>なまえ</rt></ruby>',
                'type': 'タイプ',
                'size': '<ruby><rb>大</rb><rt>おお</rt></ruby>きさ',
                'weight': '<ruby><rb>重</rb><rt>おも</rb></ruby>さ',
                'turn' : '<ruby><rb>回転</rb><rt>かいてん</rt></ruby>',
                'annotation': '<ruby><rb>注釈</rb><rt>ちゅうしゃく</rt></ruby>'
            },
            initialSort: { key: 'name', order: 'asc' },
            type: 'blade'
        },
        {
            id: 'ratchetTable',
            data: ratchet_data,
            headers: ['name', 'tooth', 'height', 'weight'],
            displayNames: {
                'name': '<ruby><rb>名前</rb><rt>なまえ</rt></ruby>',
                'tooth': '<ruby><rb>歯</rb><rt>は</rt><rb>数</rb><rt>すう</rt></ruby>',
                'height': '<ruby><rb>高</rb><rt>たか</rt></ruby>さ',
                'weight': '<ruby><rb>重</rb><rt>おも</rb></ruby>さ',
            },
            type: 'ratchet'
        },
        {
            id: 'bitsTable',
            data: bits_data,
            //headers: ['name', 'type', 'tooth', 'burst', 'height', 'exposure_height', 'weight', 'annotation'],
            headers: ['name', 'type', 'tooth', 'burst', 'exposure_height', 'weight'],
            displayNames: {
                'name': '<ruby><rb>名前</rb><rt>なまえ</rt></ruby>',
                'type': 'タイプ',
                'tooth': '<ruby><rb>歯</rb><rt>は</rt><rb>数</rb><rt>すう</rt></ruby>',
                'burst': 'バースト<ruby><rb>耐性</rb><rt>たいせい</rt></ruby>',
                //'height': '<ruby><rb>高</rb><rt>たか</rt></ruby>さ',
                //'exposure_height': '<ruby><rb>露出高</rb><rt>ろしゅつこう</rt></ruby>',
                'exposure_height': '<ruby><rb>高</rb><rt>たか</rt></ruby>さ',
                'weight': '<ruby><rb>重</rb><rt>おも</rb></ruby>さ',
                'annotation': '<ruby><rb>注釈</rb><rt>ちゅうしゃく</rt></ruby>'
            },
            type: 'bit'
        },
        {
            id: 'lockTable',
            data: lock_data,
            headers: ['name', 'weight'],
            displayNames: {
                'name': '<ruby><rb>名前</rb><rt>なまえ</rt></ruby>',
                'weight': '<ruby><rb>重</rb><rt>おも</rb></ruby>さ',
            },
            type: 'lock'
        },
        {
            id: 'mainBladeTable',
            data: main_data,
            headers: ['name','size' ,'weight'],
            displayNames: {
                'name': '<ruby><rb>名前</rb><rt>なまえ</rt></ruby>',
                'size': '<ruby><rb>大</rb><rt>おお</rt></ruby>きさ',
                'weight': '<ruby><rb>重</rb><rt>おも</rb></ruby>さ',
                'turn' : '<ruby><rb>回転</rb><rt>かいてん</rt></ruby>',
            },
            type: 'main'
        },
        {
            id: 'assistBladeTable',
            data: assist_data,
            headers: ['name', 'size', 'weight', 'height'],
            displayNames: {
                'name': '<ruby><rb>名前</rb><rt>なまえ</rt></ruby>',
                'size': '<ruby><rb>大</rb><rt>おお</rt></ruby>きさ',
                'weight': '<ruby><rb>重</rb><rt>おも</rb></ruby>さ',
                'height': '<ruby><rb>高</rb><rt>たか</rt></ruby>さ',
            },
            type: 'assist'
        },
    ];

    let selectedParts = {
        blade: null,
        ratchet: null,
        bit: null,
        lock: null,
        assist: null,
        main: null,
    };

    const selectedBladeSpan = document.getElementById('selectedBlade');
    const selectedRatchetSpan = document.getElementById('selectedRatchet');
    const selectedBitSpan = document.getElementById('selectedBit');
    const totalWeightSpan = document.getElementById('totalWeight');
    const totalHeightSpan = document.getElementById('totalHeight');
    const totalBurstResistanceSpan = document.getElementById('totalBurstResistance');
    const ratchetToothCountSpan = document.getElementById('ratchetToothCount');
    const bitToothCountSpan = document.getElementById('bitToothCount');
    const turnTypeSpan = document.getElementById('turnType');
    const totalTypeSpan = document.getElementById('totalType');
    const resetButton = document.getElementById('resetSelection');
    const selectedBlade = document.getElementById('selectedBlade');
    const selectedTotalName = document.getElementById('selectedTotalName');

    // 変更点: 新しい要素の参照を追加
    const selectionResultsContainer = document.getElementById('selectionResultsContainer');
    const toggleButton = document.getElementById('toggleSelectionResults');

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    const lineButtons = document.querySelectorAll('.line-button');
    const lineContents = document.querySelectorAll('.line-content');
    const lineTabs = document.querySelectorAll('.line-tabs');

    lineButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetButtonId = button.dataset.line;
            lineButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            lineTabs.forEach(btn => btn.style.display =  'none');
            document.getElementById(targetButtonId).style.display = 'block';
            //tabの最初のだけは出す
            let targetTabId = "lock";
            if (targetButtonId == "basic"){
                targetTabId = "blade";
            }
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabButtons.forEach(btn => {
                const tempTabId = btn.dataset.tab;
                if (tempTabId == targetTabId){
                    btn.classList.add('active');
                }
            });
            document.getElementById(targetTabId).classList.add('active');
            resetSelection();
        });
    });


    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.dataset.tab;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(targetTabId).classList.add('active');
        });
    });

    tableConfigs.forEach(config => {
        populateTable(config.id, config.data, config.headers, config.displayNames, config.initialSort, config.type);
    });

    function updateSelectionDisplay(trClick = false) {

        let totalWeight = 0;
        let totalHeight = 0;
        let totalBurstResistance = 0;
        let ratchetTooth = 0;
        let bitTooth = 0;
        let selectedBladeName = "";
        let bitEnName = "";
        let bitJpName = "";
        

        //lock
        if (selectedParts.lock){
            selectedBladeName += selectedParts.lock.name;
            totalWeight += selectedParts.lock.weight;
        }

        if (selectedParts.main){
            selectedBladeName += selectedParts.main.name;
            totalWeight += selectedParts.main.weight;
            turnTypeSpan.textContent = turn_types[selectedParts.main.turn]
        }

        if (selectedParts.assist){
            selectedBladeName += selectedParts.assist.name;
            selectedBladeSpan.innerHTML = `${selectedParts.assist.yomi} ${selectedParts.assist.size}mm, ${selectedParts.assist.weight}g, ${selectedParts.assist.height}g `;
            totalWeight += selectedParts.assist.weight;
        }


        // Blade
        if (selectedParts.blade) {
            selectedBladeName += selectedParts.blade.name;
            //selectedBladeSpan.textContent = `${bey_types[selectedParts.blade.type]} ${selectedParts.blade.size}mm, ${selectedParts.blade.weight}g`;
            selectedBladeSpan.innerHTML = `<img src="./images/${selectedParts.blade.type.toLowerCase()}.svg" weight="14" height="14"> ${selectedParts.blade.size}mm, ${selectedParts.blade.weight}g`;
            totalWeight += selectedParts.blade.weight;
            turnTypeSpan.textContent = turn_types[selectedParts.blade.turn]
            //totalHeight += selectedParts.blade.height;
        } 


        // Ratchet
        if (selectedParts.ratchet && !trClick) {
            if ( selectedParts.bit && ignore_bits.includes(selectedParts.bit.name) ) {
                selectedParts.bit = null;
                selectedRatchetSpan.textContent = "----"
                selectedBitSpan.textContent = '----';
                totalBurstResistanceSpan.textContent = '0';
                bitToothCountSpan.textContent = '0';
                //bitの選択をなくす
                document.querySelectorAll('#bitsTable tbody tr').forEach(row => {
                    row.classList.remove('selected');
                });
            }
            selectedBladeName += selectedParts.ratchet.name;
            selectedRatchetSpan.textContent = `${selectedParts.ratchet.name} (${selectedParts.ratchet.weight}g)`;
            totalWeight += selectedParts.ratchet.weight;
            totalHeight += parseFloat(selectedParts.ratchet.height)/10;
            ratchetTooth = selectedParts.ratchet.tooth;
        }

        // Bit
        if (selectedParts.bit) {
            selectedBitSpan.innerHTML = `<img src="./images/${selectedParts.bit.type.toLowerCase()}.svg" weight="14" height="14"> ${selectedParts.bit.yomi} (${selectedParts.bit.exposure_height}mm, ${selectedParts.bit.weight}g)`;
            totalWeight += selectedParts.bit.weight;
            totalHeight += selectedParts.bit.exposure_height;
            totalBurstResistance = selectedParts.bit.burst;
            bitTooth = selectedParts.bit.tooth;
            //totalType.textContent = bey_types[selectedParts.bit.type]
            //totalType.innerHTML = `<img src="./images/${selectedParts.bit.type.toLowerCase()}.svg" weight="14" height="14">`;
            selectedBladeName += selectedParts.bit.name;
            if (trClick){
                ratchetTooth = 3;
                selectedRatchetSpan.textContent = selectedParts.bit.name;
                selectedParts.ratchet = null;
                //ラチェットの選択をなくす
                document.querySelectorAll('#ratchetTable tbody tr').forEach(row => {
                    row.classList.remove('selected');
                });
            }
        }

        if (selectedBladeName === ''){
            selectedBladeName = "----";
        }

        selectedTotalName.textContent = selectedBladeName;
        totalWeightSpan.textContent = totalWeight.toFixed(1);
        totalHeightSpan.textContent = totalHeight.toFixed(1);
        totalBurstResistanceSpan.textContent = totalBurstResistance;
        ratchetToothCountSpan.textContent = ratchetTooth;
        bitToothCountSpan.textContent = bitTooth;
    }

    function resetSelection() {
        selectedParts.blade = null;
        selectedParts.ratchet = null;
        selectedParts.bit = null;
        selectedParts.lock = null;
        selectedParts.main = null;
        selectedParts.assist = null;

        document.querySelectorAll('tbody tr').forEach(row => {
            row.classList.remove('selected');
        });

        selectedTotalName.textContent = '----'
        selectedRatchetSpan.textContent = '----';
        turnTypeSpan.textContent = '';
        selectedBladeSpan.textContent = '----';
        selectedBitSpan.textContent = '----';
        totalWeightSpan.textContent = '0.0';
        totalHeightSpan.textContent = '0.0';
        totalBurstResistanceSpan.textContent = '0';
        ratchetToothCountSpan.textContent = '0';
        bitToothCountSpan.textContent = '0';

        updateSelectionDisplay();
    }

    resetButton.addEventListener('click', resetSelection);

    // 変更点: トグルボタンのイベントリスナー
    toggleButton.addEventListener('click', () => {
        selectionResultsContainer.classList.toggle('hidden');
        if (selectionResultsContainer.classList.contains('hidden')) {
            toggleButton.textContent = '◀︎';
        } else {
            toggleButton.textContent = '▶︎';
        }
    });

    function populateTable(tableId, data, headers, displayNames, initialSort = null, type) {
        const table = document.getElementById(tableId);
        if (!table) return;

        const tbody = table.querySelector('tbody');
        const thead = table.querySelector('thead');

        let headerRow = '<tr>';
        headers.forEach(header => {
            headerRow += `<th data-sort-key="${header}">${displayNames[header] || header} <span class="sort-arrow"></span></th>`;
        });
        headerRow += '</tr>';
        thead.innerHTML = headerRow;

        if (initialSort) {
            const initialSortHeader = thead.querySelector(`th[data-sort-key="${initialSort.key}"]`);
            if (initialSortHeader) {
                initialSortHeader.dataset.sortOrder = initialSort.order;
                data.sort((a, b) => {
                    const valA = a[initialSort.key];
                    const valB = b[initialSort.key];

                    if (valA === undefined && valB === undefined) return 0;
                    if (valA === undefined) return initialSort.order === 'asc' ? 1 : -1;
                    if (valB === undefined) return initialSort.order === 'asc' ? -1 : 1;

                    if (typeof valA === 'string' && typeof valB === 'string') {
                        return initialSort.order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
                    } else {
                        return initialSort.order === 'asc' ? valA - valB : valB - valA;
                    }
                });
                initialSortHeader.classList.add(initialSort.order);
            }
        }

        renderTable(tbody, data, headers, type);

        thead.querySelectorAll('th[data-sort-key]').forEach(headerCell => {
            headerCell.addEventListener('click', () => {
                const sortKey = headerCell.dataset.sortKey;
                let currentSortOrder = headerCell.dataset.sortOrder || 'none';
                let newSortOrder;

                thead.querySelectorAll('th').forEach(th => {
                    th.classList.remove('asc', 'desc');
                    th.dataset.sortOrder = 'none';
                });

                if (currentSortOrder === 'asc') {
                    newSortOrder = 'desc';
                } else {
                    newSortOrder = 'asc';
                }

                data.sort((a, b) => {
                    const valA = a[sortKey];
                    const valB = b[sortKey];

                    if (valA === undefined && valB === undefined) return 0;
                    if (valA === undefined) return newSortOrder === 'asc' ? 1 : -1;
                    if (valB === undefined) return newSortOrder === 'asc' ? -1 : 1;

                    if (typeof valA === 'string' && typeof valB === 'string') {
                        return newSortOrder === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
                    } else {
                        return newSortOrder === 'asc' ? valA - valB : valB - valA;
                    }
                });

                headerCell.classList.add(newSortOrder);
                headerCell.dataset.sortOrder = newSortOrder;
                renderTable(tbody, data, headers, type);
            });
        });
    }

    function renderTable(tbody, data, headers, type) {
        tbody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            if (selectedParts[type] && selectedParts[type].name === item.name) {
                row.classList.add('selected');
            }

            headers.forEach(header => {
                const cell = document.createElement('td');
                
                if(header == 'type'){
                    //cell.textContent = bey_types[item[header]];
                    cell.innerHTML = `<img src="./images/${item[header].toLowerCase()}.svg" weight="14" height="14">`;
                }else if(header == 'turn'){
                    //cell.textContent = turn_types[item[header]];
                    cell.innerHTML = `<img src="./images/${item[header].toLowerCase()}.svg" weight="12" height="12">`;
                }else{
                    if (header == "name" && item['yomi']){
                        cell.innerHTML = `<ruby><rb>${item[header]}</rb><rt>${item['yomi']}</rt></ruby>`;
                    }else{
                        cell.textContent = item[header] !== undefined ? item[header] : '';
                    }
                }
                row.appendChild(cell);
            });

            row.addEventListener('click', () => {
                tbody.querySelectorAll('tr').forEach(r => r.classList.remove('selected'));
                row.classList.add('selected');

                selectedParts[type] = item;
                let trClick = ignore_bits.includes(item.name)
                updateSelectionDisplay(trClick);
            });

            tbody.appendChild(row);
        });
    }

    updateSelectionDisplay();
});