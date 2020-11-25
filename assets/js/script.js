function trennen()
{

let input1=document.getElementById("input1").value ;
let input2=document.getElementById("input2").value;
let trennrnCheck=document.getElementById("danach")
let satzeArray= input1.split(input2)
let a;
let b;
let l=input2.length;

if (l==0)
{   console.log(satzeArray)
    document.getElementById("vordemo").innerHTML = a = " Das  Zeichen konnte lieder nicht gefeunden werden"
    document.getElementById("hinterdemo1").innerHTML=b=input1;
}

 else if(trennrnCheck.checked)
{
    console.log(satzeArray)
    document.getElementById("vordemo").innerHTML = a = satzeArray[0]+ input2;
    document.getElementById("hinterdemo1").innerHTML = b = satzeArray[1]
    
}else{
    console.log(satzeArray)
   document.getElementById("hinterdemo1").innerHTML = b = input2 + satzeArray[1]
   document.getElementById("vordemo").innerHTML = satzeArray[0]

}

}