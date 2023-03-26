function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("Bulbon")) {
      image.src = "Bulboff.jpg";
    } else {
      image.src = "Bulbon.jpg";
    }
  }