 let total =0;
function handleCLikBtn(target){
   const selectedItemContainer = document.getElementById("selected-items"); 
 const productName = target.childNodes[3].childNodes[3].innerText;

 const li = document.createElement("li");
 
 li.innerText = productName;

 selectedItemContainer.appendChild(li)

//  console.log(selectedItemContainer.childNodes);
 
 const productPrice =target.childNodes[3].childNodes[5].childNodes[1].innerText.split(" ")[0];
 
 const price = parseFloat(productPrice);


 total +=price;
 document.getElementById("total").innerText = total.toFixed(2);
 console.log(total)
}
