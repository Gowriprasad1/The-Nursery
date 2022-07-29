function validpayment(){
	var cardnumber1=document.paymentform.cardnumber.value;
	var month=document.paymentform.monthdate.value;
	var cvv1=document.paymentform.cvv.value;
	var cardname1=document.paymentform.cardname.value;
	var phone1=document.paymentform.phone.value;

	if(cardnumber1.length<11){
		alert("CardNumber Must and Should Contain 12 digits");
		return false;
	}
	else if(month.length>5){
       alert("Invalid Month and Date");
       return false;
   }
   else if(cvv1.length>4){
   	   alert("Invalid Cvv");
       return false;
   }
   else if(cvv1.length<2){
   	   alert("Invalid Cvv");
       return false;
   }
   else if(cardname1.length<2){
   	   alert("Card Name Should Contain above 2 letters");
   }
   else if(phone1.length>11){
   	alert("Phone Number Must and Should Contain only 10 Numbers");
   }
   else if(phone1.length<9){
   	alert("Phone Number Must and Should Contain only 10 Numbers");
   }
}