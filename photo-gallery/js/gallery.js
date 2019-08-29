function upDate(previewPic){
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "URL('" + previewPic.src + "')";
       
    imageDiv.innerHTML = previewPic.alt;       
}
   
function unDo(){
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "URL('')";
      
    document.getElementById("image").innerHTML = ("Hover over an image below to display here.");
           
}