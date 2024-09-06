var countDownDate = new Date();
countDownDate = new Date(countDownDate.getFullYear() + 1, countDownDate.getMonth() - 6 , 1);

var x = setInterval(function () {
    var now = new Date();
    var diff = countDownDate - now;

    var months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / (1000));

    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
} , 1000)

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