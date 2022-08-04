function validform() {
	var name=document.signinform.user1.value;
	var name1=document.signinform.user2.value;
	var password=document.signinform.password.value;
	var cpassword=document.signinform.cpassword.value;

	if(name.length<6){
		alert("First Name Minimum 6 Charcters");
		return false;
	}
	else if(name1.length<6){
		alert("Last Name Minimum 6 Charcters");
		return false;
	}
	else if(password.length<8){
	     alert("Password Should Must Contain 8 Charcters");
		return false;	
	}
	else if(password==cpassword){
		return true;
	}
	else{
		alert("Does not match password");
		return false;
	}	
}
