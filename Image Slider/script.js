const images=[
    "image/img1.jpg",
    "image/img2.jpg",
    "image/img3.jpg",
    "image/img4.jpg",
    "image/img5.jpg",
    "image/img6.jpg"
];
let index=0;
let image=document.getElementById("image");

function next(){
    index++;
    if(index>=images.length){
        index=0;
    }
    image.src=images[index];
}
function privous(){
    index--;
    if(index<0){
        index=images.length-1;
    }
    image.src=images[index];

}