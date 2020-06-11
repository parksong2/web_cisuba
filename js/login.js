$(document).ready(function(){
    
    // login page
    
    var cs_id = localStorage.getItem("cs_id");
	
	$("input[name=cs_id]").val(cs_id);	
	$("input[type=submit]").click(function(){
		
		cs_id = $("input[name=cs_id]").val();
		localStorage.setItem("cs_id", cs_id);
		
		var cs_id = $("input[name=cs_id]").val().trim();	
		var cs_pw = $("input[name=cs_pw]").val().trim();
		
		if (cs_id.length<=3){
			$('.alert-text').text('제휴사 아이디를 입력해주세요.');
            $('.dimmedAlert').fadeIn(400);
		} else if (cs_pw.length<=6){
			$('.alert-text').text('비밀번호를 입력해주세요.');
            $('.dimmedAlert').fadeIn(400);
		}
	});
    
    $(".alert-bottom button").click(function(){   
        $(".dimmedAlert").fadeOut(400);
    });
    
});