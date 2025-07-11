const blade_data = [{"name": "スコーピオスピア","height": 50.5,"weight": 39.6},{"name": "インパクトドレイク","height": 51,"weight": 38.8},{"name": "エアロペガサス","height": 51,"weight": 38.2},{"name": "ホエールウェーブ","height": 50,"weight": 38},{"name": "フェニックスウイング","height": 49.5,"weight": 37.9},{"name": "コバルトドレイク","height": 48,"weight": 37.7},{"name": "コバルトドラグーン","height": 50.5,"weight": 37.7},{"name": "ティラノビート","height": 49,"weight": 37},{"name": "シルバーウルフ","height": 49,"weight": 36.9},{"name": "ナイトメイル","height": 48,"weight": 36.6},{"name": "ドランバスター","height": 49,"weight": 36.5},{"name": "トリケラプレス","height": 49,"weight": 36.4},{"name": "サムライセイバー","height": 50,"weight": 36.4,"annotation": "収納時49.0"},{"name": "オプティマスプライマル","height": 49.5,"weight": 35.6},{"name": "ウィザードロッド","height": 50.5,"weight": 35.4},{"name": "クリムゾンガルーダ","height": 49,"weight": 35.1},{"name": "レオンクレスト","height": 49,"weight": 35},{"name": "ドランダガー","height": 48,"weight": 34.9},{"name": "ドランソード","height": 48.5,"weight": 34.8},{"name": "ヴァイスタイガー","height": 48.5,"weight": 34.7},{"name": "フェニックスラダー","height": 48.5,"weight": 34.7},{"name": "ヴァイパーテイル","height": 48.5,"weight": 34.6},{"name": "シャークエッジ","height": 49,"weight": 34.5},{"name": "プテラスイング","height": 49,"weight": 34.4},{"name": "ヴェノム","height": 49,"weight": 34.2},{"name": "ライトニングエルドラゴ（アッパー型）","height": 48.5,"weight": 33.8},{"name": "クロコランチ","height": 48.5,"weight": 33.8},{"name": "アイアンマン","height": 48.5,"weight": 33.7},{"name": "ビクトリーヴァルキリー","height": 49,"weight": 33.4},{"name": "ライトニングエルドラゴ（連打型）","height": 48.5,"weight": 33.3},{"name": "ヘルズチェイン","height": 48,"weight": 33.2},{"name": "ユニコーンスティング","height": 48,"weight": 33.2},{"name": "ヘルズハンマー","height": 48,"weight": 33.2},{"name": "フェニックスフェザー","height": 48.5,"weight": 33.2},{"name": "スパイダーマン","height": 49,"weight": 33.1},{"name": "オプティマスプライム","height": 48.5,"weight": 33},{"name": "ナイトランス","height": 47.5,"weight": 32.9},{"name": "ライノホーン","height": 45.5,"weight": 32.8},{"name": "ヘルズサイズ","height": 48,"weight": 32.7},{"name": "スフィンクスカウル","height": 48,"weight": 32.6},{"name": "シェルタードレイク","height": 50,"weight": 32.6},{"name": "ブラックシェル","height": 48.5,"weight": 32.4},{"name": "マンモスタスク","height": 48.5,"weight": 32.4},{"name": "ナイトシールド","height": 48,"weight": 32.3},{"name": "ウィザードアロー","height": 48,"weight": 32},{"name": "ワイバーンゲイル","height": 48,"weight": 32},{"name": "メガトロン","height": 48.5,"weight": 31.5},{"name": "レオンクロー","height": 49,"weight": 31.5},{"name": "ルーク・スカイウォーカー","height": 48.5,"weight": 31.4},{"name": "ストームペガシス","height": 48.5,"weight": 31.2},{"name": "シノビナイフ","height": 45.5,"weight": 31},{"name": "モフ・ギデオン","height": 48.5,"weight": 31},{"name": "ダース・ベイダー","height": 48,"weight": 30.8},{"name": "マンダロリアン","height": 49,"weight": 30.8},{"name": "ゼノエクスカリバー","height": 49.5,"weight": 30.8},{"name": "ベアスクラッチ","height": 45.5,"weight": 30.2},{"name": "スタースクリーム","height": 48.5,"weight": 30.2},{"name": "サノス","height": 48.5,"weight": 29.2},{"name": "ドライガースラッシュ","height": 49,"weight": 28.6},{"name": "ドラシエルシールド","height": 50,"weight": 28.2},{"name": "シノビシャドウ","height": 48.5,"weight": 28.1},{"name": "ドランザースパイラル","height": 48.5,"weight": 27.8},{"name": "ゴーストサークル","height": 45,"weight": 26.6},{"name": "ドラグーンストーム","height": 49,"weight": 25.1}]
const ratchet_data = [{"name": "0-70","tooth": 0,"height": 70,"weight": 7},{"name": "0-80","tooth": 0,"height": 80,"weight": 7.6},{"name": "1-60","tooth": 1,"height": 60,"weight": 5.9},{"name": "1-80","tooth": 1,"height": 80,"weight": 6.7},{"name": "2-60","tooth": 2,"height": 60,"weight": 6.2},{"name": "2-70","tooth": 2,"height": 70,"weight": 6.3},{"name": "2-80","tooth": 2,"height": 80,"weight": 6.9},{"name": "3-60","tooth": 3,"height": 60,"weight": 6.3},{"name": "3-70","tooth": 3,"height": 70,"weight": 6.4},{"name": "3-80","tooth": 3,"height": 80,"weight": 6.9},{"name": "3-85","tooth": 3,"height": 85,"weight": 4.8},{"name": "4-55","tooth": 4,"height": 55,"weight": 4.8},{"name": "4-60","tooth": 4,"height": 60,"weight": 6.3},{"name": "4-70","tooth": 4,"height": 70,"weight": 6.5},{"name": "4-80","tooth": 4,"height": 80,"weight": 6.9},{"name": "5-60","tooth": 5,"height": 60,"weight": 6.6},{"name": "5-70","tooth": 5,"height": 70,"weight": 6.7},{"name": "5-80","tooth": 5,"height": 80,"weight": 7.1},{"name": "6-60","tooth": 6,"height": 60,"weight": 6.2},{"name": "6-80","tooth": 6,"height": 80,"weight": 6.9},{"name": "7-60","tooth": 7,"height": 60,"weight": 7.2},{"name": "7-70","tooth": 7,"height": 70,"weight": 7.3},{"name": "7-80","tooth": 7,"height": 80,"weight": 7.8},{"name": "9-60","tooth": 9,"height": 60,"weight": 6.2},{"name": "9-70","tooth": 9,"height": 70,"weight": 6.3},{"name": "9-80","tooth": 9,"height": 80,"weight": 6.9},{"name": "M-85","tooth": 5,"height": 85,"weight": 10.8}]
const bits_data = [{"name": "FB（フリーボール）","tooth": 12,"burst_resistance": 30,"height": 29.7,"exposure_height": 12.3,"weight": 1.9},{"name": "UN（アンダーニードル）","tooth": 12,"burst_resistance": 30,"height": 27.5,"exposure_height": 10.2,"weight": 1.9},{"name": "LO（ローオーブ）","tooth": 12,"burst_resistance": 30,"height": 28.5,"exposure_height": 11.2,"weight": 1.9},{"name": "W（ウェッジ）","tooth": 10,"burst_resistance": 30,"height": 29.7,"exposure_height": 12.7,"weight": 1.9},{"name": "N（ニードル）","tooth": 12,"burst_resistance": 30,"height": 29.4,"exposure_height": 12.3,"weight": 2},{"name": "O（オーブ）","tooth": 12,"burst_resistance": 30,"height": 29.8,"exposure_height": 12.3,"weight": 2},{"name": "S（スパイク）","tooth": 12,"burst_resistance": 30,"height": 29.8,"exposure_height": 12.3,"weight": 2},{"name": "GN（ギヤニードル）","tooth": 12,"burst_resistance": 30,"height": 29.4,"exposure_height": 12,"weight": 2},{"name": "D（ドット）","tooth": 12,"burst_resistance": 30,"height": 29.8,"exposure_height": 12.3,"weight": 2},{"name": "BS（バウンドスパイク）","tooth": 12,"burst_resistance": 30,"height": 29.6,"exposure_height": 13.6,"weight": 2,"annotation":"収縮時12.3"},{"name": "B（ボール）","tooth": 12,"burst_resistance": 30,"height": 29.8,"exposure_height": 12.4,"weight": 2.1},{"name": "GB（ギヤボール）","tooth": 12,"burst_resistance": 30,"height": 29.7,"exposure_height": 12.3,"weight": 2.1},{"name": "HN（ハイニードル）","tooth": 12,"burst_resistance": 30,"height": 30.7,"exposure_height": 13.3,"weight": 2.2},{"name": "G（グライド）","tooth": 16,"burst_resistance": 30,"height": 30.2,"exposure_height": 12.4,"weight": 2.6},{"name": "MN（メタルニードル）","tooth": 12,"burst_resistance": 30,"height": 29.7,"exposure_height": 12.4,"weight": 2.8},{"name": "DB（ディスクボール）","tooth": 12,"burst_resistance": 30,"height": 31.9,"exposure_height": 14.6,"weight": 3.2},{"name": "E（エレベート）","tooth": 12,"burst_resistance": 30,"height": 29,"exposure_height": 11.8,"weight": 3.2},{"name": "LR（ローラッシュ）","tooth": 10,"burst_resistance": 80,"height": 28.7,"exposure_height": 11.3,"weight": 1.9},{"name": "R（ラッシュ）","tooth": 10,"burst_resistance": 80,"height": 29.7,"exposure_height": 12.3,"weight": 2.1},{"name": "U（ユナイト）","tooth": 12,"burst_resistance": 80,"height": 29.3,"exposure_height": 12.3,"weight": 2.1},{"name": "V（ボルテックス）","tooth": 12,"burst_resistance": 80,"height": 29.4,"exposure_height": 12.3,"weight": 2.1},{"name": "GR（ギヤラッシュ）","tooth": 10,"burst_resistance": 80,"height": 29.7,"exposure_height": 12.3,"weight": 2.1},{"name": "F（フラット）","tooth": 12,"burst_resistance": 80,"height": 29.7,"exposure_height": 12.3,"weight": 2.2},{"name": "T（テーパー）","tooth": 12,"burst_resistance": 80,"height": 29.7,"exposure_height": 12.3,"weight": 2.2},{"name": "LF（ローフラット）","tooth": 12,"burst_resistance": 80,"height": 28.7,"exposure_height": 11.3,"weight": 2.2},{"name": "P（ポイント）","tooth": 12,"burst_resistance": 80,"height": 29.8,"exposure_height": 12.4,"weight": 2.2},{"name": "Q（クエイク）","tooth": 12,"burst_resistance": 80,"height": 29.6,"exposure_height": 12.3,"weight": 2.2},{"name": "C（サイクロン）","tooth": 12,"burst_resistance": 80,"height": 29.8,"exposure_height": 12.3,"weight": 2.2},{"name": "TP（トランスポイント）","tooth": 12,"burst_resistance": 80,"height": 28.6,"exposure_height": 11.5,"weight": 2.2,"annotation": "延長時13.0"},{"name": "K（キック）","tooth": 12,"burst_resistance": 80,"height": 29.6,"exposure_height": 12.5,"weight": 2.2},{"name": "HT（ハイテーパー）","tooth": 12,"burst_resistance": 80,"height": 30.6,"exposure_height": 13.3,"weight": 2.3},{"name": "GF（ギヤフラット）","tooth": 12,"burst_resistance": 80,"height": 29.6,"exposure_height": 12.3,"weight": 2.3},{"name": "GP（ギヤポイント）","tooth": 12,"burst_resistance": 80,"height": 30,"exposure_height": 12.4,"weight": 2.3},{"name": "Z（ザップ）","tooth": 16,"burst_resistance": 80,"height": 28.8,"exposure_height": 11.5,"weight": 2.5},{"name": "A（アクセル）","tooth": 16,"burst_resistance": 80,"height": 29.6,"exposure_height": 12.2,"weight": 2.6},{"name": "H（ヘキサ）","tooth": 16,"burst_resistance": 80,"height": 29.4,"exposure_height": 12.2,"weight": 2.6},{"name": "L（レベル）","tooth": 16,"burst_resistance": 80,"height": 29.5,"exposure_height": 12.5,"weight": 2.6},{"name": "RA（ラバーアクセル）","tooth": 16,"burst_resistance": 80,"height": 30,"exposure_height": 12.3,"weight": 3.1}]

document.addEventListener('DOMContentLoaded', () => {
    const tableConfigs = [
        {
            id: 'bladeTable',
            data: blade_data,
            headers: ['name', 'height', 'weight', 'annotation'],
            displayNames: {
                'name': 'なまえ',
                'height': 'たかさ',
                'weight': 'おもさ',
                'annotation': 'じょうほう'
            },
            initialSort: { key: 'name', order: 'asc' },
            type: 'blade'
        },
        {
            id: 'ratchetTable',
            data: ratchet_data,
            headers: ['name', 'tooth', 'height', 'weight'],
            displayNames: {
                'name': 'なまえ',
                'tooth': 'はのかず',
                'height': 'たかさ',
                'weight': 'おもさ'
            },
            type: 'ratchet'
        },
        {
            id: 'bitsTable',
            data: bits_data,
            headers: ['name', 'tooth', 'burst_resistance', 'height', 'exposure_height', 'weight', 'annotation'],
            displayNames: {
                'name': 'なまえ',
                'tooth': 'はのかず',
                'burst_resistance': 'バーストたいせい',
                'height': 'たかさ',
                'exposure_height': 'ろしゅつたかさ',
                'weight': 'おもさ',
                'annotation': 'じょうほう'
            },
            type: 'bit'
        }
    ];

    let selectedParts = {
        blade: null,
        ratchet: null,
        bit: null
    };

    const selectedBladeSpan = document.getElementById('selectedBlade');
    const selectedRatchetSpan = document.getElementById('selectedRatchet');
    const selectedBitSpan = document.getElementById('selectedBit');
    const totalWeightSpan = document.getElementById('totalWeight');
    const totalHeightSpan = document.getElementById('totalHeight');
    const totalBurstResistanceSpan = document.getElementById('totalBurstResistance');
    const ratchetToothCountSpan = document.getElementById('ratchetToothCount');
    const bitToothCountSpan = document.getElementById('bitToothCount');
    const resetButton = document.getElementById('resetSelection');

    // 変更点: 新しい要素の参照を追加
    const selectionResultsContainer = document.getElementById('selectionResultsContainer');
    const toggleButton = document.getElementById('toggleSelectionResults');

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

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

        // Blade
        if (selectedParts.blade) {
            selectedBladeSpan.textContent = `${selectedParts.blade.name} (${selectedParts.blade.height}mm, ${selectedParts.blade.weight}g)`;
            totalWeight += selectedParts.blade.weight;
            totalHeight += selectedParts.blade.height;
        } else {
            selectedBladeSpan.textContent = '----';
        }

        // Ratchet
        if (selectedParts.ratchet) {
            selectedRatchetSpan.textContent = `${selectedParts.ratchet.name} (${selectedParts.ratchet.weight}g)`;
            totalWeight += selectedParts.ratchet.weight;
            totalHeight += selectedParts.ratchet.height;
            ratchetTooth = selectedParts.ratchet.tooth;
        } else {
            selectedRatchetSpan.textContent = '----';
        }

        // Bit
        if (selectedParts.bit) {
            selectedBitSpan.textContent = `${selectedParts.bit.name} (${selectedParts.bit.exposure_height}mm, ${selectedParts.bit.weight}g)`;
            totalWeight += selectedParts.bit.weight;
            totalHeight += selectedParts.bit.exposure_height;
            totalBurstResistance = selectedParts.bit.burst_resistance;
            bitTooth = selectedParts.bit.tooth;
        } else {
            selectedBitSpan.textContent = '----';
        }

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

        document.querySelectorAll('tbody tr').forEach(row => {
            row.classList.remove('selected');
        });

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
                cell.textContent = item[header] !== undefined ? item[header] : '';
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