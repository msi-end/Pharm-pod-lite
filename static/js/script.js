const APImain = 'https://cipmedic.com';
const userName = 'BreatheWellness';
let ReqHandler = {
  GET: async function (url) {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8", }
    }); return response.json();
  },
  POST: async function (url, data) {
    console.log(url)
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8", },
      body: JSON.stringify(data)
    }); return response.json();
  }
}
let ReqURI = { FormSet: APImain + '/apiV2/crt?user=', GetDoc: `${APImain}/apiV2/getDoc?user=`, GetRevColl: APImain + '/apiV2/fn/', GetRevrat: APImain + '/apiV2/revv/', POSTRev: APImain + '/apiV2/rv' }
async function displayDataWithRateandRev() {
  let dataWithRevRat = await ReqHandler.GET(ReqURI.GetRevColl + userName)
  dataWithRevRat.data.forEach(ell => {
    let clinic = document.getElementById('heading').childNodes;
    clinic[1].innerHTML = `${ell.star.toFixed(1)}&#9733;`;
    clinic[3].innerHTML = `(${ell.total_review}+ Ratings)`;
  })
}
async function DataOfRevrat() {
  let revRat = await ReqHandler.GET(ReqURI.GetRevrat + userName);
  let s = 4;
  let box = document.getElementById('review')
  console.log(revRat.data)
  revRat.data.forEach((el) => {
    let str = '<label for="4" class="uis uis-star"></label> '
    let str4 = '<label for="4" class="uis uis-star"></label> <label for="4" class="uis uis-star"></label> <label for="4" class="uis uis-star"></label>  <label for="4" class="uis uis-star"></label>'
    let html = `<p><i class="uil uil-user-square"></i>
      <span>${el.userName}</span>
    </p>
    <div class="flexBox">
    ${s === 1 ? str : ''}
    ${s === 2 ? `${str}${str}` : ''}
    ${s === 3 ? `${str}${str}${str}` : ''}
    ${s === 4 ? `${str}${str}${str}${str}` : ''}
    ${s === 5 ? `${str}${str}${str}${str}${str}` : ''}
    </div>
    <p id="review-section-text">${el.review}</p>
    <hr>`
    if (el.review != null) { box.insertAdjacentHTML('afterbegin', html); }
  })
}

displayDataWithRateandRev();
DataOfRevrat();

function closeReviewEnd() {
  document.querySelector(`.review-form-end-section`).style.display = `none`;
  document.querySelector(`.review-fill`).style.display = "none";
}

function closeReviewfill() {
  document.querySelector(`.review-fill`).style.display = "none";
}

//3rd part ===============submitting star and review-----------------------

const star = document.querySelectorAll("#star");
let a;
star.forEach((el) => { el.addEventListener("click", () => { a = el.dataset.val; }) })
const submitReview = document.getElementById('submit-review');
async function getRatePoint() {
  const revForm = document.querySelector('.review-form-end-container').childNodes;
  let review = document.getElementById('cus-review').value;
  let name = revForm[5].childNodes[3].value;
  let email_id = revForm[7].childNodes[3].value;
  let validationRes = { nValid: valid.regName(name), eValid: valid.regEmail(email_id) };
  if (validationRes.nValid === true && validationRes.eValid === true) {
    closeReviewfill()
    closeReviewEnd()
    const valu = { idNum: 'BreatheWellness', rating: a, review: review, u_name: name, mail: email_id };
    await ReqHandler.POST(ReqURI.POSTRev, valu);
    // console.log(SendRatRev)
  } else { document.getElementById('err-Msg').innerHTML = 'Name and Email is required properly!' }
}
submitReview.addEventListener('click', getRatePoint);

//validation form--------------------------------
let valid = {
  pat: {
    pat1: /^[A-Za-z. ]+$/, pat3: /^[A-Za-z.@0-9 ]+$/, pat4: /[@]/g, pat5: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, pat6: /^\+?[1-9][0-9]{9}$/
  },
  regTextBox: function (val) {
    if (val === '' || this.pat.pat3.test(val)) { return true; } else { return 'Character are invalid!' }
  }, regEmail: function (val) {
    let v = val.replace(/\s/g, "")
    if (this.pat.pat5.test(v)) { return true; } else { return 'Invalid Email'; }
  }, regNumber: function (val) {
    if (this.pat.pat6.test(val)) { return true; } else { return 'Invalid Number' }
  }, regName: function (val) {
    if (this.pat.pat1.test(val)) { return true; } else { return 'Invalid Name' }
  }, regReq: function (val) {
    if (val === '') { return false; } else { return true }
  },
  ValResult: function result(name, number, date, text) {
    let result = { reName: this.regName(name), reNumber: this.regNumber(number), reText: this.regTextBox(text) }
    let fieldEmpty = { reEmptya: this.regReq(name), reEmptyc: this.regReq(number), reEmptyd: this.regReq(date) };
    if (fieldEmpty.reEmptya === true && fieldEmpty.reEmptyc === true && fieldEmpty.reEmptyd === true) {
      if (result.reName != true) { return result.reName; }
      else if (result.reNumber != true) { return result.reNumber; } else if (result.reText != true) {
        return result.reText;
      } else { return true; }
    } else { return 'Field cant be empty!'; }
  }
}

function proceedForm() {
  document.querySelector(`.form-first`).style.display = "none";
  document.querySelector(".form-second").style.display = "block";
  document.querySelector(`.arrow-btn`).style.display = "block";
}
function backForm() {
  document.querySelector(`.form-first`).style.display = "block";
  document.querySelector(".form-second").style.display = "none";
  document.querySelector(`.arrow-btn`).style.display = "none";
}


let doc = document.getElementsByClassName('form-first')[0].children;

// Date Manupulations 
function dSplit(val, p, t) { let [d, m, y] = val.split(p); return t ? `${y}/${m}/${d}` : `${y}-${m}-${d}` }

const userReq = {
  FormSet: function (data) {
    document.querySelector(`#circleLoad`).style.display = `block`;
    document.querySelector(`#text`).innerHTML = '';
    ReqHandler.POST(ReqURI.FormSet + 'BreatheWellness', data).then((dat) => {
      if (dat.status) { 
        document.querySelector(`#circleLoad`).style.display = `none`
        document.querySelector(`#text`).innerHTML = 'Book Appointment';
        correctAlert(); myappointment(data) } else { wrongAlert(); }
    })
  },
  CheckDoc: function () {
    document.querySelector(`#loader`).style.display = `block`;
    let input_date = dSplit(document.getElementById('formDate').value, '-', true);
    ReqHandler.GET(ReqURI.GetDoc + 'BreatheWellness').then((e) => {
      let docCtn = document.getElementById('regnDoctor')
      docCtn.innerHTML = '';
      if (e) {
        for (let i = 0; i < e.data.length; i++) {
          // console.log(e.data[i].status !== 'false' && e.data[i].day !== input_date);
          if (e.data[i].status !== 'false') {
            docCtn.innerHTML += `<option value="${e.data[i].d_name}">Dr. ${e.data[i].d_name}</option>`
          } else if (e.data[i].status == 'false' && e.data[i].day !== input_date) {
            docCtn.innerHTML += `<option value="${e.data[i].d_name}">Dr. ${e.data[i].d_name}</option>`
          }
        }
        document.querySelector(`#loader`).style.display = `none`;
        
      } else { console.log('Get doc ,() not working') }
    })
    

  }
}

function proceed_bej() {
  let ap_date = dSplit(doc[2].childNodes[3].value, '-', true)
  let data = { name: doc[0].childNodes[3].value, number: doc[1].childNodes[3].value, date: ap_date, otherInfo: doc[3].childNodes[3].value }
  let res = valid.ValResult(data.name, data.number, data.date, data.otherInfo);
  if (res === true) { proceedForm(); document.getElementById('err-msg').innerHTML = '' } else { document.getElementById('err-msg').innerHTML = res; }
}

function fixApp() {
  let dataform = document.querySelector('.form-second').childNodes[3];
  console.log(dataform)
  let ap_date = dSplit(doc[2].childNodes[3].value, '-', true)
  let data = { name: doc[0].childNodes[3].value, number: doc[1].childNodes[3].value, doctor: dataform.childNodes[2].value, date: ap_date, otherInfo: doc[3].childNodes[3].value };
  userReq.FormSet(data);
}
function correctAlert() {
  document.querySelector(`.alert-container`).style.display = 'block';
  document.querySelector(`#samoa`).style.display = 'none';
  document.querySelector(`.form-section`).style.display = `none`;
}
function wrongAlert() {
  document.querySelector(`.alert-container`).style.display = 'block';
  document.querySelector(`#singu`).style.display = 'none';
  document.querySelector(`#leuy`).textContent = `Appointment is not Confirmed`;
  document.querySelector(`#aneo`).style.display = 'block';
  document.querySelector(`#hula`).style.display = `none`;
  document.querySelector(`.form-section`).style.display = `none`;
}

function d______T(param) {
  let datewrongformat = param.split('/');
  const correctDate = `${datewrongformat[1]}/${datewrongformat[0]}/${datewrongformat[2]}`
  const paramDate = new Date(correctDate).toLocaleDateString();
  if (paramDate === new Date().toLocaleDateString()) {
    console.log('Matching with today date');
    return true;
  } else { return false; }
}

function availDoc() {
  const container = document.querySelector('.active-container');
  ReqHandler.GET(ReqURI.GetDoc + 'BreatheWellness').then((data) => {
    // console.log(data.data)
    data.data.forEach((el) => {
      let d = d______T(el.day);
      let htmlactive = `<div class="avail-circle">
      <div class="image active">
        <img src="/static/img/doctors/${el.d_name.split(' ')[0].toLowerCase()}.jpg" alt="Doctor" class="" />
      </div>
      <p class="small">Dr ${el.d_name}</p>
      <p class="small">
        <span class="dot active"></span><span class="swal active">Available</span>
      </p>
    </div>`;
      let htmlinactive = `<div class="avail-circle">
    <div class="image inactive">
      <img src="/static/img/doctors/${el.d_name.split(' ')[0].toLowerCase()}.jpg" alt="Doctor" class="" />
    </div>
    <p class="small">Dr ${el.d_name}</p>
    <p class="small">
      <span class="dot inactive"></span><span class="swal inactive">Not Available</span>
    </p>
  </div>`
      if (d) {
        if (el.status == 'true') { container.innerHTML += htmlactive; } else { container.innerHTML += htmlinactive; }
      } else { container.innerHTML += htmlactive; }
    });
  })
}
setTimeout(availDoc, 1000)

function myappointment(data) {
  if (localStorage.getItem('myappointment') === null) {
    localStorage.setItem('myappointment', JSON.stringify({app1: data}));
    let app = JSON.parse(localStorage.getItem('myappointment'));
    renderAppo(app);
  } else {
    let app = JSON.parse(localStorage.getItem('myappointment'));
    let newapp = `app${Object.keys(app).length + 1}`;
    // let appo = JSON.parse(app, (key, value) => {return value;})
    app[newapp] = data;
    localStorage.setItem('myappointment', JSON.stringify(app));
    renderAppo(app);
  }
}

function renderAppo(info) {
  for (const key in info) {
    if (info.hasOwnProperty(key)) {
      value = info[key];
      console.log(value);
      let html = `<div class="box">
      <h3 class="name">${value.name}</h3>
      <p class="number">${value.number}</p>
      <p class="dr-name">${value.doctor}</p>
      <p class="add-info"><span>Add. Info: </span>${value.otherInfo}</p>
      <p class="app-status">Status: <span class="stat">Confirmed</span></p>
      <p class="app-date">Date: <span>${value.date}</span></p>
      <!-- ---- active class in stat makes it red-----  -->
    </div>`
    document.getElementById('my-appo').innerHTML += html; 
    }
  }
}














