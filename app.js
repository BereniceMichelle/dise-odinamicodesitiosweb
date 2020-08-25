
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");



var con1 =0;
var con2 =0;
var con3 =0;

p1.addEventListener("mouseover",function(){


   if(con1 == 1){



    $( "#div1" ).animate({

    width: "0px",
    height: "0px",
    


  }, 100 );

  con1 = 0;
  }

   else{

    $( "#div1" ).animate({

    width: "350px",
    height: "350px",
    


  }, 100 );

con1 = 1;
   }

 

});

p2.addEventListener("mouseover",function(){


   if(con2 == 1){



    $( "#div2" ).animate({

    width: "0px",
    height: "0px",
    


  }, 100 );

  con2 = 0;
  }

   else{

    $( "#div2" ).animate({

    width: "350px",
    height: "350px",
    


  }, 100 );

con2 = 1;
   }

 

});

