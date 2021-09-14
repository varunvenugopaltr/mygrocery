var btn = document.getElementById("btn")
var pic = document.getElementById("pic")



function ajax() {
  btn.style.display = "none"
  pic.style.display = "none"

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);
          console.log(response);
          var grocerylist = response.items;
          console.log(grocerylist);



          var output = "";
          output += `<tr>`
          output += `<th>Serial No</th>`;
          output += `<th>Name</th>`;
          output += `<th>Quantity</th>`;
          output += `<th>Units</th>`;
          output += `<th>Department</th>`;
          output += `<th>Notes</th>`;
          output += `<tr>`


          for (i = 0; i < grocerylist.length; i++) {

              output += `
              <tr> 
              <td>${grocerylist[i].slno}</td>
              <td>${grocerylist[i].name}</td>
              <td>${grocerylist[i].qty}</td>
              <td>${grocerylist[i].unit}</td>
              <td>${grocerylist[i].dept}</td>
              <td>${grocerylist[i].note}</td>
            </tr>`;


          }
          console.log(output);
          document.getElementById("body").innerHTML = output;

      }
  }
  xhttp.open("GET", "itemdetails.json", true);
  xhttp.send();
}


