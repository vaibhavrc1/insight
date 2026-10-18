/**
 * ============================================================================
 * WEALTH & SAVINGS PORTFOLIO — MODULAR BACKEND ENGINE (Code.gs) - v35
 * ============================================================================
 */

var HISTORICAL_DATA = [
  ["2023-08-01", 88706.07, 100000, 126383.66, 500000, 151775, 89146, 122011.01, 0, 0, ""],
  ["2023-09-01", 145986.78, 100000, 126108.66, 500000, 151775, 93146, 115109, 0, 0, ""],
  ["2023-10-01", 43509.58, 100000, 51468.66, 500000, 151775, 97146, 338723, 0, 0, ""],
  ["2023-11-01", 48380.82, 100000, 50536.66, 500000, 151775, 101146, 377036, 0, 0, ""],
  ["2023-12-01", 16092.61, 100000, 25346.66, 500000, 151775, 105146, 565557, 0, 0, ""],
  ["2024-01-01", 13514.48, 100000, 15625.66, 500000, 151775, 109263, 644337, 0, 0, ""],
  ["2024-02-01", 25222.48, 105000, 25125.66, 500000, 151775, 113263, 681957, 0, 0, ""],
  ["2024-03-01", 19708.4, 110000, 25125.66, 500000, 151775, 117151, 721596, 0, 0, ""],
  ["2024-04-01", 20000.4, 125000, 15104.16, 500000, 151775, 121151, 768421, 0, 0, ""],
  ["2024-05-01", 20000.35, 140000, 25106.16, 300000, 162551, 125151, 1013533, 0, 0, ""],
  ["2024-06-01", 20848.95, 175000, 25106.16, 300000, 162551, 129151, 1102875, 0, 0, ""],
  ["2024-07-01", 15260.86, 210000, 20282.16, 300000, 162551, 133151, 1180849, 0, 0, ""],
  ["2024-08-01", 21474.65, 235000, 25046.16, 300000, 162551, 137151, 1228214, 0, 0, ""],
  ["2024-09-01", 26035.45, 265000, 25216.16, 300000, 162551, 141151, 1233079, 0, 0, ""],
  ["2024-10-01", 26171.14, 270000, 25372.16, 350000, 162551, 145151, 1264324, 0, 0, ""],
  ["2024-11-01", 24303.45, 285000, 25372.16, 350000, 162551, 149151, 1248580, 0, 0, ""],
  ["2024-12-01", 29970.45, 333000, 30372.16, 350000, 212551, 153151, 1253692, 0, 0, ""],
  ["2025-01-01", 30177.45, 375000, 30662.16, 350000, 212551, 163998, 1246548, 0, 0, ""],
  ["2025-02-01", 29510.15, 390000, 60162.16, 350000, 212551, 168366, 1219961, 0, 0, ""],
  ["2025-03-01", 31667.21, 405000, 29862.16, 350000, 212551, 168366, 1154493, 0, 0, ""],
  ["2025-04-01", 29676.42, 420000, 29998.02, 394664, 212551, 168366, 1255575, 0, 0, ""],
  ["2025-05-01", 143139.91, 355000, 30229.02, 350000, 225275, 177223, 1342645, 0, 0, ""],
  ["2025-06-01", 82751.42, 365000, 30229.02, 350000, 225275, 185959, 1497866, 0, 0, ""],
  ["2025-07-01", 31000, 375000, 32439.02, 400000, 225275, 190327, 1604132, 0, 0, ""],
  ["2025-08-01", 50719.78, 375000, 50439.02, 400000, 225275, 190327, 1786940, 0, 0, ""],
  ["2025-09-01", 50690.46, 355000, 50439.02, 450000, 225275, 216667, 1802213, 0, 0, ""],
  ["2025-10-01", 50456.3, 385000, 50714.02, 450000, 225275, 227321, 1881057, 0, 0, ""],
  ["2025-11-01", 96841.07, 385000, 50714.02, 450000, 225275, 227321, 1947008, 0, 0, ""],
  ["2025-12-01", 176841.07, 385000, 50714.02, 450000, 225275, 254020, 1947008, 0, 0, "Unstable and simulated with +80,000 in bank because of car purchase"],
  ["2026-01-01", 49956.66, 390000, 49921.02, 400000, 225275, 264674, 2033146, 46982.15, 34732.18, ""],
  ["2026-02-01", 50330.6, 360000, 49890.02, 400000, 225275, 275328, 2075089, 65758.65, 50905, ""],
  ["2026-03-01", 47252.27, 395000, 37542, 450000, 225275, 285982, 2028752, 70351.68, 52313.23, ""],
  ["2026-04-01", 51647.86, 335000, 49867, 450000, 241270, 296636, 1988202, 108282.94, 73371.26, "US-IRAN War"],
  ["2026-05-01", 50405.75, 335000, 50123.02, 450000, 241270, 307290, 2205827, 121159, 81767.84, ""],
  ["2026-06-01", 44662.85, 385000, 48849.02, 500000, 342270, 317813, 2187975, 155690.7, 109931.72, ""],
  ["2026-07-01", 45496.8, 385000, 47815.02, 200000, 342270, 328467, 2532272, 237251.32, 160449.75, ""],
  ["2026-08-01", 58634.89, 410000, 50738, 250000, 342270, 339212, 2576318, 241530.56, 155534.25, ""],
  ["2026-09-01", 47522.73, 410000, 38064.02, 250000, 342270, 374883, 2571728, 248500.8, 170992.08, ""],
  ["2026-10-01", 50575.73, 410000, 58251.02, 250000, 342270, 374883, 2588095, 283788.7, 194472.19, ""]
];

/**
 * Historical Monthly Reference Levels for Nifty 50, Gold (10g INR), and Silver (1kg INR)
 * Used to compute smooth Base-100 Market Reaction curves without rigid return comparisons.
 */
var MARKET_BENCHMARKS = {
  "2023-08": { nifty: 19254, gold: 59010, silver: 76500 },
  "2023-09": { nifty: 19638, gold: 59200, silver: 73800 },
  "2023-10": { nifty: 19080, gold: 60910, silver: 72900 },
  "2023-11": { nifty: 20133, gold: 62530, silver: 74600 },
  "2023-12": { nifty: 21731, gold: 63820, silver: 75200 },
  "2024-01": { nifty: 21726, gold: 59380, silver: 73200 },
  "2024-02": { nifty: 21983, gold: 59290, silver: 71900 },
  "2024-03": { nifty: 22327, gold: 63120, silver: 75600 },
  "2024-04": { nifty: 22605, gold: 68230, silver: 81400 },
  "2024-05": { nifty: 22489, gold: 70450, silver: 91200 },
  "2024-06": { nifty: 23969, gold: 71250, silver: 89600 },
  "2024-07": { nifty: 24951, gold: 71200, silver: 87300 },
  "2024-08": { nifty: 25236, gold: 71890, silver: 86900 },
  "2024-09": { nifty: 25811, gold: 72660, silver: 91500 },
  "2024-10": { nifty: 24205, gold: 73850, silver: 97400 },
  "2024-11": { nifty: 24131, gold: 74720, silver: 92800 },
  "2024-12": { nifty: 23645, gold: 77560, silver: 89500 },
  "2025-01": { nifty: 23757, gold: 74580, silver: 91500 },
  "2025-02": { nifty: 22356, gold: 80630, silver: 93200 },
  "2025-03": { nifty: 23765, gold: 87550, silver: 103900 },
  "2025-04": { nifty: 24587, gold: 91190, silver: 95300 },
  "2025-05": { nifty: 25008, gold: 95430, silver: 96000 },
  "2025-06": { nifty: 25783, gold: 96210, silver: 105400 },
  "2025-07": { nifty: 25027, gold: 98340, silver: 111000 },
  "2025-08": { nifty: 24596, gold: 105170, silver: 114000 },
  "2025-09": { nifty: 24782, gold: 117570, silver: 129300 },
  "2025-10": { nifty: 25901, gold: 127820, silver: 155900 },
  "2025-11": { nifty: 26386, gold: 130200, silver: 155000 },
  "2025-12": { nifty: 26130, gold: 134890, silver: 198200 },
  "2026-01": { nifty: 23005, gold: 145320, silver: 255600 },
  "2026-02": { nifty: 22876, gold: 148600, silver: 240700 },
  "2026-03": { nifty: 20290, gold: 147660, silver: 250000 },
  "2026-04": { nifty: 21802, gold: 146180, silver: 248600 },
  "2026-05": { nifty: 21395, gold: 148090, silver: 238200 },
  "2026-06": { nifty: 21683, gold: 145990, silver: 233100 },
  "2026-07": { nifty: 22154, gold: 144350, silver: 235000 },
  "2026-08": { nifty: 21879, gold: 147650, silver: 236800 },
  "2026-09": { nifty: 20554, gold: 147070, silver: 237000 },
  "2026-10": { nifty: 22650, gold: 148200, silver: 212800 }
};

var DEFAULT_MILESTONES = [
  { id: "ms-1", title: " ₹50L Total Wealth Club", category: "net_worth", target: 5000000 },
  { id: "ms-2", title: "Mutual Fund Core Target", category: "mf", target: 3000000 },
  { id: "ms-3", title: "Gold & Silver Bullion Shield", category: "precious", target: 600000 },
  { id: "ms-4", title: "EPF Pillar", category: "epf", target: 500000 }
];

var RUPEE_FORMAT = '[$\u20B9][>9999999]##\\,##\\,##\\,##0.00;[$\u20B9][>99999]##\\,##\\,##0.00;[$\u20B9]##,##0.00';
var CHANGE_FORMAT = '[>99999]+[$\u20B9]##\\,##\\,##0.00;[<0]-[$\u20B9]##,##0.00;+[$\u20B9]##,##0.00';
var DATE_FORMAT = 'yyyy-mm-dd';

/**
 * WEB APP ENTRYPOINT (Uses Modular HTML Templates)
 */
function doGet(e) {
  var template = HtmlService.createTemplateFromFile("Index");
  return template.evaluate()
    .setTitle("Insight — Personal Wealth & Portfolio Analytics")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover");
}

/**
 * Helper to include modular HTML files (Styles.html, Scripts.html) into Index.html
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * GET OR SAVE CUSTOM MILESTONES IN CLOUD PROPERTIES
 */
function getMilestones() {
  try {
    var props = PropertiesService.getScriptProperties();
    var raw = props.getProperty("USER_MILESTONES_V1");
    if (raw) {
      var parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {}
  return DEFAULT_MILESTONES;
}

function saveMilestones(milestonesList) {
  var props = PropertiesService.getScriptProperties();
  props.setProperty("USER_MILESTONES_V1", JSON.stringify(milestonesList || []));
  return getMilestones();
}

/**
 * FETCHES COMPLETE PORTFOLIO DATA, YEARLY SUMMARIES, AND MARKET REACTION DATA
 */
function getInitialData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Portfolio_Data");

  if (!sheet || sheet.getLastRow() < 2) {
    sheet = setupStorageSheet();
  }

  var lastRow = sheet.getLastRow();
  var rows = sheet.getRange(2, 1, lastRow - 1, 15).getValues();

  var records = [];
  var labels = [];
  var netWorthArr = [];
  var marketArr = [];
  var bankArr = [];
  var epfArr = [];
  var mfArr = [];
  var goldArr = [];
  var silverArr = [];
  var monthlyChangeArr = [];

  var niftyRaw = [];
  var goldBenchRaw = [];
  var silverBenchRaw = [];

  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var lastKnownBench = { nifty: 22650, gold: 148200, silver: 212800 };

  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    var dtVal = r[0];
    if (!dtVal) continue;

    var d = new Date(dtVal);
    var dIso = Utilities.formatDate(d, Session.getScriptTimeZone(), "yyyy-MM-01");
    var ymKey = dIso.substring(0, 7);
    var yearStr = String(d.getFullYear());
    var label = monthNames[d.getMonth()] + " '" + yearStr.substring(2);

    var hdfc_sav = Number(r[1]) || 0;
    var hdfc_dep = Number(r[2]) || 0;
    var sbi_sav = Number(r[3]) || 0;
    var sbi_dep = Number(r[4]) || 0;
    var sbi_ppf = Number(r[5]) || 0;
    var total_bank = Number(r[6]) || (hdfc_sav + hdfc_dep + sbi_sav + sbi_dep + sbi_ppf);

    var epf = Number(r[7]) || 0;

    var mf = Number(r[8]) || 0;
    var gold = Number(r[9]) || 0;
    var silver = Number(r[10]) || 0;
    var total_market = Number(r[11]) || (mf + gold + silver);

    var net_worth = Number(r[12]) || (total_bank + epf + total_market);
    var prevNw = (i > 0) ? records[i - 1].net_worth : 0;
    var monthlyChange = (i > 0) ? (net_worth - prevNw) : 0;
    var monthlyChangePct = (prevNw > 0) ? Number(((monthlyChange / prevNw) * 100).toFixed(2)) : 0;
    var notes = String(r[14] || "");

    var prevMarket = (i > 0) ? records[i - 1].total_market : 0;
    var marketChange = (i > 0) ? (total_market - prevMarket) : 0;
    var marketChangePct = (prevMarket > 0) ? Number(((marketChange / prevMarket) * 100).toFixed(2)) : 0;

    var prevBank = (i > 0) ? records[i - 1].total_bank : 0;
    var bankChange = (i > 0) ? (total_bank - prevBank) : 0;
    var bankChangePct = (prevBank > 0) ? Number(((bankChange / prevBank) * 100).toFixed(2)) : 0;

    var prevEpf = (i > 0) ? records[i - 1].epf : 0;
    var epfChange = (i > 0) ? (epf - prevEpf) : 0;
    var epfChangePct = (prevEpf > 0) ? Number(((epfChange / prevEpf) * 100).toFixed(2)) : 0;

    var rec = {
      monthIso: dIso,
      year: yearStr,
      label: label,
      hdfc_sav: hdfc_sav,
      hdfc_dep: hdfc_dep,
      sbi_sav: sbi_sav,
      sbi_dep: sbi_dep,
      sbi_ppf: sbi_ppf,
      total_bank: total_bank,
      bankChange: bankChange,
      bankChangePct: bankChangePct,
      epf: epf,
      epfChange: epfChange,
      epfChangePct: epfChangePct,
      mf: mf,
      gold: gold,
      silver: silver,
      total_market: total_market,
      marketChange: marketChange,
      marketChangePct: marketChangePct,
      net_worth: net_worth,
      monthlyChange: monthlyChange,
      monthlyChangePct: monthlyChangePct,
      notes: notes
    };
    records.push(rec);

    labels.push(label);
    netWorthArr.push(net_worth);
    marketArr.push(total_market);
    bankArr.push(total_bank);
    epfArr.push(epf);
    mfArr.push(mf);
    goldArr.push(gold);
    silverArr.push(silver);
    monthlyChangeArr.push(monthlyChange);

    var bench = MARKET_BENCHMARKS[ymKey] || lastKnownBench;
    lastKnownBench = bench;
    niftyRaw.push(bench.nifty);
    goldBenchRaw.push(bench.gold);
    silverBenchRaw.push(bench.silver);
  }

  // Helper to safely find the initial baseline non-zero figure for indexed trajectory
  function findBaseVal(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] && arr[i] > 0) return arr[i];
    }
    return 1;
  }

  var baseNW = findBaseVal(netWorthArr);
  var baseMf = findBaseVal(mfArr);
  var baseGoldHolding = findBaseVal(goldArr);
  var baseSilverHolding = findBaseVal(silverArr);
  var baseNifty = niftyRaw[0] || 1;
  var baseGoldBench = goldBenchRaw[0] || 1;
  var baseSilverBench = silverBenchRaw[0] || 1;

  var reactionData = {
    labels: labels,
    // Raw arrays for direct tooltip rupee inspections
    mfRaw: mfArr,
    goldHoldingRaw: goldArr,
    silverHoldingRaw: silverArr,
    niftyRaw: niftyRaw,
    goldBenchRaw: goldBenchRaw,
    silverBenchRaw: silverBenchRaw,
    portfolioRaw: netWorthArr,
    // Base-100 Indexed Trajectories
    mfIndex: mfArr.map(function(v) { return Number(((v / baseMf) * 100).toFixed(1)); }),
    niftyIndex: niftyRaw.map(function(v) { return Number(((v / baseNifty) * 100).toFixed(1)); }),
    goldHoldingIndex: goldArr.map(function(v) { return Number(((v / baseGoldHolding) * 100).toFixed(1)); }),
    goldRateIndex: goldBenchRaw.map(function(v) { return Number(((v / baseGoldBench) * 100).toFixed(1)); }),
    silverHoldingIndex: silverArr.map(function(v) { return Number(((v / baseSilverHolding) * 100).toFixed(1)); }),
    silverRateIndex: silverBenchRaw.map(function(v) { return Number(((v / baseSilverBench) * 100).toFixed(1)); }),
    portfolioIndex: netWorthArr.map(function(v) { return Number(((v / baseNW) * 100).toFixed(1)); })
  };

  // Build Year-Wise Summary Data with Deep Metrics
  var yearlyMap = {};
  records.forEach(function(r, idx) {
    var y = r.year;
    if (!yearlyMap[y]) {
      var startWealthVal = idx > 0 ? records[idx - 1].net_worth : r.net_worth;
      var startBankVal = idx > 0 ? records[idx - 1].total_bank : r.total_bank;
      var startEpfVal = idx > 0 ? records[idx - 1].epf : r.epf;
      var startMarketVal = idx > 0 ? records[idx - 1].total_market : r.total_market;

      yearlyMap[y] = {
        year: y,
        monthsLogged: 0,
        startWealth: startWealthVal,
        startBank: startBankVal,
        startEpf: startEpfVal,
        startMarket: startMarketVal,
        closingWealth: r.net_worth,
        closingBank: r.total_bank,
        closingEpf: r.epf,
        closingMarket: r.total_market,
        closingMf: r.mf,
        closingGold: r.gold,
        closingSilver: r.silver,
        totalAdded: 0,
        bestMonthLabel: r.label,
        bestMonthGain: r.monthlyChange,
        bestMonthPct: r.monthlyChangePct,
        worstMonthLabel: r.label,
        worstMonthGain: r.monthlyChange,
        worstMonthPct: r.monthlyChangePct,
        monthlyRecords: []
      };
    }
    var ym = yearlyMap[y];
    ym.monthsLogged += 1;
    ym.closingWealth = r.net_worth;
    ym.closingBank = r.total_bank;
    ym.closingEpf = r.epf;
    ym.closingMarket = r.total_market;
    ym.closingMf = r.mf;
    ym.closingGold = r.gold;
    ym.closingSilver = r.silver;
    ym.totalAdded += r.monthlyChange;
    if (r.monthlyChange >= ym.bestMonthGain) {
      ym.bestMonthGain = r.monthlyChange;
      ym.bestMonthPct = r.monthlyChangePct;
      ym.bestMonthLabel = r.label;
    }
    if (r.monthlyChange <= ym.worstMonthGain) {
      ym.worstMonthGain = r.monthlyChange;
      ym.worstMonthPct = r.monthlyChangePct;
      ym.worstMonthLabel = r.label;
    }
    ym.monthlyRecords.push(r);
  });

  var yearlySummary = Object.keys(yearlyMap).sort().map(function(y) {
    var item = yearlyMap[y];
    item.avgMonthlyAdded = item.monthsLogged > 0 ? Math.round(item.totalAdded / item.monthsLogged) : 0;
    item.growthPct = item.startWealth > 0 ? Number(((item.totalAdded / item.startWealth) * 100).toFixed(2)) : 0;
    item.bankAdded = item.closingBank - item.startBank;
    item.bankGrowthPct = item.startBank > 0 ? Number(((item.bankAdded / item.startBank) * 100).toFixed(2)) : 0;
    item.epfAdded = item.closingEpf - item.startEpf;
    item.epfGrowthPct = item.startEpf > 0 ? Number(((item.epfAdded / item.startEpf) * 100).toFixed(2)) : 0;
    item.marketAdded = item.closingMarket - item.startMarket;
    item.marketGrowthPct = item.startMarket > 0 ? Number(((item.marketAdded / item.startMarket) * 100).toFixed(2)) : 0;
    return item;
  });

  var latest = records.length > 0 ? records[records.length - 1] : null;

  var nw = latest ? latest.net_worth : 0;
  var mw = latest ? latest.total_market : 0;
  var bb = latest ? latest.total_bank : 0;
  var epfVal = latest ? latest.epf : 0;
  var mChange = latest ? latest.monthlyChange : 0;

  var prevNw = nw - mChange;
  var mChangePct = prevNw > 0 ? Number(((mChange / prevNw) * 100).toFixed(2)) : 0;

  // YTD (Year-to-Date): From end of previous calendar year to latest month
  var curYearStr = latest ? latest.year : '2026';
  var priorYearRecs = records.filter(function(r) { return r.year !== curYearStr; });
  var startOfYearNw = priorYearRecs.length > 0 ? priorYearRecs[priorYearRecs.length - 1].net_worth : (records[0] ? records[0].net_worth : nw);
  var ytdAdded = nw - startOfYearNw;
  var ytdPct = startOfYearNw > 0 ? Number(((ytdAdded / startOfYearNw) * 100).toFixed(2)) : 0;

  // YoY (1-Year Trailing): 12 months ago
  var yoyIndex = records.length - 13;
  var yoyNw = yoyIndex >= 0 ? records[yoyIndex].net_worth : startOfYearNw;
  var yoyAdded = nw - yoyNw;
  var yoyPct = yoyNw > 0 ? Number(((yoyAdded / yoyNw) * 100).toFixed(2)) : 0;

  // Calculate average monthly wealth addition over last 6 months for simulator defaults
  var recentCount = Math.min(6, records.length);
  var recentSum = 0;
  for (var k = records.length - recentCount; k < records.length; k++) {
    if (k >= 0) recentSum += records[k].monthlyChange;
  }
  var avgRecentMonthly = recentCount > 0 ? Math.round(recentSum / recentCount) : 65000;

  return {
    records: records,
    latest: latest,
    yearlySummary: yearlySummary,
    milestones: getMilestones(),
    summary: {
      netWorth: nw,
      marketWealth: mw,
      bankBalance: bb,
      epf: epfVal,
      monthlyChange: mChange,
      monthlyChangePct: mChangePct,
      marketChange: latest ? latest.marketChange : 0,
      marketChangePct: latest ? latest.marketChangePct : 0,
      bankChange: latest ? latest.bankChange : 0,
      bankChangePct: latest ? latest.bankChangePct : 0,
      epfChange: latest ? latest.epfChange : 0,
      epfChangePct: latest ? latest.epfChangePct : 0,
      ytdAdded: ytdAdded,
      ytdPct: ytdPct,
      yoyAdded: yoyAdded,
      yoyPct: yoyPct,
      currentYear: curYearStr,
      marketShare: nw > 0 ? ((mw / nw) * 100).toFixed(1) + "%" : "0.0%",
      bankShare: nw > 0 ? ((bb / nw) * 100).toFixed(1) + "%" : "0.0%",
      epfShare: nw > 0 ? ((epfVal / nw) * 100).toFixed(1) + "%" : "0.0%",
      avgRecentMonthly: Math.max(10000, avgRecentMonthly)
    },
    chartData: {
      labels: labels,
      netWorth: netWorthArr,
      market: marketArr,
      bank: bankArr,
      epf: epfArr,
      mf: mfArr,
      gold: goldArr,
      silver: silverArr,
      monthlyChange: monthlyChangeArr,
      reaction: reactionData
    }
  };
}

/**
 * SAVES A NEW OR EDITED MONTHLY ENTRY TO GOOGLE SHEETS
 */
function saveRecord(p) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Portfolio_Data");
  if (!sheet) {
    sheet = setupStorageSheet();
  }

  var lastRow = sheet.getLastRow();
  var targetRow = lastRow + 1;

  if (lastRow >= 2) {
    var dates = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
    for (var i = 0; i < dates.length; i++) {
      var d = dates[i][0];
      if (d) {
        var iso = Utilities.formatDate(new Date(d), Session.getScriptTimeZone(), "yyyy-MM-01");
        if (iso === p.month) {
          targetRow = i + 2;
          break;
        }
      }
    }
  }

  sheet.getRange(targetRow, 1).setValue(p.month);
  sheet.getRange(targetRow, 2).setValue(p.hdfc_sav);
  sheet.getRange(targetRow, 3).setValue(p.hdfc_dep);
  sheet.getRange(targetRow, 4).setValue(p.sbi_sav);
  sheet.getRange(targetRow, 5).setValue(p.sbi_dep);
  sheet.getRange(targetRow, 6).setValue(p.sbi_ppf);
  sheet.getRange(targetRow, 7).setFormula("=SUM(B" + targetRow + ":F" + targetRow + ")");
  sheet.getRange(targetRow, 8).setValue(p.epf);
  sheet.getRange(targetRow, 9).setValue(p.mf);
  sheet.getRange(targetRow, 10).setValue(p.gold);
  sheet.getRange(targetRow, 11).setValue(p.silver);
  sheet.getRange(targetRow, 12).setFormula("=SUM(I" + targetRow + ":K" + targetRow + ")");
  sheet.getRange(targetRow, 13).setFormula("=G" + targetRow + "+H" + targetRow + "+L" + targetRow);

  if (targetRow > 2) {
    sheet.getRange(targetRow, 14).setFormula("=M" + targetRow + "-M" + (targetRow - 1));
  } else {
    sheet.getRange(targetRow, 14).setValue(0);
  }

  sheet.getRange(targetRow, 15).setValue(p.notes);
  formatStorageRow(sheet, targetRow);

  if (sheet.getLastRow() >= 3) {
    sheet.getRange(2, 1, sheet.getLastRow() - 1, 15).sort({ column: 1, ascending: true });
    recalculateAllChangeFormulas(sheet);
  }

  SpreadsheetApp.flush();
  return getInitialData();
}

/**
 * DELETES A MONTHLY ENTRY FROM GOOGLE SHEETS
 */
function deleteRecord(monthIso) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Portfolio_Data");
  if (!sheet) return getInitialData();

  var lastRow = sheet.getLastRow();
  if (lastRow >= 2) {
    var dates = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
    for (var i = 0; i < dates.length; i++) {
      var d = dates[i][0];
      if (d) {
        var iso = Utilities.formatDate(new Date(d), Session.getScriptTimeZone(), "yyyy-MM-01");
        if (iso === monthIso) {
          sheet.deleteRow(i + 2);
          break;
        }
      }
    }
  }

  recalculateAllChangeFormulas(sheet);
  SpreadsheetApp.flush();
  return getInitialData();
}

function recalculateAllChangeFormulas(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow >= 2) {
    sheet.getRange(2, 14).setValue(0);
    for (var r = 3; r <= lastRow; r++) {
      sheet.getRange(r, 14).setFormula("=M" + r + "-M" + (r - 1));
      formatStorageRow(sheet, r);
    }
  }
}

function formatStorageRow(sheet, r) {
  sheet.getRange(r, 1).setNumberFormat(DATE_FORMAT).setHorizontalAlignment("center").setFontColor("#CBD5E1");
  sheet.getRange(r, 2, 1, 12).setNumberFormat(RUPEE_FORMAT).setHorizontalAlignment("right");
  sheet.getRange(r, 14).setNumberFormat(CHANGE_FORMAT).setHorizontalAlignment("right").setFontWeight("bold");
  sheet.getRange(r, 15).setNumberFormat("@").setHorizontalAlignment("left").setFontColor("#94A3B8");

  var bg = (r % 2 === 0) ? "#0F172A" : "#141E33";
  sheet.getRange(r, 1, 1, 15).setBackground(bg).setFontFamily("Google Sans").setFontSize(9);
  sheet.getRange(r, 7).setBackground("#172033").setFontWeight("bold").setFontColor("#FACC15");
  sheet.getRange(r, 8).setFontColor("#C084FC");
  sheet.getRange(r, 12).setBackground("#0F2922").setFontWeight("bold").setFontColor("#34D399");
  sheet.getRange(r, 13).setBackground("#0C2B4E").setFontWeight("bold").setFontColor("#38BDF8");
  sheet.setRowHeight(r, 26);
}

function setupStorageSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.setSpreadsheetLocale("en_IN");
  ss.setSpreadsheetTimeZone("Asia/Kolkata");

  var sheet = ss.getSheetByName("Portfolio_Data");
  if (!sheet) {
    sheet = ss.insertSheet("Portfolio_Data", 0);
  }

  try {
    sheet.getDataRange().breakApart();
  } catch (e) {}

  var headers = [
    "Month",
    "HDFC Savings",
    "HDFC Deposits (FD/RD)",
    "SBI Savings",
    "SBI Deposits (FD)",
    "SBI PPF",
    "Total Bank",
    "EPF Balance",
    "Mutual Funds",
    "Gold",
    "Silver",
    "Total Market",
    "Total Wealth",
    "Monthly Change (\u20B9)",
    "Notes"
  ];

  sheet.getRange(1, 1, 1, 15).setValues([headers]);
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(1);
  sheet.getRange(1, 1, 1, 15)
    .setBackground("#0F172A")
    .setFontColor("#F8FAFC")
    .setFontFamily("Google Sans")
    .setFontSize(10)
    .setFontWeight("bold")
    .setHorizontalAlignment("center")
    .setVerticalAlignment("middle");
  sheet.setRowHeight(1, 38);

  if (sheet.getLastRow() < 2) {
    for (var i = 0; i < HISTORICAL_DATA.length; i++) {
      var r = i + 2;
      var row = HISTORICAL_DATA[i];
      sheet.getRange(r, 1).setValue(row[0]);
      sheet.getRange(r, 2).setValue(row[1]);
      sheet.getRange(r, 3).setValue(row[2]);
      sheet.getRange(r, 4).setValue(row[3]);
      sheet.getRange(r, 5).setValue(row[4]);
      sheet.getRange(r, 6).setValue(row[5]);
      sheet.getRange(r, 7).setFormula("=SUM(B" + r + ":F" + r + ")");
      sheet.getRange(r, 8).setValue(row[6]);
      sheet.getRange(r, 9).setValue(row[7]);
      sheet.getRange(r, 10).setValue(row[8]);
      sheet.getRange(r, 11).setValue(row[9]);
      sheet.getRange(r, 12).setFormula("=SUM(I" + r + ":K" + r + ")");
      sheet.getRange(r, 13).setFormula("=G" + r + "+H" + r + "+L" + r);
      if (i > 0) {
        sheet.getRange(r, 14).setFormula("=M" + r + "-M" + (r - 1));
      } else {
        sheet.getRange(r, 14).setValue(0);
      }
      sheet.getRange(r, 15).setValue(row[10]);
      formatStorageRow(sheet, r);
    }
  } else {
    recalculateAllChangeFormulas(sheet);
  }

  return sheet;
}

/**
 * UPDATES JUST THE NOTE FOR A SPECIFIC MONTH RECORD IN PORTFOLIO_DATA
 */
function updateRecordNote(monthIso, noteText) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Portfolio_Data");
  if (!sheet) return getInitialData();

  var ymTarget = monthIso.substring(0, 7);
  var lastRow = sheet.getLastRow();
  if (lastRow >= 2) {
    var dates = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
    for (var i = 0; i < dates.length; i++) {
      var d = dates[i][0];
      if (d) {
        var iso = Utilities.formatDate(new Date(d), Session.getScriptTimeZone(), "yyyy-MM");
        if (iso === ymTarget) {
          sheet.getRange(i + 2, 15).setValue(noteText || "");
          break;
        }
      }
    }
  }
  return getInitialData();
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Portfolio Web App")
    .addItem("Clean & Format Storage Sheet", "setupStorageSheet")
    .addToUi();
}