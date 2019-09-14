var url = "/*ここにURLを入力*/";

fetch(url , { headers: { 'X-API-KEY': '/*ここにAPIキーを入力*/' }
})
  .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        var json = JSON.stringify(myJson.contents, null , "\t");
        var elem = document.getElementById("news");
        elem.innerText = json; 

    })