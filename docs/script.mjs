const blade_data = [{"name": "アイアンマン","type": "D","size": 48.5,"weight": 33.7,"turn": "R"},{"name": "インパクトドレイク","type": "A","size": 51.0,"weight": 38.8,"turn": "R"},{"name": "ヴァイスタイガー","type": "B","size": 48.5,"weight": 34.7,"turn": "R"},{"name": "ヴァイパーテイル","type": "S","size": 48.5,"weight": 34.6,"turn": "R"},{"name": "ウィザードアロー","type": "S","size": 48.0,"weight": 32.0,"turn": "R"},{"name": "ウィザードロッド","type": "S","size": 50.5,"weight": 35.4,"turn": "R"},{"name": "ヴェノム","type": "A","size": 49.0,"weight": 34.2,"turn": "R"},{"name": "エアロペガサス","type": "A","size": 51.0,"weight": 38.2,"turn": "R"},{"name": "オプティマスプライマル","type": "A","size": 49.5,"weight": 35.6,"turn": "R"},{"name": "オプティマスプライム","type": "D","size": 48.5,"weight": 33.0,"turn": "R"},{"name": "クリムゾンガルーダ","type": "B","size": 49.0,"weight": 35.1,"turn": "R"},{"name": "クロコランチ","type": "A","size": 48.5,"weight": 33.8,"turn": "R"},{"name": "ゴーストサークル","type": "S","size": 45.0,"weight": 26.6,"turn": "R"},{"name": "コバルトドラグーン","type": "A","size": 50.5,"weight": 37.7,"turn": "L"},{"name": "コバルトドレイク","type": "A","size": 48.0,"weight": 37.7,"turn": "R"},{"name": "サノス","type": "D","size": 48.5,"weight": 29.2,"turn": "R"},{"name": "サムライセイバー","type": "A","size": 50.0,"weight": 36.4,"turn": "R"},{"name": "シェルタードレイク","type": "B","size": 50.0,"weight": 32.6,"turn": "R"},{"name": "シノビシャドウ","type": "D","size": 48.5,"weight": 28.1,"turn": "R"},{"name": "シノビナイフ","type": "D","size": 45.5,"weight": 31.0,"turn": "R"},{"name": "シャークエッジ","type": "A","size": 49.0,"weight": 34.5,"turn": "R"},{"name": "シルバーウルフ","type": "S","size": 49.0,"weight": 36.9,"turn": "R"},{"name": "スコーピオスピア","type": "D","size": 50.5,"weight": 39.6,"turn": "R"},{"name": "スタースクリーム","type": "S","size": 48.5,"weight": 30.2,"turn": "R"},{"name": "ストームペガシス","type": "A","size": 48.5,"weight": 31.2,"turn": "R"},{"name": "スパイダーマン","type": "S","size": 49.0,"weight": 33.1,"turn": "R"},{"name": "スフィンクスカウル","type": "D","size": 48.0,"weight": 32.6,"turn": "R"},{"name": "ゼノエクスカリバー","type": "A","size": 49.5,"weight": 30.8,"turn": "R"},{"name": "ダース・ベイダー","type": "D","size": 48.0,"weight": 30.8,"turn": "R"},{"name": "ティラノビート","type": "A","size": 49.0,"weight": 37.0,"turn": "R"},{"name": "ドライガースラッシュ","type": "B","size": 49.0,"weight": 28.6,"turn": "R"},{"name": "ドラグーンストーム","type": "A","size": 49.0,"weight": 25.1,"turn": "L"},{"name": "ドラシエルシールド","type": "S","size": 50.0,"weight": 28.2,"turn": "R"},{"name": "ドランザースパイラル","type": "B","size": 48.5,"weight": 27.8,"turn": "R"},{"name": "ドランソード","type": "A","size": 48.5,"weight": 34.8,"turn": "R"},{"name": "ドランダガー","type": "A","size": 48.0,"weight": 34.9,"turn": "R"},{"name": "ドランバスター","type": "A","size": 49.0,"weight": 36.5,"turn": "R"},{"name": "トリケラプレス","type": "D","size": 49.0,"weight": 36.4,"turn": "R"},{"name": "ナイトシールド","type": "D","size": 48.0,"weight": 32.3,"turn": "R"},{"name": "ナイトメイル","type": "D","size": 48.0,"weight": 36.6,"turn": "R"},{"name": "ナイトランス","type": "D","size": 47.5,"weight": 32.9,"turn": "R"},{"name": "ビクトリーヴァルキリー","type": "A","size": 49.0,"weight": 33.4,"turn": "R"},{"name": "フェニックスウイング","type": "A","size": 49.5,"weight": 37.9,"turn": "R"},{"name": "フェニックスフェザー","type": "A","size": 48.5,"weight": 33.2,"turn": "R"},{"name": "フェニックスラダー","type": "S","size": 48.5,"weight": 34.7,"turn": "R"},{"name": "プテラスイング","type": "S","size": 49.0,"weight": 34.4,"turn": "R"},{"name": "ブラックシェル","type": "D","size": 48.5,"weight": 32.4,"turn": "R"},{"name": "ベアスクラッチ","type": "D","size": 45.5,"weight": 30.2,"turn": "R"},{"name": "ヘルズサイズ","type": "B","size": 48.0,"weight": 32.7,"turn": "R"},{"name": "ヘルズチェイン","type": "B","size": 48.0,"weight": 33.2,"turn": "R"},{"name": "ヘルズハンマー","type": "B","size": 48.0,"weight": 33.2,"turn": "R"},{"name": "ホエールウェーブ","type": "B","size": 50.0,"weight": 38.0,"turn": "R"},{"name": "マンダロリアン","type": "A","size": 49.0,"weight": 30.8,"turn": "R"},{"name": "マンモスタスク","type": "B","size": 48.5,"weight": 32.4,"turn": "R"},{"name": "メガトロン","type": "B","size": 48.5,"weight": 31.5,"turn": "R"},{"name": "モフ・ギデオン","type": "B","size": 48.5,"weight": 31.0,"turn": "R"},{"name": "ユニコーンスティング","type": "B","size": 48.0,"weight": 33.2,"turn": "R"},{"name": "ライトニングエルドラゴ（アッパー型）","type": "A","size": 48.5,"weight": 33.8,"turn": "L"},{"name": "ライトニングエルドラゴ（連打型）","type": "A","size": 48.5,"weight": 33.3,"turn": "L"},{"name": "ライノホーン","type": "D","size": 45.5,"weight": 32.8,"turn": "R"},{"name": "ルーク・スカイウォーカー","type": "D","size": 48.5,"weight": 31.4,"turn": "R"},{"name": "レオンクレスト","type": "D","size": 49.0,"weight": 35.0,"turn": "R"},{"name": "レオンクロー","type": "B","size": 49.0,"weight": 31.5,"turn": "R"},{"name": "ワイバーンゲイル","type": "S","size": 48.0,"weight": 32.0,"turn": "R"},{"name": "ゴーレムロック","type": "D","size": 50.0,"weight": 33.9,"turn": "R"}];
const ratchet_data = [{"name": "0-70","tooth": 0,"height": 70,"weight": 7},{"name": "0-80","tooth": 0,"height": 80,"weight": 7.6},{"name": "1-60","tooth": 1,"height": 60,"weight": 5.9},{"name": "1-80","tooth": 1,"height": 80,"weight": 6.7},{"name": "2-60","tooth": 2,"height": 60,"weight": 6.2},{"name": "2-70","tooth": 2,"height": 70,"weight": 6.3},{"name": "2-80","tooth": 2,"height": 80,"weight": 6.9},{"name": "3-60","tooth": 3,"height": 60,"weight": 6.3},{"name": "3-70","tooth": 3,"height": 70,"weight": 6.4},{"name": "3-80","tooth": 3,"height": 80,"weight": 6.9},{"name": "3-85","tooth": 3,"height": 85,"weight": 4.8},{"name": "4-55","tooth": 4,"height": 55,"weight": 4.8},{"name": "4-60","tooth": 4,"height": 60,"weight": 6.3},{"name": "4-70","tooth": 4,"height": 70,"weight": 6.5},{"name": "4-80","tooth": 4,"height": 80,"weight": 6.9},{"name": "5-60","tooth": 5,"height": 60,"weight": 6.6},{"name": "5-70","tooth": 5,"height": 70,"weight": 6.7},{"name": "5-80","tooth": 5,"height": 80,"weight": 7.1},{"name": "6-60","tooth": 6,"height": 60,"weight": 6.2},{"name": "6-80","tooth": 6,"height": 80,"weight": 6.9},{"name": "7-60","tooth": 7,"height": 60,"weight": 7.2},{"name": "7-70","tooth": 7,"height": 70,"weight": 7.3},{"name": "7-80","tooth": 7,"height": 80,"weight": 7.8},{"name": "9-60","tooth": 9,"height": 60,"weight": 6.2},{"name": "9-70","tooth": 9,"height": 70,"weight": 6.3},{"name": "9-80","tooth": 9,"height": 80,"weight": 6.9},{"name": "M-85","tooth": 5,"height": 85,"weight": 10.8}]
const bits_data = [{"name": "A","yomi": "アクセル","type": "A","tooth": 16,"burst": 80,"height": 29.6,"exposure_height": 12.2,"weight": 2.6},{"name": "B","yomi": "ボール","type": "S","tooth": 12,"burst": 30,"height": 29.8,"exposure_height": 12.4,"weight": 2.1},{"name": "BS","yomi": "バウンドスパイク","type": "D","tooth": 12,"burst": 30,"height": 29.6,"exposure_height": 13.6,"weight": 2.0,"annotation":"収縮時12.3"},{"name": "C","yomi": "サイクロン","type": "A","tooth": 12,"burst": 80,"height": 29.8,"exposure_height": 12.3,"weight": 2.2},{"name": "D","yomi": "ドット","type": "D","tooth": 12,"burst": 30,"height": 29.8,"exposure_height": 12.3,"weight": 2.0},{"name": "DB","yomi": "ディスクボール","type": "S","tooth": 12,"burst": 30,"height": 31.9,"exposure_height": 14.6,"weight": 3.2},{"name": "E","yomi": "エレベート","type": "B","tooth": 12,"burst": 30,"height": 29.0,"exposure_height": 11.8,"weight": 3.2},{"name": "F","yomi": "フラット","type": "A","tooth": 12,"burst": 80,"height": 29.7,"exposure_height": 12.3,"weight": 2.2},{"name": "FB","yomi": "フリーボール","type": "S","tooth": 12,"burst": 30,"height": 29.7,"exposure_height": 12.3,"weight": 1.9},{"name": "G","yomi": "グライド","type": "S","tooth": 16,"burst": 30,"height": 30.2,"exposure_height": 12.4,"weight": 2.6},{"name": "GB","yomi": "ギヤボール","type": "S","tooth": 12,"burst": 30,"height": 29.7,"exposure_height": 12.3,"weight": 2.1},{"name": "GF","yomi": "ギヤフラット","type": "A","tooth": 12,"burst": 80,"height": 29.6,"exposure_height": 12.3,"weight": 2.3},{"name": "GN","yomi": "ギヤニードル","type": "D","tooth": 12,"burst": 30,"height": 29.4,"exposure_height": 12.0,"weight": 2.0},{"name": "GP","yomi": "ギヤポイント","type": "B","tooth": 12,"burst": 80,"height": 30.0,"exposure_height": 12.4,"weight": 2.3},{"name": "GR","yomi": "ギヤラッシュ","type": "A","tooth": 10,"burst": 80,"height": 29.7,"exposure_height": 12.3,"weight": 2.1},{"name": "H","yomi": "ヘキサ","type": "B","tooth": 16,"burst": 80,"height": 29.4,"exposure_height": 12.2,"weight": 2.6},{"name": "HN","yomi": "ハイニードル","type": "D","tooth": 12,"burst": 30,"height": 30.7,"exposure_height": 13.3,"weight": 2.2},{"name": "HT","yomi": "ハイテーパー","type": "B","tooth": 12,"burst": 80,"height": 30.6,"exposure_height": 13.3,"weight": 2.3},{"name": "K","yomi": "キック","type": "B","tooth": 12,"burst": 80,"height": 29.6,"exposure_height": 12.5,"weight": 2.2},{"name": "L","yomi": "レベル","type": "A","tooth": 16,"burst": 80,"height": 29.5,"exposure_height": 12.5,"weight": 2.6},{"name": "LF","yomi": "ローフラット","type": "A","tooth": 12,"burst": 80,"height": 28.7,"exposure_height": 11.3,"weight": 2.2},{"name": "LO","yomi": "ローオーブ","type": "S","tooth": 12,"burst": 30,"height": 28.5,"exposure_height": 11.2,"weight": 1.9},{"name": "LR","yomi": "ローラッシュ","type": "A","tooth": 10,"burst": 80,"height": 28.7,"exposure_height": 11.3,"weight": 1.9},{"name": "MN","yomi": "メタルニードル","type": "D","tooth": 12,"burst": 30,"height": 29.7,"exposure_height": 12.4,"weight": 2.8},{"name": "N","yomi": "ニードル","type": "D","tooth": 12,"burst": 30,"height": 29.4,"exposure_height": 12.3,"weight": 2.0},{"name": "O","yomi": "オーブ","type": "S","tooth": 12,"burst": 30,"height": 29.8,"exposure_height": 12.3,"weight": 2.0},{"name": "P","yomi": "ポイント","type": "B","tooth": 12,"burst": 80,"height": 29.8,"exposure_height": 12.4,"weight": 2.2},{"name": "Q","yomi": "クエイク","type": "A","tooth": 12,"burst": 80,"height": 29.6,"exposure_height": 12.3,"weight": 2.2},{"name": "R","yomi": "ラッシュ","type": "A","tooth": 10,"burst": 80,"height": 29.7,"exposure_height": 12.3,"weight": 2.1},{"name": "RA","yomi": "ラバーアクセル","type": "A","tooth": 16,"burst": 80,"height": 30.0,"exposure_height": 12.3,"weight": 3.1},{"name": "S","yomi": "スパイク","type": "D","tooth": 12,"burst": 30,"height": 29.8,"exposure_height": 12.3,"weight": 2.0},{"name": "T","yomi": "テーパー","type": "B","tooth": 12,"burst": 80,"height": 29.7,"exposure_height": 12.3,"weight": 2.2},{"name": "TP","yomi": "トランスポイント","type": "B","tooth": 12,"burst": 80,"height": 28.6,"exposure_height": 11.5,"weight": 2.2,"annotation":"延長時13.0"},{"name": "U","yomi": "ユナイト","type": "B","tooth": 12,"burst": 80,"height": 29.3,"exposure_height": 12.3,"weight": 2.1},{"name": "UN","yomi": "アンダーニードル","type": "D","tooth": 12,"burst": 30,"height": 27.5,"exposure_height": 10.2,"weight": 1.9},{"name": "V","yomi": "ボルテックス","type": "A","tooth": 12,"burst": 80,"height": 29.4,"exposure_height": 12.3,"weight": 2.1},{"name": "W","yomi": "ウェッジ","type": "D","tooth": 10,"burst": 30,"height": 29.7,"exposure_height": 12.7,"weight": 1.9},{"name": "Z","yomi": "ザップ","type": "B","tooth": 16,"burst": 80,"height": 28.8,"exposure_height": 11.5,"weight": 2.5}]
const lock_data = [{"name": "ドラン","weight": 1},{"name": "ウィザード","weight": 1},{"name": "ペルセウス","weight": 1},{"name": "ヘルズ","weight": 1},{"name": "ライノ","weight": 1},{"name": "フォックス","weight": 1}];
const main_data = [{"name": "ブレイブ","size": 52.5,"weight": 31.2,"turn": "R"},{"name": "アーク","size": 51,"weight": 29.4,"turn": "R"},{"name": "ダーク","size": 51.5,"weight": 30.3,"turn": "R"},{"name": "リーパー","size": 51.5,"weight": 28.9,"turn": "R"},{"name": "ブラッシュ","size": 51,"weight": 30.4,"turn": "R"}]
const assist_data = [{"name": "J","yomi": "ジャギー","size": 46,"weight": 4.8,"height": 10},{"name": "C","yomi": "チャージ","size": 45,"weight": 5,"height": 11},{"name": "T","yomi": "ターン","size": 48.5,"weight": 5.6,"height": 11},{"name": "B","yomi": "バンパー","size": 48,"weight": 5.2,"height": 11},{"name": "R","yomi": "ラウンド","size": 47.5,"weight": 4.7,"height": 11},{"name": "S","yomi": "スラッシュ","size": 47.5,"weight": 4.6,"height": 10}];

const bey_types = {"A":"アタック","B":"バランス","D":"ディフェンス","S":"スタミナ"};
const turn_types = {"L":"ひだり","R":"みぎ"}

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

    function updateSelectionDisplay() {

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
        if (selectedParts.ratchet) {
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
                updateSelectionDisplay();
            });

            tbody.appendChild(row);
        });
    }

    updateSelectionDisplay();
});