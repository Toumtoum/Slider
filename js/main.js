
//----------------------------VARIABLES-------------------------------------

var pictures = document.getElementsByClassName('mySlides');
var i;
var indexPicture = 0;
var description = document.getElementsByClassName('description');
var timer = setInterval (function () {slideShow()}, 5000);





//----------------------------FONCTIONS--------------------------------------


function hidePictures (){

  for (i = 0; i < pictures.length; i++){
    pictures[i].style.display = "none" ;
    }
  }

function showPictures (index){

  pictures[index].style.display = "block" ;

  }

function nextPicture (){

  hidePictures ();
  showPictures (indexPicture);
  indexPicture++;

    if (indexPicture >= pictures.length) {
      indexPicture = 0;

  }
    console.log(indexPicture);
}

function priviousPicture (){

  hidePictures ();
  showPictures (indexPicture);
  indexPicture--;

    if (indexPicture < 0) {
      indexPicture = pictures.length - 1 ;
  }
}


function slideShow(){

  console.log(pictures[indexPicture].alt);
  hidePictures();
  nextPicture();

}


function picturesDescription (){

  description.innerHTML = pictures[indexPicture].alt;

}

function buttonNext (){

  clearInterval(timer);
  nextPicture();
  setTimeout (setInterval (function () {slideShow()}, 5000),1);

}

function buttonPrivious (){

  clearInterval(timer);
  priviousPicture();
  setTimeout (setInterval (function () {slideShow()}, 5000),1);

}

//-----------------------------SCRIPT-----------------------------------------

showPictures (0);
slideShow();
