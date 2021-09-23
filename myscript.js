function count()
{
 let content =document.getElementById("tweet").value;
  console.log(content,content.length);
 const totalCount = document.querySelector(".letter-count");
  // if(content.length<=140){
  totalCount.innerHTML=content.length+"/140";
  // }
  // else{
  //   window.alert("maximum char reached");
  // }
  
}