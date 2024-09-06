function playVid() {
    let video = document.getElementById("video");
  
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  }

  document.getElementById("fullyear").innerHTML = new Date().getFullYear();

  var forms = document.querySelectorAll(".needs-validation");

// Loop over them and prevent submission
Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
});