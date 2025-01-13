import productData from './productData.js';
console.log("productData",productData )

// slider
document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
        768: { slidesPerView: 4 },
        480: { slidesPerView: 1 },
      },
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    if (productData[productId]) {
      const product = productData[productId];
  
      // Update product details
      document.getElementById('productName').textContent = product.name;
      document.getElementById('productPrice').textContent = product.price;
      document.getElementById('productDescription').textContent = product.description;
  
      // Display specifications
      const specsElement = document.getElementById('productSpecifications');
      const referButton = document.getElementById('indiamartbtn');
      referButton.href = product.link;
       referButton.textContent = "Refer on IndiaMART";

      specsElement.innerHTML = Object.entries(product.specifications)
        .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
        .join('');
  
      // Update images
      const thumbnails = document.querySelector('.thumbnails');
      thumbnails.innerHTML = product.images
        .map((src) => `<img src="${src}" alt="Thumbnail" onclick="changeImage('${src}')">`)
        .join('');
  
      // Set main image
      changeImage(product.images[0]);
    }
  });
  
  function changeImage(src) {
    document.getElementById('mainImage').src = src;
  }
  window.changeImage = changeImage;


//   modal

document.getElementById('interested-btn').addEventListener('click', function () {
    const dialog = document.getElementById('dialogBox');
    dialog.showModal(); // Opens the dialog as a modal
  });

  const dialog = document.getElementById('dialogBox');
  dialog.addEventListener('close', () => {
    console.log('Dialog closed');
  });