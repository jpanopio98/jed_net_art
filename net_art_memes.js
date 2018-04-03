$("body").css("transition","all 3s");
var arr = ["#f00","#0f0","#00f"];
function changeColor(){
   $("body").css({
        backgroundColor : arr[parseInt(Math.random() * 3)]
      });
}
changeColor();
setInterval(changeColor,3000);