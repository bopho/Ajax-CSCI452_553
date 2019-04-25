// call ajax
var ajax = new XMLHttpRequest();
var method = "GET";
var url = "booklist.php";


ajax.open(method, url, true);
// sendindg ajax request
ajax.send();

// receiving response from booklist.php
ajax.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    // converting JSON back to array
    var data = JSON.parse(this.responseText);
    console.log(data);// for debugging

    var html = "";
    //loop through books
    for (var i =0; i<data.length; i++){
      var title = data[i].title;
      var F_Name = data[i].F_Name;
      var L_Name = data[i].L_Name;
      var bookYear = data[i].bookYear;
      var categoryID = data[i].categoryID;
      var CategoryName = data[i].CategoryName;
      var price = data[i].price;

      //append as html
      html += "<tr class='book-details'>";
        html += "<td id='book-title'>" + title + "</td>";
        html += "<td class='book-author'>" + F_Name + "</td>";
        html += "<td class='book-author'>" + L_Name + "</td>";
        html += "<td id='book-Year'>" + bookYear + "</td>";
        html += "<td id='book-categoryID'>" + categoryID + "</td>";
        html += "<td id='book-categoryName'>" + CategoryName + "</td>";
        html += "<td id='book-price'>"+ price + "</td>";
      html += "</tr>";
    }

    document.getElementById("data").innerHTML = html;
  }
}
