$(document).ready(function(){
    
    $(".gnb").toggleClass("membership");
    $("header .gnb.id").css("display", "block");
    
//    $(".login-btn").click(function(){
//        
//        $(".gnb").toggleClass("membership");
//        $("header .gnb span").css("display", "block");
//        
//    });
    
    // 메뉴
    
    $("section.ticket .snb").click(function(){
        var tn = $(this).index();
        $("section.ticket .snb.sel").removeClass("sel");
        $(this).addClass("sel");
        $("section.ticket article.tview.sel").removeClass("sel");
        $("section.ticket article.tview").eq( tn ).addClass("sel");
    });
    
    
    // 이용권 조회 및 사용
    
    $(".btnup").click(function(){
        var defaultnum = $(this).parents(".data").children("input").val();
        var checknum = $(this).parents(".data").children(".datatext").children(".spot").text();
        
        checknum = parseInt(checknum) + 1;
        
        if (checknum <= defaultnum){
            $(this).parents(".data").children(".datatext").children(".spot").text(checknum);
        }
    });
    
    // 이용권 개수
    
    $(".btndown").click(function(){
        var checknum = $(this).parents(".data").children(".datatext").children(".spot").text();
        
        checknum = parseInt(checknum) - 1;
        
        if (checknum >= 1){
            $(this).parents(".data").children(".datatext").children(".spot").text(checknum);
        } 
    });
    
    // 이용권 결제 내역
    
    var i = 0;
    
    $("section.ticket .month-wrap .month").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".btn-search").click(function(){
        var termdate = $(".month-wrap .active").attr("id");
        var syear = $("#syear").val();
        var smonth = $("#smonth").val();
        var sdate = $("#sdate").val();
        var dyear = $("#dyear").val();
        var dmonth = $("#dmonth").val();
        var ddate = $("#ddate").val();
        var dsearch = $("#dsearch").val();

        var tt = 'term' + termdate + ' / ' + 
            'syear' + syear + ' / ' + 
            'smonth' + smonth + ' / ' + 
            'sdate' + sdate + ' / ' + 
            'dyear' + dyear + ' / ' + 
            'dmonth' + dmonth + ' / ' + 
            'ddate' + ddate + ' / ' + 
            'dsearch' + dsearch + ' / ';
            //alert(tt);

        var ssum = syear+smonth+sdate;
        var dsum = dyear+dmonth+ddate;

        if (ssum > dsum) {
            alert('검색 시작날짜를 검색종료 날짜보다 앞시간으로 설정해주세요.');
            return false;
        } else {
            datetype.submit();
        }
    });
    
    // 현재 날짜
        var DateToday = new Date();
        var $syear = DateToday.getFullYear();  // 현재 년
        var $smonth = (DateToday.getMonth()+1);  // 현재 월
        var $sday = DateToday.getDate();  // 현재 일
        var $slastDay = new Date($syear,$smonth,0).getDate(); // 현재 월의 마지막 날
        
        for( i=1 ; i <= 10 ; i++ ){
            $('#syear,#dyear').append('<option value="'+$syear+'">'+$syear+'</option>');
            $syear = $syear - 1; 
        };
        for( i=12 ; i >= 1 ; i-- ){
            $('#smonth,#dmonth').append('<option value="'+i+'">'+i+'</option>');
        };
        for( i=$slastDay ; i >= 1 ; i-- ){
            $('#sdate,#ddate').append('<option value="'+i+'">'+i+'</option>');
        };
        
        // 일주일 전
        var DateFuture = new Date();
        DateFuture.setDate(DateFuture.getDate() - 7);
        var $fyear = DateFuture.getFullYear();  // 1주전 년
        var $fmonth = (DateFuture.getMonth()+1);  // 1주전 월
        var $fday = DateFuture.getDate();  // 1주전 일
        var $flastDay = new Date($fyear,$fmonth,0).getDate(); // 1주전의 마지막 날

        // 디폴트 세팅
        document.datetype.dmonth.value=$smonth;
        document.datetype.smonth.value=$fmonth;
        document.datetype.ddate.value=$sday;
        document.datetype.sdate.value=$fday;
        
        $('#ch1').click(function(){
             dateclick(7);
        });
        $('#ch2').click(function(){
             dateclick(15);
        });
        $('#ch3').click(function(){
             monthclick(1);
        });
        $('#ch4').click(function(){
             monthclick(3);
        });
        
        // 날짜 정리
        function dateclick(e){
            
            var dyear = $('#dyear').val();
            var dmonth = $('#dmonth').val();
            var ddate = $('#ddate').val();
            
            DateFuture = new Date(dyear,dmonth,ddate);
            DateFuture.setDate(DateFuture.getDate() - e);
            $fyear = DateFuture.getFullYear();
            $fmonth = DateFuture.getMonth();
            $fday = DateFuture.getDate();
            
            document.datetype.syear.value=$fyear;
            document.datetype.smonth.value=$fmonth;
            document.datetype.sdate.value=$fday;
            
        };
        
        // 개월 정리
        function monthclick(e){
            
            var dyear = $('#dyear').val();
            var dmonth = $('#dmonth').val();
            var ddate = $('#ddate').val();
            
            DateFuture = new Date(dyear,dmonth,ddate);
            DateFuture.setMonth(DateFuture.getMonth() - e);
            $fyear = DateFuture.getFullYear();
            $fmonth = DateFuture.getMonth();
            $fday = DateFuture.getDate();
            
            document.datetype.syear.value=$fyear;
            document.datetype.smonth.value=$fmonth;
            document.datetype.sdate.value=$fday;
            
        };
    
});

// 핸드폰 번호로 검색

function myFunction(){
        
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

