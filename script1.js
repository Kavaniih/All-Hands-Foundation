const caroImages = document.querySelectorAll(".carou");

caroImages.forEach((caro) => {
  const caroIm = caro.querySelectorAll(".cars");

  let scrollNum = 0;

  caroIm.forEach((img, ind) => {
    img.style.transform = `translateX(${100 * ind}%)`;
  });

  setInterval(() => {
    if (scrollNum >= 3) {
      scrollNum = 0;
    } else {
      scrollNum++;
    }
    // caro.querySelectorAll(".overlay").getAnimation
    caroIm.forEach((img, ind) => {
      img.style.transform = `translateX(${100 * (ind - scrollNum)}%)`;
    });
  }, 3000);
});
