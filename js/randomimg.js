window.onload = choosePic;

var myPix = ["images/art.jpg", "images/backpack.jpg", "images/binder.jpg", "images/books.jpg", "images/class.jpg", "images/friends.jpg", "images/masks.jpg", "images/study.jpg", "images/study2.jpg", "images/teaching.jpg"];

function choosePic() {

    var randomNum = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[randomNum];
}