$(function(){
    var webWishlistValue = parseInt($('.header-web .wishlist-counter').html());
    var webShoppingValue = parseInt($('.header-web .shopping-basket-counter').html());

    var mobWishlistValue = parseInt($('.header-mob .wishlist-counter').html());
    var mobShoppingValue = parseInt($('.header-mob .shopping-basket-counter').html());

    var limit = 99;

    if(webWishlistValue > limit){
        $('.header-web .wishlist-counter').html('99+');
    }

    if(webShoppingValue > limit){
        $('.header-web .shopping-basket-counter').html('99+');
    }

    if(mobWishlistValue > limit){
        $('.header-mob .wishlist-counter').html('99+');
    }

    if(mobShoppingValue > limit){
        $('.header-mob .shopping-basket-counter').html('99+');
    }

    $('.add-wishlist').click(function(e){
        $(this).each(function( wishlist ) {
            e.preventDefault();
            $(this).children('img.add-wishlist-img').hide();
            $(this).children('img.add-wishlist-red').show();
          
        
    
        });

        return false
    });

    $('.add-wishlist-red').click(function(){

        $(this).each(function( wishlist ) {
            if($('.add-wishlist-img').hide()!==false){
                $('.add-wishlist-red').hide();
                $('.add-wishlist-img').show();
            }
          
        });

        return false
    });
    
    
    $('.add-shopping').click(function(){
        $(this).each(function( shopping ) {
            $(this).children('img.add-shopping-img').hide();
            $(this).children('img.add-shopping-dark').show();
          
        
    
        });

        return false
    });

    $('.add-shopping-dark').click(function(){
        $(this).each(function( wishlist ) {
            if($('.add-shopping-img').hide()!==false){
                $('.add-shopping-dark').hide();
                $('.add-shopping-img').show();
            }
          
        });

        return false
    });
    
    $('.collection-side-text').mouseover(function(){
        $('.collection-side-img').stop(true).animate({
            'marginLeft': '20px'
        }, 200);
       return false
    });
    
    $('.collection-side-text').mouseout(function(){
        $('.collection-side-img').stop(true).animate({
            'marginLeft': '0px'
        }, 200);
       return false
    });

    $('.see-more-side').mouseover(function(){
        $('.see-more-side').stop(true).animate({
            'marginRight': '-20px'
        }, 200);
        return false
    });

    $('.see-more-side').mouseout(function(){
        $('.see-more-side').stop(true).animate({
            'marginRight': '0px'
        }, 200);
        return false
    });


})




  