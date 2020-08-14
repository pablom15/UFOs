// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        let row = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
            }
        );
    });
}


function handleClick(){
    // Save the element, value, and id of the filter that was changed
  let date = d3.select("#datetime").property("value");
  let city = d3.select("#city").property("value");
  let state = d3.select("#state").property("value");
  let country = d3.select("#country").property("value");
  let shape = d3.select("#shape").property("value");
  let filteredData = tableData

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object

  if (date){
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  if (city){
    filteredData = filteredData.filter(row => row.city === city);
  }

  if (state){
    filteredData = filteredData.filter(row => row.state === state);
  }

  if (country){
    filteredData = filteredData.filter(row => row.country === country);
  }

  if (shape){
    filteredData = filteredData.filter(row => row.shape === shape);
  }

  // Call function to apply all filters and rebuild the table
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
