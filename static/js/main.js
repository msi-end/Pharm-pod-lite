//SLIDER

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// CALL NOW
let callNow = document.querySelector(`#call-now`);
let enquiry = document.querySelector(`#call-now span`);

callNow.addEventListener("click", () => {
  enquiry.classList.toggle(`active`);
  callNow.classList.toggle(`active`);
});
// ABout Know More Text 
const detailContainer = document.querySelector('.details');
detailContainer.addEventListener('click', event=>{
  const detail = event.target;
  const isDetailsmoreBtn = detail.className.includes('detailsMore-btn');
  if(!isDetailsmoreBtn) return;
  const detailText = event.target.parentNode.querySelector('.detailsText');
  detailText.classList.toggle('detailsText--show');
  detail.textContent = detail.textContent.includes('Know More') ?
  "Know Less...." : "Know More...."  
})

//APPOINTMENT FORM
function openForm(){
  let Form = document.querySelector('.form-section');
  Form.style.display = 'block';
}
function closeForm() {
  let form = document.querySelector(`.form-section`);
  form.style.display = "none";
}

// Date Selection 
function dSplit(val, p, t) { let [d, m, y] = val.split(p); return t ? `${y}/${m}/${d}` : `${y}-${m}-${d}` }
function dateFn(e) {
    let dtEm = document.getElementById(e); let tdy = new Date(); if (dtEm) {
        let tdyVal = tdy.toLocaleDateString({ month: "2-digit", year: "numeric", day: "2-digit" })
        let odt = new Date(tdy.setDate(tdy.getDate() - parseInt(dtEm.dataset.min))).toLocaleDateString({ month: "2-digit", year: "numeric", day: "2-digit" });
        let ndt = new Date(tdy.setDate(tdy.getDate() + parseInt(dtEm.dataset.max) + parseInt(dtEm.dataset.min))).toLocaleDateString({ month: "2-digit", year: "numeric", day: "2-digit"});
        dtEm.defaultValue = dSplit(tdyVal, '/', false); dtEm.min = dSplit(odt, '/', false); dtEm.max = dSplit(ndt, '/', false);
    }
}dateFn('formDate');

// ReviewOpen
function openReview(){
  document.querySelector(`.review-fill`).style.display= `block`;
}

//Review form 2nd part
function openRevieweEnd(){
  document.querySelector(`.review-form-end-section`).style.display = `block`;
}

//ALERT CONTAINER
function closeAlert(){
  document.querySelector(`.alert-container`).style.display = `none`;
}
//MY APPOINTMENTS
function openmyapp(){
  document.querySelector(`.customer-app-container`).style.display = `block`;
}

function closemyapp(){
  document.querySelector(`.customer-app-container`).style.display = 'none';
}