$(window).scroll(function(){
    if($(this).scrollTop() >= 450){
        $("#navbar").addClass("noTransparent")
    }
    else{
        $("#navbar").removeClass("noTransparent")
    }
})

$(document).ready(function(){
    $(".circle").circleProgress({
        startAngle: -Math.PI / 2,
        fill :"#0575e6"
    }).on('circle-animation-progress', function(event , progress , stepValue){
        $(this).find('span').html(Math.round(stepValue * 100) +  "%")
    })
})

function validate() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
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
}
validate();

document.getElementById("FullYear").innerHTML = new Date().getFullYear()