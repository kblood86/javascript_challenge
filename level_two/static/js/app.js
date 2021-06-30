// data
var tableData = data;
// button
var button = d3.select("#filter-btn");
// table body
var tbody = d3.select("tbody");

// sightings for each column
tableData.forEach(function(ufoSighting) {
  // append row
  var row = tbody.append("tr");

  Object.entries(ufoSighting).forEach(function([key, value]) {
    // Append cell in row
    var cell = row.append("td");
    cell.text(value);
  });
});


button.on("click", function() {
    // prevent reload 
    d3.event.preventDefault();
    tbody.html("");

    // get input
    var inputElement = d3.select("#input");
    // value property
    var inputValue = inputElement.property("value");
    
    // Filter to selected input
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    

    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append row
    var row = tbody.append("tr");
    
    Object.entries(selections).forEach(function([key, value]) {
        
        // Append cell
        var cell = row.append("td");
        cell.text(value);
    });
});
});
  