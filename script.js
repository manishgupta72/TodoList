
let newtext;
var db;
let text;
var i=1;

function add()
{    
    
     text=document.getElementById("inp").value+"<br>";
    newtext=i+". "+text;
    document.getElementById("add-text").innerHTML+=newtext;
    i++;
}

function empty()
{
    document.getElementById("add-text").innerHTML=" ";
    document.getElementById("add-text").style.textDecoration="none";
    i=1;
}

function doubleclick()
{
    document.getElementById("add-text").style.textDecoration="line-through";
    db=1;
}
function complete()
{
    if(db==1)
    {
        document.getElementById("add-text").innerHTML=" ";
    }   

}

 
function save()
{
    alert(text);
}