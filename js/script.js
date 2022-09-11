window.addEventListener('scroll', () => {
   let content = document.querySelector('.videos');
   let contentPosition = content.getBoundingClientRect().top;
   let screenPosition = window.innerHeight;
   if (contentPosition < screenPosition) {
      content.classList.add('active');
   } else {
      content.classList.remove('active');
   }
});

document.querySelectorAll('.image_grid img').forEach(image => {
   image.onclick = () => {
      document.querySelector('.popup_image').style.display = 'block';
      document.querySelector('.popup_image img').src = image.getAttribute('src');
   }
});

document.querySelector('.popup_image span').onclick = () => {
   document.querySelector('.popup_image').style.display = 'none';
}