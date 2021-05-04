function changeImage(){
var bo= document.getElementById('lightbulb_off');
if (bo.src.match(light_bulb_off)){
  bo.src='Light_bulb_on.jpg';
}
else{
  bo.src='light_bulb_off.jpg';
}


function resetImg(){
var bi= document.getElementById('lightbulb_off');
if (bi.src.match(console.log(Light_bulb_on))){
  bi.src='light_bulb_off.jpg';
}
else{
  bi.src='Light_bulb_on.jpg';
}

// function resetImg()
// {
//   document.getElementById('lightbulb_off').src='Light_bulb_on.jpg'
// }
