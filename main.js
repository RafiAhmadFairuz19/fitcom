$(document).ready(function() {
    function updateContainerClass() {
      if ($(window).width() < 1200) {
     
        $('#promo.container').removeClass('container');
        $('#carouselExampleIndicators.container-md').removeClass('container-md');
        $('#carousel-dalam.rounded-4').removeClass('rounded-4');
  
       
        $('.promo').addClass('container-fluid');
      } else {
        $('#carousel-dalam').addClass('rounded-4');
        $('#carouselExampleIndicators').addClass('container-md');
        $('.promo.container-fluid').removeClass('container-fluid')
        $("#promo").addClass('container');
      }
    }
  
   
    updateContainerClass();
  
    $(window).resize(function() {
      updateContainerClass();
    });
  });
  


