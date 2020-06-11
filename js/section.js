$(document).ready(function(){
    
    // 헤더 처음부터 보이게
    
    $("header").css("display", "block");
    var url = location.href;
    var html = url.substr( url.lastIndexOf("/") + 1 );
    if (html=="privacy" || html=="service.html"){
        $("nav .gnb").eq(0).addClass("sel");
    }
    
});

//    $("section.privacy-tab .tab").click(function(){
//        
//        var tn = $(this).index();
//        
//        $("section.privacy-tab .tab.sel").removeClass("sel");
//        $(this).addClass("sel");
//        
//        $("section.privacy-tab .tview.sel").removeClass("sel");
//        $("section.privacy-tab .tview").eq( tn ).addClass("sel");
//        
//    });