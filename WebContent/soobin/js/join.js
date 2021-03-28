//이메일 유효성 체크
function check_id(){
    let id = $('#id').val();
    let regExp = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if(!regExp.test(id)) {
        $('.id.msg').css('visibility','visible');
        return false;
    }else if(!regExp.test(id)){
        $('.id.msg').css({"visibility": "visible", "color": "red"});
        return false;
    }else {
        $('.id.msg').css('visibility','hidden');
        return true;
   }

}
$('#id').on('keyup', check_id);

/* 비밀번호 :
    1. 8-20자리
    2. 공백없이
    3. 영문 + 숫자 포함
*/

function check_pwd(){
	let password = $('#password').val();
	let num = password.search(/[0-9]/g);
	let eng = password.search(/[a-zA-Z]/);

    if(password == '' || password.length == 0){
        $('.password.val.eng').removeClass('on');
        $('.password.val.num').removeClass('on');
        $('.password.val.len').removeClass('on');
        return false;
    }

    if(eng < 0){
        $('.password.val.eng').removeClass('on');
		return false;
	} else {
		$('.password.val.eng').addClass('on');
    } 
    if(num < 0){
		$('.password.val.num').removeClass('on');
		return false;
	} else {
		$('.password.val.num').addClass('on');
    }
    if(password.length < 8 || password.length > 20){
		$('.password.val.len').removeClass('on');
		return false;
	}else {
        $('.password.val.len').addClass('on');
    }

    if(password.search(/\s/)!=-1){
        alert('공백문자는 입력이 불가합니다')
		return false;
	}

    return true;
}

$('#password').on('keyup', check_pwd);

function check_pwd_ch(){
	let check = $('#passwordcheck').val();
	let password = $('#password').val();

	if(!(check === password) || check == ''){
        $('.passwordcheck.msg').css('color','#888888');
		return false;
	}else {
        $('.passwordcheck.msg').css('color','#375fff');
		return true;
	}
		
}

$('#passwordcheck').on('keyup', check_pwd_ch);