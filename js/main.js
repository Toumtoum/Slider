
//----------------------------VARIABLES-------------------------------------

var pictures = document.getElementsByClassName('mySlides');
var i;
var indexPicture = 0;





//----------------------------FONCTIONS--------------------------------------


function hidePictures (){

  for (i = 0; i < pictures.length; i++){
    pictures[i].style.display = "none" ;
    }
  }

function showPictures () {

  pictures[indexPicture].style.display = "block" ;

  }

function nextPicture (){

  hidePictures ();
  pictures[indexPicture].style.display = "block" ;
  indexPicture++;

    if (indexPicture >= pictures.length) {
      indexPicture = 0;
  }
}

function priviousPicture (){

  hidePictures ();
  pictures[indexPicture].style.display = "block" ;
  indexPicture--;

    if (indexPicture <= 0) {
      indexPicture = pictures.length - 1 ;
  }
}


function slideShow(){

  showPictures ();
  setInterval (nextPicture, 3000);

}





//-----------------------------SCRIPT-----------------------------------------


slideShow();
console.log(indexPicture);

// document.getElementById('previous').click(priviousPicture());
// document.getElementById('next').click(nextPicture());
