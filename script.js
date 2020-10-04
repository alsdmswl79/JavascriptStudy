var list1=document.getElementById("list1");
//var list2=document.getElementById("list2");

var button=document.getElementById("button");
var buttonDeleteAll=document.getElementById("buttonDeleteAll");

var input=document.getElementById("input");

var count=1;
//var countDone=1;
var liAppend;
button.addEventListener('click',clickButton);
buttonDeleteAll.addEventListener('click',clickButtonDeleteAll);

//var inputString;
function clickButton(){
    //var liAppend=document.createElement('li');
    liAppend=document.createElement('li');

    liAppend.setAttribute("class","list-group-item");
    liAppend.setAttribute("id","li"+count);
    inputString=input.value;
    liAppend.innerHTML=input.value;
    liAppend.innerHTML+="<button style='font-size:40px float:right clear:both;' class='btn btn-outline-secondary' type='button' id='buttonRemove' onclick='remove("+count+")'>삭제</button>";
    //liAppend.innerHTML+="<button style='float: right clear:both;' class='btn btn-outline-secondary' type='button' id='buttonDone' onclick='done("+count+")'>Done</button>";
    list1.appendChild(liAppend);
    count++;

    input.value="";
}
function remove(count){
    var liRemove = document.getElementById("li"+count);
    list1.removeChild(liRemove);
}
/*
function done(count){   
    var liDone = document.getElementById("li"+count);
    list1.removeChild(liDone);
    //var removeButton=document.getElementById('buttonDone'); 
    //removeButton.innerHTML="";
    list2.appendChild(liDone);

    var buttonDelete=document.getElementById('buttonDelete');
    var buttonDone=document.getElementById('buttonDone');

    buttonDelete.addEventListener('click',remove);
    buttonDone.remove;
}
*/

function clickButtonDeleteAll(){
    /*
    var list1 = document.getElementById("list1"); 
    while ( list1.hasChildNodes() ) { list1.removeChild( list1.firstChild ); }

    var list2 = document.getElementById("list2"); 
    while ( list2.hasChildNodes() ) {list2.removeChild( list2.firstChild ); }
    */
   /*
    $("li").remove
    */   
   list1.find(":not(h3)").remove();
   list2.find(":not(h4)").remove();
   input.value="";
}