var sum=0;
var p=0;
var v=document.querySelector("#vathm");
const calc=document.querySelector("#calc");
const r=document.querySelector("#reset");
const averg=document.querySelector("#averg");
const plithos=document.querySelector("#plithos");
const errmsg=document.querySelector("#error");
calc.addEventListener("click",calculate);
v.addEventListener("keyup",eleghos);
r.addEventListener("click", epanafora);

function calculate(){
	var newv=parseInt(v.value);
	v.value="";
	if (newv<0 || newv>10){errmsg.innerHTML="Ο αριθμός πρέπει να είναι από 0 έως 10";}
	else if(isNaN(newv)){errmsg.innerHTML="Πρέπει να δώσεις αριθμό";}
	else{
		p++;
		sum+=newv;
		errmsg.innerHTML="";
		plithos.value=p;
		averg.value=sum/p;
		}
}

function eleghos(){
	
}

function epanafora(){
	
}

