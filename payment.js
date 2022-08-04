function validation() {
    var card=document.getElementById('cardnumber').value;
    var month=document.getElementById('month').value;
    var year=document.getElementById('year').value;
    var cvv=document.getElementById('cvv').value;
    var cardname=document.getElementById('cardname').value;
    var phone=document.getElementById('phone').value;
  
   if(card==""){
    alert("Please Enter CardNumber");
    return false;
   }
   if(isNaN(card)){
    alert("CardNumber Only Contain Digits");
    return false;
   }
   if(card.length!=12){
     alert("CardNumber Only Contain 12 Digits");
     return false;
   }
   if(month==""){
    alert("Please Enter Month");
    return false;
   }
   if(isNaN(month)){
    alert("CardNumber Only Contain Digits");
    return false;
   }
   if(month>=13){
    alert("Invalid Month");
    return false;
   }
   if(year==""){
    alert("Please Enter Year");
    return false;
   }
   if(isNaN(year)){
    alert("CardNumber Only Contain Digits");
    return false;
   }
   if(year.length>=5){
    alert("Invalid Year");
    return false;
   }
   if(year<2022 || year>=2050){
    alert("Invalid Year");
    return false;
   }
   if(cvv==""){
    alert("Please Enter Cvv");
    return false;
   }
   if(isNaN(cvv)){
    alert("CardNumber Only Contain Digits");
    return false;
   }
   if(cvv.length!=3){
    alert("Invalid CVV");
    return false;
   }
   if(cardname==""){
    alert("Please Enter CardName");
    return false;
   }
   if(cardname.length<3){
    alert("CardName Can Contain atlest 3 Charcters");
    return false;
   }
   if(phone==""){
    alert("Please Enter phone");
    return false;
   }
   if(isNaN(phone)){
    alert("CardNumber Only Contain Digits");
    return false;
   }
   if(phone.length!=10){
  alert("PhoneNumber Must Contain 10 Digits");
  return false;
   }
}
