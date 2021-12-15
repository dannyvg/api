var table = document.createElement('table');
    // head bestaand uit room en stuff

    
    var th = document.createElement('th');
    var th2 = document.createElement('th');
    var td = document.createElement('td');
  

    var text1 = document.createTextNode('ID');
    var text2 = document.createTextNode('Name');
    th.appendChild(text1);
    th2.appendChild(text2)


    table.appendChild(th);
    table.appendChild(th2);


    
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == XMLHttpRequest.DONE){
    var result = JSON.parse(xhr.responseText);
    // console.log(result);
    var key = result;
    var data = result[0];
    var meta = result[1];
    
    console.log(meta);

    function generateTable() {
      
      Object.keys(data).forEach((element) => {
        var tr = document.createElement('tr');
        var array2 = data[element];

    
        Object.keys(array2).forEach((element2) => {
          var td = document.createElement('td');
          td.innerHTML = array2[element2];
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });
      document.body.appendChild(table);
    }
    generateTable();

    function generateButton() {
      var nummer = meta.total_pages;
      for (let index = 1; index <= nummer; index++) {
        var button = document.createElement('button');
        var buttonText = document.createTextNode(index);

        button.appendChild(buttonText);
        document.body.appendChild(button);
      }
    }
    generateButton();
  }

}

      
xhr.open('GET', 'http://localhost/api-v2/json.php', true);
xhr.send(null);

