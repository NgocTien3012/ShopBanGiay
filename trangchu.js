var anh = ["img/banner.jpg", "img/banner1.jpg", "img/banner2.jpg"];
var index = 0;
function prev() {
  index--;
  if (index < 0) index = anh.length - 1;
  document.getElementById("anh").src = anh[index];
}
function next() {
  index++;
  if (index == anh.length) index = 0;
  document.getElementById("anh").src = anh[index];
}
setInterval(next, 49000);

function changeImage(number) {
  const changeImage = document.getElementById(`sp${number}`);
  changeImage.addEventListener("mouseover", function () {
    changeImage.src = `img/sp${number}${number}.jpg`;
  });
  changeImage.addEventListener("mouseout", function () {
    changeImage.src = `img/sp${number}.jpg`;
  });
}

window.onload = function () {
  for (let i = 1; i < 9; i++) {
    changeImage(i);
  }
};
