console.log('welcome');
async function FETchData(link) {
    let res = await fetch(`${link}`);
    return await res.json(); 
  }
  
  async function displayDataWithRateandRev() {
    let dataWithRevRat = await FETchData(`http://localhost:8000/apiV3/r/fn/min01`)
    dataWithRevRat.forEach(ell => {let clinic = document.getElementById('heading').childNodes;
      clinic[1].innerHTML = `${ell.star.toFixed(1)}&#9733;`;
      clinic[3].innerHTML = `(${ell.total_review}+ Ratings)`;
    })
  }
    async function DataOfRevrat() {
      let revRat =  await FETchData(`http://localhost:8000/apiV3/r/revv/min01`);
      let box = document.getElementById('review')
      revRat.forEach((el) => {
        let str = ' <label for="4" class="uis uis-star"></label>'
        let str2 = ' <label for="4" class="uis uis-star"></label> <label for="4" class="uis uis-star"></label>'
        let str3 = ' <label for="4" class="uis uis-star"></label> <label for="4" class="uis uis-star"></label> <label for="4" class="uis uis-star"></label>'
        let str4 = ' <label for="4" class="uis uis-star"></label> <label for="4" class="uis uis-star"></label> <label for="4" class="uis uis-star"></label>  <label for="4" class="uis uis-star"></label>'
        let html = `<p><i class="uil uil-user-square"></i>
        <span>${el.userName}</span>
      </p>
      <div class="flexBox">
      ${str}${str2}
      </div>
      <p id="review-section-text">${el.review}</p>
      <hr>`
   if (el.review != null) { box.insertAdjacentHTML('afterbegin', html);}
    })
}
  
  displayDataWithRateandRev();
  DataOfRevrat();

  function closeReviewEnd(){
    document.querySelector(`.review-form-end-section`).style.display = `none`;
    document.querySelector(`.review-fill`).style.display = "none";
  }

  function closeReviewfill() {
    document.querySelector(`.review-fill`).style.display = "none";
  }

  //3rd part ===============submitting star and review-----------------------
const star = document.querySelectorAll("#star");
let a;
star.forEach((el)=> {el.addEventListener("click", ()=>{a = el.dataset.val;})})
const submitReview = document.getElementById('submit-review');
async function getRatePoint() {
  const revForm = document.querySelector('.review-form-end-container').childNodes;
  let review = document.getElementById('cus-review').value;
  let name = revForm[5].childNodes[3].value;
  let email_id = revForm[7].childNodes[3].value;
  let validationRes = {nValid: valid.regName(name), eValid: valid.regEmail(email_id)};
if (validationRes.nValid === true && validationRes.eValid === true) {
    closeReviewfill()
    closeReviewEnd()
  let valu = {idNum: 'min01',rating: a, review: review, u_name: name, mail: email_id};
  const SendRatRev = await fetch('http://localhost:8000/apiV3/r/rv', {method: 'POST',body: JSON.stringify(valu),headers: {'Content-Type': 'application/json'}});
  const result = await SendRatRev.json();
  console.log(result)
//   Obj.flashMsg(result.msg, '', 200);
}else{document.getElementById('err-Msg').innerHTML = 'Name and Email is required properly!'}} 
submitReview.addEventListener('click', getRatePoint);


  
//validation form--------------------------------
let valid = {
    pat: {
      pat1: /^[A-Za-z. ]+$/, pat3:/^[A-Za-z.@0-9 ]+$/, pat4: /[@]/g, pat5: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, pat6 : /^\+?[1-9][0-9]{9}$/
    },
    regTextBox: function (val) {
      if (val === '' || this.pat.pat3.test(val)) {return true;}else{return 'Character are invalid!'}
    }, regEmail: function (val) {
      let v = val.replace(/\s/g,"")
      if (this.pat.pat5.test(v)) { return true; } else { return 'Invalid Email'; }
    }, regNumber: function (val) {
      if (this.pat.pat6.test(val)) {return true;}else{return 'Invalid Number'}
    }, regName: function (val) {
       if (this.pat.pat1.test(val)) {return true;}else{return 'Invalid Name'}
    }, regReq: function (val) {
      if (val === '') {return false;} else { return true }
    },
    ValResult: function result(name, number, date, text) {
      let result = {reName: this.regName(name), reNumber: this.regNumber(number), reText: this.regTextBox(text)}
      let fieldEmpty = { reEmptya: this.regReq(name), reEmptyc: this.regReq(number), reEmptyd : this.regReq(date) };
      if (fieldEmpty.reEmptya === true && fieldEmpty.reEmptyc === true && fieldEmpty.reEmptyd === true) {
        if (result.reName != true) { return result.reName;} 
      else if (result.reNumber != true) {return result.reNumber;} else if (result.reText != true) {return result.reText;
        } else { return true; }} else { return 'Field cant be empty!'; }
    }
  }

  function proceedForm(){
    document.querySelector(`.form-first`).style.display ="none";
    document.querySelector(".form-second").style.display = "block";
    document.querySelector(`.arrow-btn`).style.display = "block";
  }
  function backForm() {
     document.querySelector(`.form-first`).style.display ="block";
    document.querySelector(".form-second").style.display = "none";
    document.querySelector(`.arrow-btn`).style.display = "none";
  }

  function dSplit(val, p, t) { let [d, m, y] = val.split(p); return t ? `${y}/${m}/${d}` : `${y}-${m}-${d}` }

let doc = document.getElementsByClassName('form-first')[0].children;
console.log(doc[3].childNodes[3])
let ReqURI = { FormSet: 'http://localhost:8000' + '/apiV3/add?user=' }
let ReqHandler = {
  GET: async function (url) {
    const response = await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json; charset=UTF-8", }
    }); return response.json();
  },
  POST: async function (url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8", },
      body: JSON.stringify(data)
    }); return response.json();
  }
}
const userReq = {
  FormSet: function (data) {
    ReqHandler.POST(ReqURI.FormSet + 'min01', data).then((data) => {
     if (data.status) { 
        console.log('Appointment Boooked')
       }
    })
  }
}

  function proceed_bej() {
    let ap_date = dSplit(doc[2].childNodes[3].value, '-', true)
    let data = { name: doc[0].childNodes[3].value, number: doc[1].childNodes[3].value, date: ap_date, otherInfo: doc[3].childNodes[3].value}
    let res = valid.ValResult(data.name, data.number, data.date, data.otherInfo);
     if (res === true) {proceedForm();document.getElementById('err-msg').innerHTML = ''}else{document.getElementById('err-msg').innerHTML = res;}
  }

  function fixApp() {
    let dataform = document.querySelector('.form-second').childNodes[1];
    let ap_date = dSplit(doc[2].childNodes[3].value, '-', true)
    let data = { name: doc[0].childNodes[3].value, number: doc[1].childNodes[3].value,doctor: dataform.childNodes[5].value, date: ap_date, otherInfo: doc[3].childNodes[3].value};
    console.log(dataform.childNodes[5].value);
    userReq.FormSet(data);
  }


 