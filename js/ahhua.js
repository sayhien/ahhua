$(document).ready(function () {

   
  
 /* how to order list */
/* place-order */    

  

    
    /*  waypoint for select images  */

    $('.js-wp-crab').waypoint(function(direction){
        $('.js-wp-crab').addClass('animated hinge');
    },{
        offset:'180px;'
    })
    
    /* js-wp-ppl */
    
     $('.js-wp-ppl').waypoint(function(direction){
        $('.js-wp-ppl').addClass('animated tada');
    },{
        offset:'150px;'
    })
     
     /* js-wp-ppl-2 */
    
     $('.js-wp-ppl-2').waypoint(function(direction){
        $('.js-wp-ppl-2').addClass('animated fadeInUp');
    },{
        offset:'250px;'
    })
     
     /* js-wp-pic */
    
     $('.js-wp-pic').waypoint(function(direction){
        $('.js-wp-pic').addClass('animated fadeIn');
    },{
        offset:'200px;'
    })
     
     /* js-wp-cart */
     
      $('.js-wp-cart').waypoint(function(direction){
        $('.js-wp-cart').addClass('animated bounceIn');
    },{
        offset:'320px;'
    })
      
      

    /* swinging logo */
    
   var logo = 'img#logo'; 
    
    $(logo).mouseover(function(){
        $(logo).addClass('swing animated');
    });
    
    $(logo).mouseout(function(){
        $(logo).removeClass('swing animated');
    });
    
    /* lazy image */
    
    $('img.lazy').lazyload({

    effect : "fadeIn"
    });
    
    
}); /* end document */