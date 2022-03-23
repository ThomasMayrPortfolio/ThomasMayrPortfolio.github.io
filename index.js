const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const toggleNightmode = document.querySelector('.toggle-nightmode');

navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

let selcetedSection = document.getElementsByClassName('cv')[0];
let isHidden = false;

window.addEventListener(
'scroll', 
function() 
{
    console.log(`scrolling has reached ${window.pageYOffset}`);
    if(window.pageYOffset > 150 && isHidden == false)
    {
        selcetedSection.classList.add("hidden");
      isHidden = true;
    }
}
);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 

const langEl = document.querySelector('.langWrap');
		const link = document.querySelectorAll('a');
		const titleEl = document.querySelector('.title');
		const descrEl = document.querySelector('.description');

		link.forEach(el => {
			el.addEventListener('click', () => {
				langEl.querySelector('.active').classList.remove('active');
				el.classList.add('active');

				const attr = el.getAttribute('language');

				titleEl.textContent = data[attr].title;
				descrEl.textContent = data[attr].description;
			});
		});
		
		var data = {
			  "english": 
			  {
			    "title": "Hello World",
			    "description": 
				    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non adipisci eligendi repellat ad dolor veritatis itaque sequi minus iste, doloremque. Officiis non eaque atque excepturi repudiandae nulla eos eligendi magni molestiae eius distinctio, voluptas pariatur incidunt et culpa inventore aspernatur recusandae nihil asperiores, vitae, maiores laborum quasi perspiciatis natus dignissimos! Accusantium aliquam nostrum impedit dignissimos iste, iure inventore! Sapiente, labore earum ut dicta ducimus asperiores laudantium natus officiis, quisquam placeat aspernatur voluptatum aut voluptates tenetur quos magni fugit quia. Fugiat."
			  },
			  "deutsch": 
			  {
			    "title": "",
			    "description" : ""
			  }
			}

      function toggleDarkMode() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      } 

