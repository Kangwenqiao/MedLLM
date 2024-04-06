//鑾峰彇url鍚庣殑鍙傛暟鍊�
function getUrlParam(key) {
    var href = window.location.href;
    var url = href.split("?");
    if (url.length <= 1) {
        return "";
    }
    var params = url[1].split("&");

    for (var i = 0; i < params.length; i++) {
        var param = params[i].split("=");
        if (key == param[0]) {
            return param[1];
        }
    }
}

//椤堕儴鍏ュ彛
function getTop() {

    //logo
    $.post("/web/getLogo",function(result){
        $("#logoPic").attr("src",result.LOGO);
        $("#zaixianzixun").attr("href",result.WEBURL);
        $("#tongyirexian").text("瀹㈡湇鐑嚎锛�"+result.PHONE);
        $('<div class="f-l" id="jiandurexian">鏈嶅姟鐩戠潱鎶曡瘔涓撶嚎锛�020-22511566</div>').insertAfter("#tongyirexian");

    },"json");

    var diS = '';
    var itemS = '';
    var diC = '';
    var hzS1 = '';
    var hzS2 = '';
    var hzS3 = '';
    var fwS1 = '';
    $.get("/web/getTwoColumn",function(result){
        var diseaseSAList = result.diseaseSAList;   //涓撶鑱旂洘
        var itemList = result.itemList;             //瑙ｅ喅鏂规
        var diagnosticCenterList = result.diagnosticCenterList;   //璇婃柇涓績
        var hezuoList = result.hezuoList;   //鍚堜綔妯″紡
        var fuwuList = result.fuwuList;   //鏈嶅姟妯″紡
        $(diseaseSAList).each(function(i,item){
            diS += '<li class="sub-h"><a class="sub-i" href="/web/diseasespecialistalliance_x/p_diseasespecialistalliance_x.html?ID='+item.ID+'">'+item.NAME+'</a></li>';
        });
        diS += '<li class="sub-h"><a class="sub-i sub-more" href="/web/p_diseasespecialistalliance.html">鏇村鑱旂洘>></a></li>';
        $(itemList).each(function(i,item){
            itemS += '<li class="sub-h"><a class="sub-i" href="/web/solution/p_solution.html?ID='+item.ID+'">'+item.TITLE+'</a></li>';
        });
        itemS += '<li class="sub-h"><a class="sub-i sub-more" href="/web/p_solutions.html">鏇村瑙ｅ喅鏂规>></a></li>';
        $(diagnosticCenterList).each(function(i,item){
            if(item.ID ==1 ){return true;}
            diC += '<li class="sub-h"><a class="sub-i" href="/web/diagnosiscenter_x/p_diagnosiscenter_x.html?ID='+item.ID+'">'+item.NAME+'</a></li>';
        });
        $(hezuoList).each(function(i,item){
            hzS1 += '<li class="sub-h"><a class="sub-i" href="/web/overall_solution/p_overall_solution.html?ID='+item.ID+'">'+item.TITLE+'</a></li>';

        });
        $(fuwuList).each(function(i,item){
            fwS1 += '<li class="sub-h"><a class="sub-i" href="/web/new_healthx/p_new_healthx.html?ID='+item.ID+'">'+item.TITLE+'</a></li>';
        });

        $('#diseasespecialistallianceAList').html(diS);
        $('#diagnosiscenterAList').html(diC);
        $('#solutionAList').html(itemS);
        $('#overallSolutionAList1').html(hzS1);
        $('#newHealthAList1').html(fwS1);

    },"json");

    // return html;
}

//鑾峰彇搴曢儴蹇嵎鍏ュ彛鏁版嵁
function getFooter(){
    var html8 = '';

    $.get("/web/getColumn",function(result){
        var quiList = result.quiList;// 搴曢儴蹇嵎鍏ュ彛
        var navList = result.navList;// 鏈€搴曢儴鏍忕洰
        $(quiList).each(function(i){
            var qui = quiList[i];

            if(qui.ID == 61){//瀹㈡湇
                var nextList = qui.nextList;
                $(nextList).each(function(i){
                    var next = nextList[i];
                    $("#erweima").attr("src",next.PIC);
                });
            }


        });


        //鏈€搴曢儴鏁版嵁
        $(navList).each(function(i){
            var nav = navList[i];
            html8 += '<li class="left">\n' +
                        '<a href="'+nav.P_URL+'">'+nav.NAME+'</a>\n' +
                     '</li>\n';
        });

        /*$('#html5').html(html1+html2+html3+html4+html5);
        $('#html6').html(html6 + html7);*/
        $('#zuidi').html(html8);
    },"json");

    //鑾峰彇鍏徃淇℃伅
    $.get("/web/getLogo",function(result){
        if(result != null){//BEIAN
            $('#beian').prepend('<p>'+result.BEIAN+'</p><br>');
        }
    },"json");

}

//鑾峰彇渚ц竟鏍�
function getCebian(){
    var html = '<div class="fixed">\n' +
        '\t<ul class="ul_10 clearfix">\n' +
        '\t\t<li class="li">\n' +
        '\t\t\t<a href="https://webchat.tycc100.com/wapchat.html?accessId=21ccb670-e22d-11e8-b741-1143bc1f36bc&fromUrl=&urlTitle=" ><font style="color: #FFFFFF">鍦ㄧ嚎<br />鍜ㄨ</font></a>\n' +
        '\t\t</li>\n' +
        '\t\t<li class="li">\n' +
        '\t\t\t<a href="p_contcatus.html">鑱旂郴<br/>鎴戜滑\n' +
        '\t\t\t</a>\n' +
        '\t\t</li>\n' +
        '\t\t<li class="li topback">\n' +
        '\t\t\t<a >\n' +
        '\t\t\t\t<img src="/image/icon_15.png" class="img1"/>\n' +
        '\t\t\t\t<img src="/image/icon_15_f.png" class="img2"/>\n' +
        '\t\t\t</a>\n' +
        '\t\t</li>\n' +
        '\t\t\n' +
        '\t</ul>\n' +
        '</div>';


    return html;
}

//鑾峰彇瀛楁瘝鍒嗙被閫夋嫨鐨勮妭鐐规暟鎹�
function checkzimuDate() {
    var A_SORT = '';
    var list = $('#zimufenlei li');
    $(list).each(function (i,item) {
        if($(this).attr("class") == 'li left on'){
            var ss = item.childNodes;
            $(ss).each(function (i,item) {
                A_SORT = $(this).text();
            })
        }

    })
    return A_SORT;
}

function removezimuDate() {
    var list = $('#zimufenlei li');
    $(list).each(function (i,item) {
        $(this).attr("class","li left");
    })
    A_SORT = '';
}

//鑾峰彇椤圭洰鍒嗙被閫夋嫨鐨勮妭鐐规暟鎹�
function checkItemDate() {
    var ITEM_KIND_ID = '';
    var list = $('#fenlei li');
    $(list).each(function (i,item) {
        $(item.childNodes).each(function(i,item){
            if($(this).attr("class") == 'a on'){
                ITEM_KIND_ID = $(this).attr("name");
            }
        });
    })
    return ITEM_KIND_ID;
}

function removeItemDate() {
    var list = $('#fenlei li');
    $(list).each(function (i,item) {
        $(item.childNodes).each(function(i,item){
            $(this).attr("class","a");
        });
    })
    ITEM_KIND_ID = '';
}

//鏍煎紡鍖栨椂闂�
function formatDate(now) {
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    month = appendZero(month);
    date = appendZero(date);
    return year+"-"+month+"+"+date+"";
}

function appendZero(obj) {
    return lut = obj < 10 ? "0" + obj : obj
}


//鎼滅储鐐瑰嚮浜嬩欢
function toSearch() {
    var keyword = $('#keyword').val();
    if (show(keyword)==false){ return false;};
    window.location.href = '/web/p_search.html?keyword='+keyword;
}
$('#keyword').bind('keyup', function(event) {
    if (event.keyCode == "13") {
        //鍥炶溅鎵ц鏌ヨ
        var keyword = $('#keyword').val();
        show(keyword);
        window.location.href = '/web/p_search.html?keyword='+keyword;
    }
});



//faq鏈夌敤鐐瑰嚮浜嬩欢
function updateNumFt(ID) {
    if (show(ID)==false){ return false;};
    $.post("/web/updateNumF", {"IT_WORKS": 1,"ID":ID},
        function (result) {
        },"json");
}

//faq鏃犵敤鐐瑰嚮浜嬩欢
function updateNumFs(ID) {
    if (show(ID)==false){ return false;};
    $.post("/web/updateNumF", {"IS_USELESS": 1,"ID":ID},
        function (result) {
        },"json");
}

//涓婁竴椤�
function jian(num) {
    if (show(num)==false){ return false;};
    if(num < 1){
        num == 0;
    }else{
        num = num;
    }
    initData(num);
}

//涓嬩竴椤�
function jia(num) {
    if(num > pagecount){
        num = pagecount;
    }else{
        num = num;
    }
    if (show(num)==false){ return false;};
    initData(num);
}

//淇敼闃呰鏁伴噺
function updateHist(ID,NUM) {
    	if (show(ID)==false){ return false;};
    if (show(NUM)==false){ return false;};
    $.post("/web/updateHist",{"ID":ID,"NUM":NUM},function (result) {
    },"json");
}

function  show(data) {
    var b;
    //鐢ㄦ鍒欒繃鍘婚潪娉曡姹�
    var pattern = new RegExp("[`~!#$^&*()=|{}';',\\[\\]<>銆娿€�/?~锛�#锟モ€︹€�&*锛堬級鈥斺€攟{}銆愩€戔€橈紱鈥濃€�'銆傦紝銆侊紵]");
    if(pattern.test(data)){
        alert("鎿嶄綔涓嶅悎娉�");
        b= false;
    }
    var pattern1 = new RegExp("/((\\%3C)|<)((\\%2F)|\\/)*[a-z0-9\\%]+((\\%3E)|>)/ix");
    if(pattern1.test(data)){
        alert("鎿嶄綔涓嶅悎娉�");
        b= false;
    }
    var pattern2 = new RegExp("/((\\%3C)|<)[^\\n]+((\\%3E)|>)/I");
    if(pattern2.test(data)){
        alert("鎿嶄綔涓嶅悎娉�");
        b= false;
    }
    return b;
}