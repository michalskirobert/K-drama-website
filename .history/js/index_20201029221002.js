window.onscroll= (e) => {
  const header = document.querySelector("header");

  if (window.innerHeight + 140 + window.scrollY >= document.body.offsetHeight) {
    header.style.display = "none";
  } else {
    header.style.display = "flex";
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