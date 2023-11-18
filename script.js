const button=document.querySelector('#btn');
button.addEventListener('click', calculerSoldes);

function calculerSoldes(e){
    e.preventDefault();
    const price=document.querySelector('#price').value;
    const sale=document.querySelector('#sale').value;
if( price==="0" || price===""){
    Swal.fire({
        title: 'Введите цену',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
}
 let newPrice =price * ((100-sale)/100);
 let saleAmount = price-newPrice;
 
 document.querySelector('#newPrice').textContent=newPrice.toFixed(2);
 document.querySelector('#saleAmount').textContent=saleAmount.toFixed(2);

}



