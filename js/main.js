/*nav*/
$(".togglebtn").click(function(){
  

        $(".nav").css("display","block");
        $(".togglebtn").css("left","260px");
      
    });

    
    $(".closebtn").click(function(){
        $(".nav").css("display","none");
        $(".togglebtn").css("left","20px");
    });

/*links*/

$("a").click(function(){
    let currentLink= $(this).attr("href");
    let offsetLink=$(currentLink).offset().top;
    $("body , html").animate(
        {
     scrollTop : offsetLink
        }
        ,3000);
})


/*singers slideToggle*/

    $("#singers div:first").css("display","block"); 
    
    $("#singers h3").click(function(){
        $(this).next().slideToggle(1000);
        $("#singers div").not($(this).next()).slideUp(1000);

    })
   
    /*counter*/
   
    
  


function cutDown(){
 
let currentdate = new Date();
let cutDownDate = new Date( 2021 , 12, 17 );

let currentTime =  new Date().getTime();

let eventTime = cutDownDate. getTime();

let distance = cutDownDate -currentTime ;
console.log(distance);
let S = Math.floor(distance/1000);
let M =Math.floor(S/60);
let H =Math.floor(M/60);
let D =Math.floor(H/24)-30;

    H %= 24;
	M %= 60;
	S %= 60;

	H = (H < 10) ? "0" + H : H;
	H = (M< 10) ? "0" + M : M;
	S = (S < 10) ? "0" + S : S;


    document.getElementById("day").innerHTML =  "<h3>"+  D + " D"+"</h3>";
	document.getElementById("hour").innerHTML = "<h3>"+  H + " H"+"</h3>";
	document.getElementById("mintue").innerHTML= "<h3>"+ M + " M"+"</h3>";
	document.getElementById("second").innerHTML= "<h3>"+S + " S"+"</h3>";
    setTimeout(cutDown, 1000);
};

  cutDown();








    /*connect*/
    let maxLenght= 100;
    $("textarea").keyup(function(){
        let currentLenght=$(this).val().length;
        let char = maxLenght -currentLenght;

        if(char<=0){
            $("#char").text("your available character finished") ;
        }
        else{
            $("#char").text(char);
        };
    });