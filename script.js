function menuClick(var1) {
   console.log(var1)
 
  document.getElementsByClassName('show')[0].className='hide';
  
  document.getElementById(var1).className="show";
}
