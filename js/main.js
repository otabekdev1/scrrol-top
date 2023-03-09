let calcScrollValue = () => {
  let scrollProgres = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgres.style.display = "grid";
  } else {
    scrollProgres.style.display = "none";
  }
  scrollProgres.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  scrollProgres.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// const dasdas =
// pos > 100
//   ? (scrollProgres.style.display = "grid")
//   : (scrollProgres.style.display = "none");
