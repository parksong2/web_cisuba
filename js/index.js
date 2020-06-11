$(document).ready(function(){
    
    // 스크롤 한 번 하면 헤더 나타나게
    
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if ( scrollTop >= 100 ){
            $("header").fadeIn(400);
        } else {
            $("header").fadeOut(400);
        }
    });
    
    
    // 탭메뉴 회사소개/찾아오시는 길
    
    $("section.tab-menu .tab").click(function(){
        var tn = $(this).index();
        $("section.tab-menu .tab.sel").removeClass("sel");
        $(this).addClass("sel");
        $("section.tab-menu .tview.sel").removeClass("sel");
        $("section.tab-menu .tview").eq( tn ).addClass("sel");
    });
    
    
    // 파트너 신청
    
    $('.familyform').on('submit',function(Event){
        Event.preventDefault();
        var $ck1 = $('.check1').is(":checked");
        var $ck2 = $('.check2').val();
        var $ck3 = $('.check3').val();
        var $ck4 = $('.check4').val();
        var $ck5 = $('.check5').val();
        var $ck6 = $('.check6').val();
        

        if($ck1 == false){
            $('.alert-text').text('개인정보 처리방침에 동의해주시기 바랍니다.');
            $('.dimmedAlert').show();
            return;
        }else if($ck2 == 'none' || $ck2 == ''){
            $('.alert-text').text('업소(회사)명을 입력해주세요.');
            $('.dimmedAlert').show();
            return;
        }else if($ck3 == 'none' || $ck3 == ''){
            $('.alert-text').text('주소를 입력해주세요.');
            $('.dimmedAlert').show();
            return;
        }else if($ck4 == 'none' || $ck4 == ''){
            $('.alert-text').text('담당자명을 입력해주세요.');
            $('.dimmedAlert').show();
            return;
        }else if($ck5 == 'none' || $ck5 == ''){
            $('.alert-text').text('연락처를 입력해주세요.');
            $('.dimmedAlert').show();
            return;
        }else if($ck6 == 'none' || $ck6 == ''){
            $('.alert-text').text('이메일을 입력해주세요.');
            $('.dimmedAlert').show();
            return;
        }else{
            $('.familyform')[0].submit();
            
        };
    });
    
    $(".alert-bottom button").click(function(){
        $(".dimmedAlert").fadeOut(400);
    });
    
    // 뉴스 상하 롤링/슬라이더    
    
    var ln = 0;
    var height = 257;
    
    $(".btn-commu .next").click(function(){        
        ln++;
        $("section.community .list-wrap .list").stop().animate({
            top: -1 * height * ln
        });
        $("section.community .month .date").stop().animate({
            top: -1 * 22 * ln
        });
        checkNext();
    });
    
    $(".btn-commu .prev").click(function(){
        ln--;
        $("section.community .list-wrap .list").stop().animate({
            top: -1 * height * ln 
        });
        $("section.community .month .date").stop().animate({
            top: -1 * 22 * ln
        });
        checkNext();
    });
    
    function checkNext(){
        if ( ln == 0 ){
            $(".btn-commu .prev").fadeOut(100);
            $(".btn-commu .next").fadeIn(100);
        } else if ( ln == 3 ){
            $(".btn-commu .next").fadeOut(100);
            $(".btn-commu .prev").fadeIn(100);
        } else {
            $(".btn-commu .prev").fadeIn(100);
            $(".btn-commu .next").fadeIn(100);
        }
    }
    
});