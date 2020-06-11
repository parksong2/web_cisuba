$(document).ready(function(){
    
    $("header").load("header.html");
    $("footer").load("footer.html", function(){
        
        $("footer .etc:nth-child(1)").click(function(){
            $(".bg-wrap").fadeIn(400);
            $(".emailwarning").fadeIn(400);
        });
        
        $(".emailwarning .close").click(function(){
            $(".bg-wrap").fadeOut(400);
            $(".emailwarning").fadeOut(400);
        });
        
    });
    
});