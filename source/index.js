(function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://content.guardianapis.com/search?api-key=f1fbd560-452a-4eb0-abbc-6cff7c049f11&show-fields=thumbnail');
  xhr.onload = function(data) {
    var results = JSON.parse(xhr.response).response.results;
    renderTitles(results);
  };
  xhr.send();
})();

function renderTitles(results) {
  results.forEach(function(res) {
    var newElement = document.createElement("div");
    newElement.classList.add("col-sm");
    newElement.innerHTML=  `
      <a href="/show?` + res.id + `" class="card mt-2" style="width: 18rem;">
        <img class="card-img-top" src=" ` + res.fields.thumbnail + ` " alt="Card image cap">
        <div class="card-body">
          <p class="card-text"> ` + res.webTitle + `</p>
        </div>
      </a>
    `;
    document.querySelector(".row").append(newElement);
  });
};
