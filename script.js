


function sub() {
    console.log();
   coll = document.getElementsByClassName("name__input");
   coll1 = document.getElementsByClassName("subj__input");    
// Get the modal
var modal = document.getElementById("myModal");

document.getElementById("modal_w").style.visibility="visible";
document.getElementById("modal_w_text").innerHTML="Name: " +  coll[0].value+'<br> Subject: '+  coll1[0].value+'<br> OK ';
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//document.getElementById("modal_w").style.visibility="hidden";
    }
    
    

function menb(Id) {
    
        coll = document.getElementsByClassName("menupoints");
        
        
                coll[0].style["visibility"] = "visible";
          coll[0].style.opacity = 1;
                var fadeEffect = setInterval(function () {
                    if (!coll[0].style.opacity) {
                        coll[0].style.opacity = 1;
                    }
                    if (coll[0].style.opacity > 0) {
                        coll[0].style.opacity -= 0.1;
                    } else {
                        clearInterval(fadeEffect);
                    }
                }, 900);
    }
    
    

function menu(Id) {

    coll = document.getElementsByClassName("menupoint");
    
    if (
        Id.style.border == "") {
        for (var i = 0, len = coll.length; i < len; i++) {
            coll[i].style["border"] = "";
        }

        Id.style.border = "1px solid #F05C64";



    }
    else { Id.style.border = ""; }

    coll = document.getElementsByClassName("menupoints");
        
        
    coll[0].style["visibility"] = "visible";
coll[0].style.opacity = 1;
    var fadeEffect = setInterval(function () {
        if (!coll[0].style.opacity) {
            coll[0].style.opacity = 1;
        }
        if (coll[0].style.opacity > 0) {
            coll[0].style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 1200);

}



















function screen(Id) {

    var samsung;
    if (Id.className == "iphone-vertical") {
        samsung = "screen-vertical";
    }
    else { samsung = 'screen-horisontal'; }
    //console.log(samsung);
    var s = document.getElementsByClassName(samsung);
    //console.log(s[0]);
    
    if (
        s[0].style.display == "none") {
        s[0].style.display = "block";
        

    }
    else { s[0].style.display = "none"; }



}





function moveChoiceTo(elem_choice, direction) {

    var span = elem_choice.parentNode,
        td = span.parentNode;

    if (direction === -1 && span.previousElementSibling) {
        td.insertBefore(span, span.previousElementSibling);
    } else if (direction === 1 && span.nextElementSibling) {
        td.insertBefore(span, span.nextElementSibling.nextElementSibling)
    }
}



function tabshuffle(Id) {

    coll = document.getElementsByClassName("tag");
    if (
        Id.className == "tag tag_bordered") {
        for (var i = 0, len = coll.length; i < len; i++) {
            coll[i].className = "tag tag_bordered";
        }

        Id.className = "tag tag_selected"


    }
    else { Id.className = "tag tag_selected"; }
    coll1 = document.getElementsByClassName("portfolio_part__image");
    for (var i = 0, len = coll.length; i < len; i++) {

        moveChoiceTo(coll1[i], 1);
    }


}


function mark(Id) {

    coll = document.getElementsByClassName("portfolio_part__image");
    if (
        Id.style.border == "") {
        for (var i = 0, len = coll.length; i < len; i++) {
            coll[i].style["border"] = "";
        }

        Id.style.border = "5px solid #F06C64";


    }
    else { Id.style.border = ""; }



}
























var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}