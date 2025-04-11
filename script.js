var heads = 0;
var tails = 0;


function clickFlip() {

  var isHeads = Math.floor(Math.random() * 2) === 0;


  if (isHeads) {
    document.getElementById("heads-img").style.display = "block";
    document.getElementById("tails-img").style.display = "none";
    document.getElementById("result").textContent = "Heads";
    heads++;
  } else {
    document.getElementById("tails-img").style.display = "block";
    document.getElementById("heads-img").style.display = "none";
    document.getElementById("result").textContent = "Tails";
    tails++;
  }
}

document.getElementById("flip-button").addEventListener("click", clickFlip);
