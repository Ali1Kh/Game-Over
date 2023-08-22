import { gamesData } from "./home.js";
new gamesData();

export function loadPage(){
    $(".spinner ").fadeOut(500,function(){
        $(".loading").fadeOut(500,function(){
          $(".loading").addClass("d-flex");
          $(".loading").removeClass("d-none");
          $("body").css("overflow","hidden")
        });
       }); 
}

 export function pageLoaded(){
     $(".spinner").fadeOut(500,function(){
        $(".loading").fadeOut(500,function(){
        $("body").css("overflow","auto");
        $(".loading").removeClass("d-flex");
        $(".loading").addClass("d-none"); 
        });
       }); 
}

// loadPage();

$(".games").ready(()=>{
    
    pageLoaded();
},)
