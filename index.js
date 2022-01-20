let clock = 0;

function turnCircleClick() {
  if (clock % 2 == 0) {
    document.getElementsByClassName("turn-circle")[0].style.background =
      "dimgray";
    document.getElementsByClassName("turn-circle")[0].style.float = "left";

    document.getElementsByClassName("turn-bg")[0].style.background =
      "lightgray";

    document.getElementById("dollar-1").innerText = "$199.99";
    document.getElementById("dollar-2").innerText = "$249.99";
    document.getElementById("dollar-3").innerText = "$399.99";
  } else {
    document.getElementsByClassName("turn-circle")[0].style.background =
      "lightgray";
    document.getElementsByClassName("turn-circle")[0].style.float = "right";
    document.getElementsByClassName("turn-bg")[0].style.background = "#0a0a6d";

    document.getElementById("dollar-1").innerText = "$19.99";
    document.getElementById("dollar-2").innerText = "$24.99";
    document.getElementById("dollar-3").innerText = "$39.99";
  }
  clock++;
}
