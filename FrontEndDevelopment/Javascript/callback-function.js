function main(func){
  var flag=true;
  if(!flag)
     func();
  else
    console.log("Didn't call callback function");
}

var funcCB=()=>{console.log("Callback function is called")}


main(funcCB)