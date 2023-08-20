let total =0;
const makePurchase = document.getElementById('btn-purchase');
const couponBtn= document.getElementById('btn-apply');
const couponField = document.getElementById('coupon-code');



makePurchase.addEventListener('click', function(){
  // alert('congratulations! you have purchase the product')
})


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


 if(total>=0){
  makePurchase.removeAttribute('disabled') || couponBtn.removeAttribute('disabled')
 }else{
  makePurchase.setAttribute('disabled', 'true') || couponBtn.setAttribute('disabled', 'true')
 }
 console.log(total)
 
 couponBtn.addEventListener('click', function(){
  const couponFieldValue = couponField.value;
  if(total>200 && couponFieldValue == "SELL200"){
    const discount= total*0.2;
    console.log(discount);
    document.getElementById('discount').innerText= discount;
    const finalTotal = total- discount;
    document.getElementById('final-total').innerText= finalTotal;
  }
})  

}