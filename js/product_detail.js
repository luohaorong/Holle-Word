/**
 * Created by Chrise on 2017/2/10.
 */



//=====================ȫ�ֺ���========================
/*tab�л�����
 * ele_id: tab��ǩ���ڵ�ID
 * arguments[1]: ���ǩclassname��Ĭ��Ϊ:on
 * arguments[2]�����ݸ��ڵ�ID,Ĭ��Ϊ��tabid_con
 * DEMO:tab_switch(tabid);
 */
function tab_switch(ele_id, activeclass) {
    $("#" + ele_id).children().each(function () {
        var xh = $(this).index();
        $(this).find("*").click(function () {
            console.log($(this));
            $(this).addClass(activeclass);
            $(this).siblings().removeClass(activeclass);
            $(".tabcon_sy>li").addClass("tab_hidden");
            alert(xh);
            $(".tabcon_sy>li").eq(xh).removeClass("tab_hidden");
        })
    });
}
/*
//=====================ȫ�ֺ���========================
//==================ͼƬ��ϸҳ����=====================
 */

//��������ʾ������
function slide_box(id_click, id_add, id_det, id_up) {
    $(id_click).click(function () {
        var data_state = $(this).attr('data_state');
        if (data_state == 1) {
            $(id_add).show().parent().find(id_det).hide();
            $(id_up).stop(true, true).slideUp();
            $(this).attr('data_state', '0');
        } else {
            $(id_det).show().parent().find(id_add).hide();
            $(id_up).stop(true, true).slideDown();
            $(this).attr('data_state', '1');
        }
    });
}

$(function(){
    //ͼƬԤ��Сͼ�ƶ�Ч��,ҳ�����ʱ����
    var showproduct = {
        "boxid": "showbox",
        "sumid": "showsum",
        "boxw": 274,//���,�ð汾����ѿ����д��һ��
        "boxh": 374,//�߶�,�ð汾����ѿ����д��һ��
        "sumw": 62,//�б�ÿ�����,�ð汾����ѿ����д��һ��
        "sumh": 62,//�б�ÿ���߶�,�ð汾����ѿ����д��һ��
        "sumi": 6,//�б���
        "sums": 3,//�б���ʾ����
        "sumsel": "sel",
        "sumborder": 1,//�б�߿�û�б߿���д0���߿���css���޸�
        "lastid": "showlast",
        "nextid": "shownext"
    };//��������
    jQuery.ljsGlasses.pcGlasses(showproduct);//�������ã�����ڼ������ִ��
//==================ͼƬ��ϸҳ����=====================
    //����ID���ò˵��л�����
    $('#tab_id>.tab li').click(function () {
        var i = $(this).index();//�±��һ��д��
        //var i = $('tit').index(this);//�±�ڶ���д��
        $(this).addClass('active').siblings().removeClass('active');
        $('.tabcon_sy li').eq(i).show().siblings().hide();
    });
    //ѡ����ҵ���
    //ѡ����ҵ���
    var ex_off1 = false;
    var ex_off2 = false;
    exclusive();
    $('.ck_churchyard').on('click', function () {
        if (!ex_off1) {
            $(this).children('.ck_city').addClass('ex_change').parent('div').addClass('ex_afterclick');
            $(this).siblings('.ck_province ')
                .removeClass('ex_afterclick')
                .children('.ck_region').removeClass('ex_change');
            ex_off1 = true;
            ex_off2 = false;
        } else {
            $(this).children('.ck_city').removeClass('ex_change').parent('div').removeClass('ex_afterclick');
            ex_off1 = false;
        }
        exclusive();
    });
    $('.ck_province').on('click', function () {
        if (!ex_off2) {
            $(this).children('.ck_city').addClass('ex_change').parent('div').addClass('ex_afterclick');
            $(this).siblings('.ck_churchyard')
                .removeClass('ex_afterclick')
                .children('.ck_region').removeClass('ex_change');
            ex_off2 = true;
            ex_off1 = false;
        } else {
            $(this).children('.ck_city').removeClass('ex_change').parent('div').removeClass('ex_afterclick');
            ex_off2 = false;
        }
        exclusive();
    });
    //����������֤
    $('.ex_amount').bind('input propertychange', function () {
        $(this).val($(this).val().replace(/[^\d]/g, ''));//��ֻ֤����������
        if ($(this).val() == null || $(this).val() == "") {
            $(this).val(0)
        } else if ($(this).val().substr(0, 1) == '0' && $(this).val().length > 1) {
            $(this).val($(this).val().substr(1));
        }
    });
    //�Ӽ���������
    $('.ex_add').on('click', function () {
        var amount = parseInt($('.ex_amount').val());
        amount++;
        $('.ex_amount').val(amount);

    });
    $('.ex_minus').on('click', function () {
        var amount = parseInt($('.ex_amount').val());
        amount--;
        $('.ex_amount').val(amount);
        if ($('.ex_amount').val() < 0) {
            $('.ex_amount').val(0);
        }
    });
    //�����ĵ�������л�
    $('.ex_jiantou1').on('click', function () {
        $(this).hide();
        $('.ex_jiantou2').show();
        $('.ex_selectaddress').show();
        $('.first_li').html('');
    });
    $('.ex_jiantou2').on('click', function () {
        $(this).hide();
        $('.ex_jiantou1').show();
        $('.ex_selectaddress').hide();
        $('.first_li').html($('.ex_selectaddress li:first').text());
    });

    //ȷ�ϴ���
    function exclusive() {
        if (!ex_off1 && !ex_off2 && parseInt($('.ex_amount').val()) > 0) {
            /* $('.sure_agent').css({
             'background':'#cccccc'
             })*/
            $(".sure_agent").attr({
                "disabled": "disabled"
            });

        } else {
            $('.sure_agent').removeAttr("disabled");
            $('.sure_agent').css({
                'background': '#57e6d3'
            });
        }
    }

    $('.sure_agent').on('click', function () {
        console.log(111);
    });
    //����л���ʾ����
    slide_box(heat, add, detract, left_list_top);
    slide_box(browse, add_sub, detract_sub, left_list_sub);
    //��ʼ����ַ
    // $("#mySelect").select(); ����������������д
    $("#select-area").select();
    //��ѡ����,�������Ĭ��ֵ
    //width: "180px",            //���ɵ�select����
    //listMaxHeight:"200px",     //���ɵ������б����߶�
    //themeColor: "#00bb9c",    //������ɫ
    //fontColor: "#000",        //������ɫ
    //fontFamily: "'Helvetica Neue', arial, sans-serif",    //��������
    //fontSize:"15px",           //�����С
    //showSearch: false,        //�Ƿ�����������
    //rowColor:"#fff",          //��ԭ������ɫ
    //rowHoverColor: "#0faf03", //�ƶ�ѡ��ʱ��ÿһ�е�hover��ɫ
    //fontHoverColor: "#fff",   //�ƶ�ѡ��ʱ��ÿһ�е�����hover��ɫ
    //mainContent: "��ѡ��",    //ѡ����ʾ���Ĭ������
    //searchContent: "�ؼ�������"   //�������Ĭ����ʾ����
});