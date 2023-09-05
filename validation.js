function go(){
	var formstatus = true;
	var name = document.getElementById("fname").value;
	if(name==""){
		formstatus=false;
		document.getElementById("fname").style.borderColor="red";
	}else{
		document.getElementById("fname").style.borderColor="green";
	} 

    var mpattern = /^[6-9]\d{9}$/;
    var mobileno = document.getElementById("mobile").value;
    
    if(!mpattern.test(mobileno)){
        formstatus=false;
		document.getElementById("mobile").style.borderColor="red";
	}else{
		document.getElementById("mobile").style.borderColor="green";
	} 

    var epattern = filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var mailid = document.getElementById("emailid").value;
    if(!epattern.test(mailid)){
        formstatus=false;
		document.getElementById("emailid").style.borderColor="red";
	}else{
		document.getElementById("emailid").style.borderColor="green";
	} 

	var city = document.getElementById("city").value.trim();
	if(city==""){
		formstatus=false;
		document.getElementById("city").style.borderColor="red";
	}else{
		document.getElementById("city").style.borderColor="green";
	} 


    var pword = document.getElementById("mypassword").value.trim();
	if(pword.length<6){
		formstatus=false;
		document.getElementById("mypassword").style.borderColor="red";
	}else{
		document.getElementById("mypassword").style.borderColor="green";
	} 

	var m = document.getElementById("male").checked;
	var f = document.getElementById("female").checked;
	if(m==false && f==false){
		formstatus=false;
		document.getElementById("gendererror").innerText = "Invalid Gender";
	}else{
		document.getElementById("gendererror").innerText ="";
	} 

	var adr = document.getElementById("address").value;
	if(adr==""){
		formstatus=false;
		document.getElementById("address").style.borderColor="red";
	}else{
		document.getElementById("address").style.borderColor="green";
	} 


	var cbox = document.getElementById("tnc").checked;
	if (cbox==false){
		formstatus=false;
		document.getElementById("tncerror").innerText = "This field is required";
	}else{
		document.getElementById("tncerror").innerText ="";
	} 

	
	if(formstatus==true){
		document.getElementById("message").innerText = "success loading please wait";
	}else{
		document.getElementById("message").innerText = "invalid form";
	}
     window.location.href="./loginpage.html";
}