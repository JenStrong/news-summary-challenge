(function(){
  var xhr = new XMLHttpRequest();
  var id = document.URL.split("?")[1];
  xhr.open('GET', 'https://content.guardianapis.com/' + id + '?api-key=f1fbd560-452a-4eb0-abbc-6cff7c049f11&show-fields=body' );
  xhr.onload = function(data) {
    var content = JSON.parse(xhr.response).response.content
    renderBody(content);

  };
  xhr.send();
})();

function renderBody(content){
  var header = "<h2>" + content.webTitle + "</h2>"
  document.querySelector(".container").innerHTML = header + content.fields.body;
};
