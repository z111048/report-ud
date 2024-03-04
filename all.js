// 一個幫助函數來添加單元格，並設置內容和類別
function addCell(row, index, content, className) {
  var cell = row.insertCell(index);
  cell.innerHTML = content === 0 || content ? content : "";
  cell.className = className;
}

function fillTable(data) {
  var table = document.getElementById("myTable"); // 假設您的表格有一個ID為'myTable'
  data.forEach(function (item, index) {
    var row = table.insertRow(-1); // 在表格末尾插入一行
    row.insertCell(0).innerHTML = item["案件編號"] || "";
    row.insertCell(1).innerHTML = item["案名"] || "";
    row.insertCell(2).innerHTML = item["承辦人"] || "";
    row.insertCell(3).innerHTML = item["適用程序"] || "";
    row.insertCell(4).innerHTML = item["案件階段"] || "";
    addCell(row, 5, item["目前辦理進度"], "align-left");
    row.insertCell(6).innerHTML = item["備註"] || "";

    // row.insertCell(7).innerHTML = item["掛件日期"] || "";
    // row.insertCell(8).innerHTML = item["幹事會會議日"] || "";
    // row.insertCell(9).innerHTML = item["會議紀錄發文日"] || "";
    // row.insertCell(10).innerHTML = item["審查流程天數"] || "";
    // row.insertCell(11).innerHTML = item["退補正日數"] || "";
    // row.insertCell(12).innerHTML = item["會辦日數"] || "";
    // row.insertCell(13).innerHTML = item["實際工作天數"] || "";
    // row.insertCell(14).innerHTML = item["都審興革後規定天數17-27天"] || "";
    addCell(row, 7, item["掛件日期"], "col7-d");
    addCell(row, 8, item["幹事會會議日"], "col8-d");
    addCell(row, 9, item["會議紀錄發文日"], "col9-d");
    addCell(row, 10, item["審查流程天數"], "col10-d");
    addCell(row, 11, item["退補正日數"], "col11-d");
    addCell(row, 12, item["會辦日數"], "col12-d");
    addCell(row, 13, item["實際工作天數"], "col13-d");
    addCell(row, 14, item["都審興革後規定天數17-37天"], "col14-d");

    // row.insertCell(15).innerHTML = item["掛件日期.1"] || "";
    // row.insertCell(16).innerHTML = item["委員會會議日"] || "";
    // row.insertCell(17).innerHTML = item["會議紀錄發文日.1"] || "";
    // row.insertCell(18).innerHTML = item["審查流程天數.1"] || "";
    // row.insertCell(19).innerHTML = item["退補正日數.1"] || "";
    // row.insertCell(20).innerHTML = item["會辦日數.1"] || "";
    // row.insertCell(21).innerHTML = item["實際工作天數.1"] || "";
    // row.insertCell(22).innerHTML = item["都審興革後規定天數17-37天"] || "";
    addCell(row, 15, item["掛件日期.1"], "col15-d");
    addCell(row, 16, item["委員會會議日"], "col16-d");
    addCell(row, 17, item["會議紀錄發文日.1"], "col17-d");
    addCell(row, 18, item["審查流程天數.1"], "col18-d");
    addCell(row, 19, item["退補正日數.1"], "col19-d");
    addCell(row, 20, item["會辦日數.1"], "col20-d");
    addCell(row, 21, item["實際工作天數.1"], "col21-d");
    addCell(row, 22, item["都審興革後規定天數17-37天"], "col22-d");

    // row.insertCell(23).innerHTML = item["掛件日期.2"] || "";
    // row.insertCell(24).innerHTML = item["核定日期"] || "";
    // row.insertCell(25).innerHTML = item["核定流程天數"] || "";
    // row.insertCell(26).innerHTML = item["退補正日數.2"] || "";
    // row.insertCell(27).innerHTML = item["會辦日數.2"] || "";
    // row.insertCell(28).innerHTML = item["實際工作天數.2"] || "";
    // row.insertCell(29).innerHTML = item["全案總工作日數"] || "";
    // row.insertCell(30).innerHTML = item["都審興革後規定總天數34-64天"] || "";
    addCell(row, 23, item["掛件日期.2"], "col23-d");
    addCell(row, 24, item["核定日期"], "col24-d");
    addCell(row, 25, item["核定流程天數"], "col25-d");
    addCell(row, 26, item["退補正日數.2"], "col26-d");
    addCell(row, 27, item["會辦日數.2"], "col27-d");
    addCell(row, 28, item["實際工作天數.2"], "col28-d");
    addCell(row, 29, item["全案總工作日數"], "col29-d");
    addCell(row, 30, item["都審興革後規定總天數34-64天"], "col30-d");
  });
}

// 假設您的JSON數據文件的URL
var jsonDataUrl = "./data.json"; // 請替換為實際的URL路徑

// 用於從服務器加載JSON數據的函數
function loadJsonData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => fillTable(data))
    .catch((error) => console.error("Error loading JSON data:", error));
}

// 在頁面加載時調用加載數據的函數
window.onload = function () {
  loadJsonData(jsonDataUrl);
};
