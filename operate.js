// slide
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex-1].className += " active";
}
// slide close

// cart
// function upadateCaseNumber(product, price, isIncreasing){
//   const caseInput = document.getElementById(product + '-number');
//   let caseNumber = caseInput.value;
//           if(isIncreasing){
//               caseNumber = parseInt(caseNumber) + 1;
//           }
          
//   else if(caseNumber > 0){
//          caseNumber = parseInt(caseNumber) - 1;
//        }
      
//       caseInput.value = caseNumber;
//   // update case total 
//   const caseTotal = document.getElementById(product + '-total');
//   caseTotal.innerText = caseNumber * price;
//   calculateTotal();
//   }


//   function getInputvalue(product){
//       const productInput = document.getElementById(product + '-number');
//       const productNumber = parseInt(productInput.value);
//       return productNumber;
//   }
//   function calculateTotal(){
//       const phoneTotal = getInputvalue('phone') * 120;
//       const caseTotal = getInputvalue('case') * 10;
//       const subTotal = phoneTotal + caseTotal;
//       const tax = subTotal / 10;
//       const totalPrice = subTotal + tax;

//       // update on the html 
//       document.getElementById('sub-total').innerText = subTotal;
//       document.getElementById('tax-amount').innerText = tax;
//       document.getElementById('total-price').innerText = totalPrice;

//   }





// document.getElementById('case-plus').addEventListener('click',function(){
//       // const caseInput = document.getElementById('case-number');
//       // const caseNumber = caseInput.value;
//       // caseInput.value = parseInt(caseNumber) + 1;
//  upadateCaseNumber('case', 10 ,true);
// });

// document.getElementById('case-minus').addEventListener('click',function(){
//   // const caseInput = document.getElementById('case-number');
// //     const caseNumber = caseInput.value;
// //    if(caseInput.value > 1){
// //         caseInput.value = parseInt(caseNumber) - 1;
// //    }
// upadateCaseNumber('case', 10, false);
// });

// // phone prcie update using add event linstner 
// document.getElementById('phone-plus').addEventListener('click',function(){
//   upadateCaseNumber('phone',120, true);
// });


// document.getElementById('phone-minus').addEventListener('click',function(){
//   upadateCaseNumber('phone',120 , false);
// });

// cart close

// cart
function upadateCaseNumber(product, price, isIncreasing){
  const caseInput = document.getElementById(product + '-number');
  let caseNumber = caseInput.value;
          if(isIncreasing){
              caseNumber = parseInt(caseNumber) + 1;
          }
          
  else if(caseNumber > 0){
         caseNumber = parseInt(caseNumber) - 1;
       }
      
      caseInput.value = caseNumber;
  const caseTotal = document.getElementById(product + '-total');
  caseTotal.innerText = caseNumber * price;
  calculateTotal();
  }


  function getInputvalue(product){
      const productInput = document.getElementById(product + '-number');
      const productNumber = parseInt(productInput.value);
      return productNumber;
  }
  function calculateTotal(){
      const phoneTotal = getInputvalue('phone') * 120;
      const caseTotal = getInputvalue('case') * 10;
      const subTotal = phoneTotal + caseTotal;
      const tax = subTotal / 10;
      const totalPrice = subTotal + tax;

      document.getElementById('sub-total').innerText = subTotal;
      document.getElementById('tax-amount').innerText = tax;
      document.getElementById('total-price').innerText = totalPrice;

  }





document.getElementById('case-plus').addEventListener('click',function(){
      // const caseInput = document.getElementById('case-number');
      // const caseNumber = caseInput.value;
      // caseInput.value = parseInt(caseNumber) + 1;
 upadateCaseNumber('case', 10 ,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
  // const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//    if(caseInput.value > 1){
//         caseInput.value = parseInt(caseNumber) - 1;
//    }
upadateCaseNumber('case', 10, false);
});

document.getElementById('phone-plus').addEventListener('click',function(){
  upadateCaseNumber('phone',120, true);
});


document.getElementById('phone-minus').addEventListener('click',function(){
  upadateCaseNumber('phone',120 , false);
});
// cart close