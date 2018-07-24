$(document).ready(function(){
    
    $(".nav-link.active").css("background-color","green");
    //$(".nav-pills.nav-link.active, .nav-pills.show>.nav-link").css("background-color","green")
    $(window).scroll(function(){



        if($(document).scrollTop()> 50){
            
            $(".navbar").css("background-color","black");
            $(".nav-link.active").css("background-color","white");
            $(".nav-link").css("background-color","transparent")
            
        }
        else{
            $(".navbar").css("background-color","transparent");
            $(".nav-link.active").css("background-color","green");
            
        }
    })
})


// Add smooth scrolling on all links inside the navbar

$("#navbar-menu a").on('click',function(event){
    if(this.hash!==""){
        event.preventDefault();

        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

        $('html,body').animate({
            scrollTop:$(hash).offset().top
        },800,function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash=hash;
        });
    }
}



);