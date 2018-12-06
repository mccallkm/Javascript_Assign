// from data.js
var tableData = data;

// YOUR CODE HERE!
// Add table data to html file 
d3.select("tbody")
  .selectAll("tr")
  .data(data)
  .enter()
  .append("tr")
  .html(function(d, i) {
    return `<td>${d.datetime}</td><td>${d.city}</td><td>${d.state}</td>
    <td>${d.country}</td><td>${d.shape}</td><td>${d.durationMinutes}
    </td><td>${d.comments}</td>`;
  });
  
function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue, date;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  date = document.getElementById("datetime")

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
