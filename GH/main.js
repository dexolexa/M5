let card = document.getElementById("card");
let searchValue = document.getElementById("searchValue");
let button = document.getElementById("button");
let start = document.getElementById("start");
let load = document.getElementById("load");
let url = "https://api.github.com/users/";
let dataCard = NaN;
async function getCard() {
  start.classList.add("none");
  load.classList.remove("none");
  card.classList.add("none");

  let response = await fetch(
    `https://api.github.com/users/${searchValue.value}`
  );
  if (response.ok) {
    dataCard = await response.json();
    generateCard(dataCard);
  }
  else{
    start.classList.remove("none");
  }
  load.classList.add("none");
  
  searchValue.value = "";

}
button.addEventListener("click", getCard);
function generateCard(data) {
    card.innerHTML = `
    <img src='${data.avatar_url}' />
    <h1>${data.login}</h1>
    <nav>
      <div>
       
        <i class="fas fa-bookmark"></i>
        <span>${data.bio}</span>
      </div>
      <div>
        <i class="fas fa-globe-americas"></i>
        <span>${data.location}</span>
      </div>
      <div>
        <i class="fas fa-wheelchair"></i>
        <span>Created at ${data.created_at}</span>
      </div>

    </nav>
    <a href=${data.url}>Profile</a>
    `;
    card.classList.remove("none");
}
