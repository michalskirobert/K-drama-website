window.onscroll= () => {
  const header = document.querySelector("header");

  if (document.documentElement.scrollTop > 80) {
    header.style.backgroundImage = "transparent";
  } else {
    header.hasOwnProperty;
  }
}

function sendButton() {
  let button = document.getElementById("button");
  let comm = document.getElementById("hidden__communicate");
  if ((comm.style.display = "none")) {
    comm.style.display = "block";
    comm.innerHTML = "Your request has been sent";
    comm.style.marginBottom ="25px";
    button.style.color = "white";
    button.style.background = "green";
  } else {
  }
}
