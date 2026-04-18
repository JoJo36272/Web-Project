/*
Name: John
Date: 10/04/2026
*/
let currentImg = 1;
function swap() {
    let imgNum = this.id;
    imgNum = imgNum.charAt(4);
    currentImg = imgNum;
    document.getElementById("mainImg").src = "Images/gallaryImg/img" + imgNum + ".jpg";
}

function next() {
    if (currentImg == 6) {
        document.getElementById('mainImg').src = "Images/gallaryImg/img1.jpg";
        currentImg = 1;
    }
    else {
        currentImg++;
        document.getElementById("mainImg").src = "Images/gallaryImg/img" + currentImg + ".jpg";
    }
}
function previous() {
    if (currentImg == 1) {
        document.getElementById('mainImg').src = "Images/gallaryImg/img6.jpg";
        currentImg = 6;
    }
    else {
        currentImg--;
        document.getElementById("mainImg").src = "Images/gallaryImg/img" + currentImg + ".jpg";
    }
}