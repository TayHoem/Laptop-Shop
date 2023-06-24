var name;
window.onload = init;

function init() {
   Today=new Date();
  //  document.getElementById('date').value=Today;
  document.getElementById('date').value=Today.getDate()+"/"+ (Today.getMonth()+1) + "/" +Today.getFullYear();
              
}