        //    Alert Name//
document.getElementById("btn1").onclick=function(){
    let fullname="Hamza Ahmad";
    alert(fullname);
    let statement="alert(Hamza Ahmad)";
    document.getElementById("statement").innerHTML=statement;
    
    
}
    //   Clear-button//
document.getElementById("clear-btn").onclick= function(){
    let insert="";
    document.getElementById("statement").innerHTML=insert;


}
    //Clear-button2 //
document.getElementById("clear-btn1").onclick= function(){
    let insert="";
    document.getElementById("Output").value=insert;


}
       // Alert Number//
document.getElementById("btn2").onclick=function(){
    let number=2003;
    alert(number)
    let statement1="alert(2003)"
    document.getElementById("statement").innerHTML=statement1;
}
        //Show Variable Name//
document.getElementById("btn3").onclick=function(){
    let html="Variable Name";
    let html1="var name"
    alert(html);
    document.getElementById("statement").innerHTML=html;
    document.getElementById("Output").value=html1;
}
       //Camel Case//
document.getElementById("btn4").onclick=function(){
     let camel="Example Of Camel Case";
     let camel1="thisIsCamelCase";
     alert(camel);
     document.getElementById("statement").innerHTML=camel;
     document.getElementById("Output").value=camel1;

}

       //Sum 2 Numbers//
document.getElementById("btn5").onclick=function(){
    let a=10;
    let b=7;
    let c=a+b;
    alert(c);
    
    document.getElementById("statement").innerHTML="<p>let a=10; <br> let b=7; <br> let c=a+b; <br> alert(c)</p>";
    document.getElementById("Output").value=c;
}

         //Subtract 2 NUmber//
document.getElementById("btn6").onclick=function(){
    let a=10;
    let b=7;
    let c=a-b;
    alert(c);
    
    document.getElementById("statement").innerHTML="<p>let a=10; <br> let b=7; <br> let c=a-b; <br> alert(c)</p>";
    document.getElementById("Output").value=c;
}
           //Multiple 2 Numbers//

document.getElementById("btn7").onclick=function(){
    let a=10;
    let b=7;
    let c=a*b;
    alert(c);
    
    document.getElementById("statement").innerHTML="<p>let a=10; <br>  let b=7;<br> let c=a*b; <br> alert(c);</p>";
    document.getElementById("Output").value=c;
}

         // Divide 2 Numbers//

document.getElementById("btn8").onclick=function(){
    let a=10;
    let b=5;
    let c=a/b;
    alert(c);
            
    document.getElementById("statement").innerHTML="<p>let a=10; <br> let b=5; <br> let c=a/b; <br> alert(c)<p/>";
    document.getElementById("Output").value=c;
}

        //Calculate Some numbers
document.getElementById("btn9").onclick=function(){
    let xyz=36/6*3+2**4-(3+5);
    alert(xyz);
    document.getElementById("statement").innerHTML="let xyz=36/6*3+2**4-(3+5);"
    document.getElementById("Output").value=xyz;
}