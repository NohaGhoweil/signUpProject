
   //background slider
   let i = 0; 			// Start Point
      let images = [];	// Images Array
      let time = 3000;	// Time Between Switch
      
    // Image List
    images[0] = "images/1.jpg";
    images[1] = "images/22.jpg";
    images[2] = "images/3.jpg";
    images[3] = "images/Animal2.jpg";


    // Change Image
    function changeImg(){
      document.getElementById("slider").style.backgroundImage ="url("+images[i]+")" ;

      // Check If Index Is Under Max
      if(i < images.length - 1){
        // Add 1 to Index
        i++; 
      } else { 
        // Reset Back To O
        i = 0;
      }

      // Run function every x seconds
      setTimeout("changeImg()", time);
    }

    // Run function when page loads
    changeImg();
    //endslider




////**************************************************************************************////
    //start changing background color
    let j=0;
const arrayColor=['rgb(3, 41, 56)','rgb(222, 229, 151)','dimgrey'];
function changBackgroundColor(event){
	document.body.style.backgroundColor=arrayColor[j];
	j++;
    if(j>arrayColor.length-1){
	j=0;
}}
const changeColor_btn=document.getElementById("change");
changeColor_btn.addEventListener('click',changBackgroundColor);

/*
//////start change backgroundColor via buttons///////////////////////
function changColor(event){
	console.log(event.target.id);
	document.body.style.backgroundColor=event.target.id;	
}*/



/* hena 3shan lama ados 3la zorar el media tezhar el hagat el f elnav tahtaha f el responsive*/
const linksBtn=document.getElementById("btn");
      linksBtn.addEventListener('click',displayMenue);
     function displayMenue() {
      const links = document.getElementById("links");
      if (links.className == "non-visible") {
        links.className = "visible";
      } else {
        links.className = "non-visible";
      }
}