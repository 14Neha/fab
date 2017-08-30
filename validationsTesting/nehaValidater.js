function mainValidate() {
  var eles = document.getElementsByClassName("nehaValidaion");
  for(i=0;i<eles.length;i++)
  {
    if(eles[i].getAttribute("domain").length)
    {
      if(/^(([0-9]{0,7})|[a-z.0-9]{1,30})[@][a-z0-9]{2,63}([.][a-z]{2,10})+$/g.test(eles[i].value))
      {
          eles[i].title="perfect";
          eles[i].style.backgroundColor="rgba(0,255,0,0.2)";
      }
      else {

            eles[i].title="Error";
            eles[i].style.backgroundColor="rgba(255,0,0,0.2)"
      }
    }
  }
}
