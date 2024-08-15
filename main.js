$(document).ready(function() {
    function updateContainerClass() {
      if ($(window).width() < 1200) {
     
        $('#promo.container').removeClass('container');
  
       
        $('.promo').addClass('container-fluid');
      } else {
       
        $('.promo.container-fluid').removeClass('container-fluid')
        $("#promo").addClass('container');
      }
    }
  
   
    updateContainerClass();
  
    
    $(window).resize(function() {
      updateContainerClass();
    });
  });
  


