$(document).ready(function(){
    
    // join page
    
//    $("input[type=submit]").click(function(Event){
//        Event.preventDefault();
//        var $ck1 = $("input[name=check1]").is(":checked");
//        var $ck2 = $("input[name=check2]").val();
//        var $cs_email = $("input[name=cs_email]").val();
//        var $cs_pw = $("input[name=cs_pw]").val();
//        var $cs_pw2 = $("input[name=cs_pw2]").val();
//        var $cs_id = $("input[name=cs_id]").val();
//
//        if($ck1 == false){
//            $('.alert-text').text('이용약관에 동의해주시기 바랍니다.');
//            $('.dimmedAlert').fadeIn(400);
//            return;
//        }else if($ck2 == 'none'){
//            $('.alerttext').text('개인정보 수집에 동의해주시기 바랍니다.');
//            $('.dimmedAlert').fadeIn(400);
//            return;
//        }else if($cs_email == 'none' || $ck3 == ''){
//            $('.alert-text').text('이메일 주소를 입력해주세요.');
//            $('.dimmedAlert').fadeIn(400);
//            return;
//        }else if($cs_pw == 'none' || $ck4 == ''){
//            $('.alert-text').text('비밀번호를 입력해주세요.');
//            $('.dimmedAlert').fadeIn(400);
//            return;
//        }else if($cs_pw2 == 'none' || $ck5 == ''){
//            $('.alert-text').text('비밀번호를 다시 입력해주세요.');
//            $('.dimmedAlert').fadeIn(400);
//            return;
//        }else if($cs_id == 'none' || $ck6 == ''){
//            $('.alert-text').text('이름(업소명)을 입력해주세요.');
//            $('.dimmedAlert').fadeIn(400);
//            return;
//        }
//    });
//    
//    $(".alert-bottom button").click(function(){
//        
//        $(".dimmedAlert").fadeOut(400);
//        
//    });
    		
	$("input[type=submit]").click(function(){
		
        var cs_email = $("input[name=cs_email]").val().trim();
		var cs_pw = $("input[name=cs_pw]").val().trim();
        var cs_pwpw = $("input[name=cs_pwpw]").val().trim();
		var cs_id = $("input[name=cs_id]").val().trim();
        var $check1 = $(".check1").is(":checked");
        var $check2 = $(".check2").is(":checked");
		
        if (cs_email.length<=10){
            $('.alert-text').text('이메일 주소를 입력해주세요.');
            $('.dimmedAlert').fadeIn(400);
        } else if (cs_pw.length<=6){
            $('.alert-text').text('비밀번호를 입력해주세요.');
            $('.dimmedAlert').fadeIn(400);
        } else if (cs_pwpw.length<=6){
            $('.alert-text').text('비밀번호를 다시 입력해주세요.');
            $('.dimmedAlert').fadeIn(400);
        } else if (cs_id.length<=1){
			$('.alert-text').text('이름(업소명)을 입력해주세요.');
            $('.dimmedAlert').fadeIn(400);
		} else if ( $check1 == false ){
            $('.alert-text').text('이용약관에 동의해주세요.');
            $('.dimmedAlert').fadeIn(400);
            return;
        } else if ( $check2 == false ){
            $('.alert-text').text('개인정보 처리방침에 동의해주세요.');
            $('.dimmedAlert').fadeIn(400);
            return;
        }
        
        //checkbox 해결 안됨 > 머리아프니까 나중에 하자.
        
	});
    
    $(".alert-bottom button").click(function(){
        
        $(".dimmedAlert").fadeOut(400);
        
    });
    
});