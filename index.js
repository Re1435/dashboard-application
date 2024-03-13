// let reportsList = [
//   { id: 1, item: "Company Snapshot" },
//   { id: 2, item: "Open Order Report" },
//   { id: 3, item: "Inventory Snap Shot" },
//   { id: 4, item: "Cut & Sold Lookup" },
//   { id: 5, item: "Balance to Sell Sales Summary" },
//   { id: 6, item: "Open Orders to Pick" },
//   { id: 7, item: "Period Comparison Report" },
//   { id: 8, item: "SR Availability" },
//   { id: 9, item: "Sales Forecast Report" },
//   { id: 10, item: "Detailed Period Comparison Report" },
//   { id: 11, item: "Style Cost Report" },
//   { id: 12, item: "Style Cost Report(Sales Persons)" },
//   { id: 13, item: "Shopping/Receiving Log" },
//   { id: 14, item: "Receiving Summary" },
//   { id: 15, item: "Style Availability By Date" },
//   { id: 16, item: "Purchase Order Report" },
//   { id: 17, item: "Shopping Report" },
//   { id: 18, item: "Traffic Report" },
//   { id: 19, item: "Image Cut & Sold Report" },
//   { id: 20, item: "Style Sheets" },
// ];

// let reportListElement = document.getElementById("reportsList");

// function createListItemsAndAppend(reportsList) {
//   let liElement = document.createElement("li");
//   for (let i = 0; i < reportsList.length; i++) {
//     const { id, item } = reportsList[i];

//     liElement.id = id;
//     liElement.textContext = item;
//     liElement.classList.add("report-item");
//     console.log(liElement);
//     reportListElement.appendChild(liElement);
//   }
// }
// createListItemsAndAppend(reportsList);
let reportsList = [
  { id: 1, item: "Company Snapshot" },
  { id: 2, item: "Open Order Report" },
  { id: 3, item: "Inventory Snap Shot" },
  { id: 4, item: "Cut & Sold Lookup" },
  { id: 5, item: "Balance to Sell Sales Summary" },
  { id: 6, item: "Open Orders to Pick" },
  { id: 7, item: "Period Comparison Report" },
  { id: 8, item: "SR Availability" },
  { id: 9, item: "Sales Forecast Report" },
  { id: 10, item: "Detailed Period Comparison Report" },
  { id: 11, item: "Style Cost Report" },
  { id: 12, item: "Style Cost Report(Sales Persons)" },
  { id: 13, item: "Shopping/Receiving Log" },
  { id: 14, item: "Receiving Summary" },
  { id: 15, item: "Style Availability By Date" },
  { id: 16, item: "Purchase Order Report" },
  { id: 17, item: "Shopping Report" },
  { id: 18, item: "Traffic Report" },
  { id: 19, item: "Image Cut & Sold Report" },
  { id: 20, item: "Style Sheets" },
];

let reportListElement = document.getElementById("reportsList");

function createListItemsAndAppend(reportsList) {
  for (let i = 0; i < reportsList.length; i++) {
    const { id, item } = reportsList[i];
    let liElement = document.createElement("li");
    liElement.id = id;
    liElement.textContent = item;
    liElement.classList.add("report-item");
    liElement.addEventListener("click", () => {
      console.log(`Clicked on: ${item}`);
      // Add your click event logic here
    });
    reportListElement.appendChild(liElement);
  }
}

createListItemsAndAppend(reportsList);
