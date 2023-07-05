let frames = document.querySelectorAll(".image-frame");

window.addEventListener("scroll", function () {
  frames.forEach((element) => {
    let rect = element.getBoundingClientRect();
    if (rect.left < 0) {
      element.querySelector(".image").style.transform = `scale3d(${
        (element.offsetWidth + element.getBoundingClientRect().left) /
        element.offsetWidth
      }, 1, 1)`;
      console.log(
        "change detected " +
          `${element.offsetWidth + element.getBoundingClientRect().left} ${
            rect.left
          }`
      );
    } else {
      element.querySelector(".image").style.transform = "scale3d(1,1,1)";
    }
  });
});
