$(document).ready(function(){
    //$('html').offset().top;
$( window ).resize(function() {
  //console.log($(window).width()+15);
    var windowScreen=$(window).width()+15;
    if (windowScreen>=850) {
        $("#header-buttons-mobile").hide();
    };
  
});

    $(window).scroll(function(event){    
    	var y = $(this).scrollTop();
    	//console.log(y);
    	if(y>=32){
    		$('#hand-with-phone').addClass('moveUp');
    	}
    	if(y>=450){
    		//$('.feature-icon').addClass('zoomIn'); 
            //$('.feature-icon').addClass('fadeIn'); 
    	}  	
    });
   
   
   $("#mobile-menu").click(function(){
        $( "#header-buttons-mobile" ).toggle( 0.2 );
    }); 
});