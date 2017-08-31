function mainValidate() {
  var eles = document.getElementsByClassName("nehaValidaion");
  for(i=0;i<eles.length;i++)
  {
    if(eles[i].getAttribute("domain").length)
    {
      email12(eles[i]);
    }
  }
}
function email12(ele){

ele.addEventListener("keyup",function () {
  if(/^(([0-9]{0,7})|[a-z.0-9]{1,30})[@][a-z0-9]{2,63}([.][a-z]{2,10})+$/g.test(this.value))
        {
            this.title="perfect";
            this.style.backgroundColor="rgba(0,255,0,0.2)";
        }
        else {

              this.title="Error";
              this.style.backgroundColor="rgba(255,0,0,0.2)"
        }
})
}
