

var map=new Array(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10);
var opened = new Array();
var temparray = new Array();
var clickarray = new Array(0, 0);
var score,name,username,ticker, sec, min, ctr, id, oktoclick, finished;

function start()
{ 
if (username ==""||username==null) {
  username = prompt(" Input your name ");
  if (username!=null && username!="")  {
    document.getElementById("user").innerHTML='Welcome, '+username;  
  }
  else {
    document.getElementById("user").innerHTML='Welcome, Anonymous';  
  }
}
document.all.p.style.display="block";
document.all.u.style.display="block";
getperfor();
init();
}

function change(){
username="";
start();
}

function init() {

clearTimeout(id);
for (i = 0; i <= 19 ;i++) {
opened[i] = 0;
}
ticker = 0;
min = 0;
sec = 0;
ctr = 0;
oktoclick = true;
finished = 0;
document.f.b.value = "0 min 00 sec";
display();
setTimeout('timer()',1000);

for (i = 0; i <= 19; i++) {
document.f[('img'+i)].src = "images/0.gif";
   }
}


function timer() {
min = Math.floor(ticker/60);
sec = (ticker-(min*60))+'';
if(sec.length == 1) {sec = "0"+sec};
ticker++;
document.f.b.value = min+" min "+sec+" sec";
id = setTimeout('timer()', 1000);
}

function display() {
for (z = 0; z < 5; z++) {
for (x = 0; x <= 19; x++) {
temparray[0] = Math.floor(Math.random()*20);
temparray[1] = map[temparray[0]];
temparray[2] = map[x];
map[x] = temparray[1];
map[temparray[0]] = temparray[2];
      }
   }
}
function showimage(id) {
if (oktoclick) {
oktoclick = false; 
document.f[('img'+id)].src = 'images/'+map[id]+'.gif';
if (ctr == 0) {
ctr++;
clickarray[0] = id;
oktoclick = true;
} else {
clickarray[1] = id;
ctr = 0;
setTimeout('flip()', 600);
      }
   }
}

function flip() {
if ((clickarray[0] == clickarray[1]) && (opened[clickarray[0]]==0)) {
document.f[('img'+clickarray[0])].src = "images/0.gif";
oktoclick = true;
} 
else {
if (map[clickarray[0]] != map[clickarray[1]]) {
if (opened[clickarray[0]] == 0) {
document.f[('img'+clickarray[0])].src = "images/0.gif";
}
if (opened[clickarray[1]] == 0) {
document.f[('img'+clickarray[1])].src = "images/0.gif";
   }
}
if (map[clickarray[0]] == map[clickarray[1]]) {
if (opened[clickarray[0]] == 0&&opened[clickarray[1]] == 0) 
{ finished++; }
opened[clickarray[0]] = 1;
opened[clickarray[1]] = 1;
}
if (finished >= 10) {
 win(); 
  

} else {
oktoclick = true;
      }
   }
   
}
function win()
{
score=document.f.b.value;
alert('Good job, '+username+' !\n\n You finished the game in '+score+' !');
document.f.b.value = "Try Again";
clearTimeout(id);
for (i = 0; i <= 19; i++) {
document.f[('img'+i)].src = "images/0.gif";}
 
setcookie(username,score,365);   
document.getElementById("perfor").value=score;
}

function setcookie(c_name,value,exdays){  
var exdate=new Date();
exdate.setDate(exdate.getDate() + exdays);
var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
document.cookie=c_name + "=" + c_value;  
   
}  
  

  
function getscore(){  
    var str_cookies = document.cookie;  
    var arr_cookies = str_cookies.split(';');  
    var num_cookies = arr_cookies.length;  
    for(var i = 0; i < num_cookies; i++){  
         var arr = arr_cookies[i].split("="); 
         var string = unescape(username)+"score";
		 var nscore=arr[0].replace(/(^\s+)|(\s+$)/g, ""); 		 
         if(nscore==string)		
		 return unescape(arr[1]); 
         	 
    }  
    return null;  
} 
function getperfor(){
     // if(getname()==username)
	// alert(document.cookie);
	 // {var perfor=document.createTextNode(getscore());
	  //  document.getElementById("record").appendChild(perfor);}
	  document.getElementById("perfor").value=getscore();
    
}



