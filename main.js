var dolphinMakeBtn = document.querySelector('#make-dolphin');
var cardContainer = document.querySelector('#card-holder');
var dolphinName = document.querySelector('#name');
var dolphinBio = document.querySelector('#bio');
var dolphinColor = document.querySelector('#color');

dolphinMakeBtn.addEventListener('click', createCard);

function createCard() {
  var images = ['dolphin1', 'dolphin3', 'dolphin4', 'dolphin5']
  var index = Math.floor(Math.random() * 3)
  var dolphin = new Dolphin(dolphinName.value, dolphinBio.value, dolphinColor.value)
  cardContainer.insertAdjacentHTML('afterbegin',`
  <article style='background-color:${dolphinColor.value}' class='dolphin-card'>
  <img src='./assets/${images[index]}.jpg' class='avatar-icon'/>
  <h4>${dolphin.name}</h4>
  <p class='card-body'>${dolphin.bio}</p>
  </article>
`)
}
