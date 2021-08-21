var guest=[];
function submit(){
var name=document.getElementById("name1").value;
guest.push(name);
console.log(name);
console.log(guest);
var length=guest.length;
console.log(length);
document.getElementById("display_name").innerHTML=guest.toString();
}
function sorting(){
guest.sort();
var i=guest.join("<br>");
console.log(guest);
document.getElementById("sorted").innerHTML=i.toString();
}
function show(){
    var i=guest.join("<br>");
    console.log(guest);
    document.getElementById("p1").innerHTML=i.toString();
    document.getElementById("sort_button").style.display="block";
}
function searching(){
var s = document.getElementById("s1").value;
var found = 0;
var j;
for(j=0; j<guest.length;j++)
{
if(s==guest[j])
{
found=found+1;
}
}
document.getElementById("p2").innerHTML="name found"+found+"times";
console.log("name found"+found+"times");
}