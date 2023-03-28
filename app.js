function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("Bulbon")) {
      image.src = "assets/images/Bulboff.jpg";
    } else {
      image.src = "assets/images/Bulbon.jpg";
    }
  }