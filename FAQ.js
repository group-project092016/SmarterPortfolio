
  $(document).ready(function(){
    /*prevent page from scrolling up automatically when links(questions) are clicked*/
    $(".questions").click(function(e){
      e.preventDefault();           
    });

    $(".flip").click(function(){
        $(this).next(".panel").slideToggle("fast"); //slide next "panel" below "flip"
    });
  });
