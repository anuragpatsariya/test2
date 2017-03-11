function calculate(){
	
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var num3 = document.getElementById("num3").value;
	var num4 = document.getElementById("num4").value;

	var sum = document.getElementById("sum").value;		

	var denom1 = document.getElementById("denom1").value;
	var denom2 = document.getElementById("denom2").value;
	var denom3 = document.getElementById("denom3").value;
	var denom4 = document.getElementById("denom4").value;

	denom1 = parseInt(sum/num1);
	var r1 = sum%num1;
	denom2 = parseInt(r1/num2);
	var r2 = r1%num2;
	denom3 = parseInt(r2/num3);
	var r3 = r2%num3;
	denom4 = r3;
	
	//window.alert("Something happened.");
	//console.log("Denom1: "+denom1);
	//console.log("Denom2: "+denom2);
	//console.log("Denom3: "+denom3);
	//console.log("Denom4: "+denom4);
	document.getElementById("denom1").value = denom1;
	document.getElementById("denom2").value = denom2;
	document.getElementById("denom3").value = denom3;
	document.getElementById("denom4").value = denom4;

	}