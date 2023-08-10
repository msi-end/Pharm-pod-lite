let dname = document.querySelector('#dname');
let dspec = document.querySelector('#dspec');
let ddeg = document.querySelector('#ddeg');
let dexp = document.querySelector('#dexp');
let dlang = document.querySelector('#dlang');
let dprice = document.querySelector('.we-ra');
let dasum = document.querySelector('#aboutsum');
let dblog = document.querySelector('#blog');
let docSun = document.querySelector(`.doc-sun`)
let docMon = document.querySelector(`.doc-mon`)
let docTue = document.querySelector(`.doc-tue`)
let docWed = document.querySelector(`.doc-wed`)
let docThu = document.querySelector(`.doc-thu`)
let docFri = document.querySelector(`.doc-fri`)
let docSat = document.querySelector(`.doc-sat`)


const doctor1 = {
    did: 0, Name: `Dr. Upasona Saharia`, specific: 'Gynecologist', deg: 'M.B.B.S,DGO,FAMS', exp: '2-3 Years of experience',
    Lang: ['Assamese', 'Hindi', 'English'], price: `&#8377;350/-`, about: ` Dr. Upasona Saharia is a highly skilled and compassionate gynecologist with diverse qualifications in
 women's health. With an MBBS and specialized DGO, she possesses expertise in Obstetrics and Gynaecology. Her
 commitment to excellence is evident through her recognition as a Fellow of the Academy of Medical Sciences
 (FAMS), reflecting her dedication to staying updated with medical advancements.`, blog: `Dr. Saharia's proficiency in endogynaecology enables
 her to diagnose and treat gynecological conditions using minimally invasive techniques, providing advanced
 and effective care with reduced discomfort and faster recovery.
 Beyond her medical qualifications, Dr. Upasona Saharia is multilingual, fluent in Assamese, Hindi, and
 English, facilitating clear communication with patients from diverse linguistic backgrounds.
 With 2-3 years of experience, she has gained practical exposure in diagnosing, treating, and performing
 procedures for various gynecological conditions. Her compassionate approach fosters trust and comfort,
 creating a supportive environment for her patients' healthcare journey.
 At Breathe Wellness Centre, Dr. Saharia's skills and empathy make her a valuable asset. Actively
 participating in medical conferences, she ensures patients receive up-to-date and evidence-based treatments.
 In conclusion, Dr. Upasona Saharia is a highly accomplished gynecologist with expertise in endogynaecology
 and linguistic abilities, dedicated to providing compassionate and patient-centered care.`, Sunday: `Not Available`, Monday: `09:30 AM - 11:30 PM`, Tuesday: `09:30 AM - 11:30 PM`, Wednesday: `09:30 AM - 11:30 PM`, Thursday: `09:30 AM - 11:30 PM`, Friday: `09:30 AM - 11:30 PM`, Saturday: `09:30 AM - 11:30 PM`
};

const doctor2 = {
    did: 1, Name: `Dr. Ankur Bhattacharya`, specific: `Neuropsychiatrist`, deg: 'M.B.B.S,MD', exp: '4-5 Years of experience',
    Lang: ['Assamese', 'Hindi', 'English'], price: `&#8377;400/-`, about: ` Dr. Ankur Bhattacharya is a seasoned Neuropsychiatrist with a valuable skill set. Holding an MBBS and an MD in Neuropsychiatry, he brings a deep understanding of the intricacies of the human mind. His linguistic versatility in Assamese, Hindi, and English enables him to engage effectively with a diverse range of patients.`, blog: `With 4-5 years of professional experience, Dr. Bhattacharya has honed his expertise in diagnosing and treating complex neurological and psychiatric conditions. His commitment to patient well-being and mental health is commendable.
 Currently contributing his skills to Breathe Wellness Centre, Dr. Bhattacharya plays a vital role in providing holistic mental health care. His ability to communicate in multiple languages makes patients feel understood and valued, facilitating open dialogue and personalized treatment plans.
 Dr. Bhattacharya's empathetic demeanor, extensive experience, and linguistic abilities make him an integral part of the healthcare team. His dedication to enhancing mental health and his role at Breathe Wellness Centre are a testament to his professionalism and commitment to his patients' holistic well-being.`, Sunday: `Not Available`, Monday: `02:00 PM - `, Tuesday: `02:00 PM - `, Wednesday: `02:00 PM - `, Thursday: `02:00 PM - `, Friday: `02:00 PM - `, Saturday: `02:00 PM - `
};

const doctor3 = {
    did: 2, Name: `Dr. Bhaskar Jyoti Pegu`, specific: `Orthopaedic Surgeon`, deg: 'M.B.B.S,MS ', exp: '4-5 Years of experience',
    Lang: ['Assamese', 'Hindi', 'English'], price: `&#8377;450/-`, about: ` Dr. Bhaskar Jyoti Pegu is an accomplished Orthopaedic Surgeon, armed with an MBBS and an MS in Orthopaedic Surgery. His extensive medical education equips him to address a wide array of musculoskeletal issues. Proficient in Assamese, Hindi, and English, Dr. Pegu ensures seamless communication with patients from various backgrounds, promoting effective doctor-patient interactions.`,
    blog: `With a notable 4-5 years of experience, Dr. Pegu has developed a profound understanding of orthopaedic conditions and their treatments. His dedication to improving patients' quality of life is evident through his commitment to delivering exceptional care and exploring innovative solutions.At the esteemed Breathe Wellness Centre, Dr. Bhaskar Jyoti Pegu serves as a pivotal member of the medical team. His linguistic abilities foster an environment of trust and understanding, where patients can openly discuss their concerns and receive personalized treatment plans.
 Dr. Pegu's skillful approach, linguistic versatility, and dedication to patient well-being underscore his significance in the healthcare field. His presence at Breathe Wellness Centre signifies a commitment to comprehensive orthopaedic care, ensuring patients receive top-tier treatment while feeling valued and comprehensively cared for.`, Sunday: `Not Available`, Monday: `04:00 PM - `, Tuesday: `04:00 PM - `, Wednesday: `04:00 PM - `, Thursday: `04:00 PM - `, Friday: `04:00 PM - `, Saturday: `04:00 PM - `
};

const doctor4 = {
    did: 3, Name: `Dr. Rosely Timungpi`, specific: `Skin,Nail and Hair Specialist`, deg: 'M.B.B.S', exp: '2-3 Years of experience',
    Lang: ['Assamese', 'Hindi', 'English'], price: `&#8377;350/-`, about: ` Dr. Rosely Timungpi, a proficient Skin, Nail, and Hair Specialist, possesses a solid foundation with an MBBS degree. Fluent in Assamese, Hindi, and English, she establishes effective communication channels with patients from diverse linguistic backgrounds, ensuring clarity and understanding in their medical interactions.`,
    blog: `With a commendable 2-3 years of experience, Dr. Timungpi has honed her expertise in dermatology, particularly in addressing issues related to skin, nails, and hair. Her commitment to patient satisfaction and well-being is evident through her dedication to providing comprehensive and individualized care.

 Dr. Rosely Timungpi is an essential asset to the medical team at Breathe Wellness Centre. Her linguistic abilities facilitate strong rapport and trust with patients, enabling them to openly discuss their concerns and preferences. This patient-centered approach, combined with her clinical proficiency, ensures that patients receive tailored treatment plans that align with their specific needs.
 
 In her role, Dr. Timungpi underscores Breathe Wellness Centre's commitment to offering holistic healthcare. Her skill set, linguistic flexibility, and compassionate approach collectively contribute to the overall well-being of her patients. Dr. Rosely Timungpi's presence exemplifies the center's dedication to providing comprehensive care for skin, nail, and hair concerns, making her a respected and valued member of the healthcare team.`, Sunday: `Not Available`, Monday: `03:00 PM - `, Tuesday: `03:00 PM - `, Wednesday: `03:00 PM - `, Thursday: `03:00 PM - `, Friday: `03:00 PM - `, Saturday: `03:00 PM - `
};

const doctor5 = {
    did: 4, Name: `Dr. H M Akand`, specific: `General Surgeon`, deg: 'M.B.B.S, MS', exp: '4-5 Years of experience',
    Lang: ['Assamese', 'Hindi', 'English'], price: `&#8377;400/-`, about: ` 
 Dr. H M Akand is a proficient General Surgeon, holding an MBBS and an MS degree. Fluent in Assamese, Hindi, and English, he ensures clear and effective communication with a diverse patient base. With 4-5 years of experience, Dr. Akand brings a wealth of surgical expertise to Breathe Wellness Centre.`,
    blog: `His commitment to patient care and well-being is evident through his dedication to providing comprehensive and individualized treatment. Dr. H M Akand's linguistic abilities play a crucial role in establishing trust and facilitating open discussions with patients, allowing for a better understanding of their surgical options and concerns.

 At Breathe Wellness Centre, Dr. Akand's skills and compassionate approach contribute to the center's commitment to holistic healthcare. His presence underscores the importance of patient-centric care and expertise, making him an invaluable asset in the field of general surgery.`, Sunday: `Not Available`, Monday: `03:00 PM - `, Tuesday: `03:00 PM - `, Wednesday: `03:00 PM - `, Thursday: `03:00 PM - `, Friday: `03:00 PM - `, Saturday: `03:00 PM - `
};

const doctor6 = {
    did: 5, Name: `Dr. Kalyan Borah`, specific: `Emergency & Critical Care`, deg: 'M.B.B.S, MD', exp: '4-5 Years of experience',
    Lang: ['Assamese', 'Hindi', 'English'], price: `&#8377;400/-`, about: ` 
 Dr. Kalyan Borah is an adept Emergency & Critical Care specialist at Breathe Wellness Centre, holding an MBBS and MD degree. Proficient in Assamese, Hindi, and English, he ensures effective communication with a diverse patient base. With 4-5 years of experience, Dr. Borah brings extensive medical knowledge to his role, demonstrating a strong commitment to timely and skilled emergency medical care.`,
    blog: `His linguistic abilities play a pivotal role in establishing rapport with patients, enabling clear discussions about critical conditions and treatment options. Dr. Kalyan Borah's presence enriches Breathe Wellness Centre's commitment to comprehensive healthcare, showcasing his dedication to delivering high-quality and patient-centered emergency and critical care services.`, Sunday: `Not Available`, Monday: `02:00 PM - `, Tuesday: `02:00 PM - `, Wednesday: `02:00 PM - `, Thursday: `02:00 PM - `, Friday: `02:00 PM - `, Saturday: `02:00 PM - `
};

const doctor7 = {
    did: 6, Name: `Dr. Robertson Timung`, specific: `Medicine Specialist`, deg: 'M.B.B.S, MD', exp: '4-5 Years of experience',
    Lang: ['Assamese', 'Hindi', 'English'], price: `&#8377;400/-`, about: ` 
 Dr. Robertson Timung, a proficient Medicine specialist at Breathe Wellness Centre, holds an MBBS and MD degree. Fluent in Assamese, Hindi, and English, he ensures effective communication with a diverse patient base. With 4-5 years of experience, Dr. Timung brings a comprehensive understanding of internal medicine to his practice. `,
    blog: `His linguistic abilities facilitate strong doctor-patient relationships, enabling clear discussions about medical conditions and treatment plans. Dr. Robertson Timung's presence significantly enhances Breathe Wellness Centre's commitment to holistic healthcare, demonstrating his dedication to providing expert and patient-centered medical services.`, Sunday: `Not Available`, Monday: `05:30 PM - `, Tuesday: `05:30 PM - `, Wednesday: `05:30 PM - `, Thursday: `05:30 PM - `, Friday: `05:30 PM - `, Saturday: `05:30 PM - `
};

const doctor8 = {
    did: 7, Name: `Dr. Ziaul Haque`, specific: `ENT Specialist`, deg: 'M.B.B.S, DLO', exp: '9-10 Years of experience',
    Lang: ['Assamese', 'Hindi', 'English'], price: `&#8377;400/-`, about: ` 
 Dr. Ziaul Haque is a skilled ENT specialist at Breathe Wellness Centre, equipped with an MBBS and DLO qualification. Proficient in Assamese, Hindi, and English, he ensures effective communication with a diverse patient population. With an impressive experience of 9-10 years, Dr. Haque brings a wealth of expertise to his role.  `,
    blog: ` His linguistic abilities foster strong doctor-patient relationships, facilitating clear discussions about ear, nose, and throat concerns and treatment options. Dr. Ziaul Haque's presence significantly amplifies Breathe Wellness Centre's dedication to comprehensive healthcare, underscoring his commitment to delivering specialized and patient-centered ENT services.`, Sunday: `Not Available`, Monday: `07:30 PM - `, Tuesday: `07:30 PM - `, Wednesday: `07:30 PM - `, Thursday: `07:30 PM - `, Friday: `07:30 PM - `, Saturday: `07:30 PM - `
};

const doctor9 = {
    did: 8, Name: `Dr. Kamal Hassan`, specific: `Urologist`, deg: 'M.B.B.S, MS, DrNB', exp: '9-10 Years of experience',
    Lang: ['Assamese', 'Hindi', 'English'], price: `&#8377;500/-`, about: ` 
 Dr. Kamal Hassan is a distinguished Urologist with extensive qualifications including an MBBS, MS, and DrNB. Proficient in Assamese, Hindi, and English, he ensures clear communication with a diverse patient base. With an impressive 9-10 years of experience, Dr. Hassan brings profound expertise to his role.   `,
    blog: `  His linguistic abilities foster strong doctor-patient relationships, facilitating thorough discussions about urological concerns and treatment options. Dr. Kamal Hassan's contributions to both Breathe Wellness Centre and Apollo Hospitals underscore his commitment to delivering specialized and patient-centered urological care, further enhancing these reputable healthcare establishments.`, Sunday: `Not Available`, Monday: `00:00 PM - `, Tuesday: `00:00 PM - `, Wednesday: `00:00 PM - `, Thursday: `00:00 PM - `, Friday: `00:00 PM - `, Saturday: `00:00 PM - `
};

const doctor10 = {
    did: 9, Name: `Dr. Aditya Gautam`, specific: `Super Specialist Doctor for Diabetes & Endocrinology Problems`, deg: `M.B.B.S, MD(JIPMER), DM(Amrita Institute, Kochi)`, exp: '9-10 Years of experience',
    Lang: ['Hindi', 'English'], price: `&#8377;500/-`, about: ` 
 ${doctor10.Name} is a distinguished Urologist with extensive qualifications including an M.B.B.S, MD(JIPMER), DM(Amrita Institute, Kochi). Proficient in Hindi, and English, he ensures clear communication with a diverse patient base. With an impressive 9-10 years of experience, Dr. Hassan brings profound expertise to his role.   `,
    blog: `  His linguistic abilities foster strong doctor-patient relationships, facilitating thorough discussions about urological concerns and treatment options. Dr. Aditya Gautam's contributions to Breathe Wellness Centre underscore his commitment to delivering specialized and patient-centered care, further enhancing these reputable healthcare establishments.`, Sunday: `Not Available`, Monday: `00:00 PM - `, Tuesday: `00:00 PM - `, Wednesday: `00:00 PM - `, Thursday: `00:00 PM - `, Friday: `00:00 PM - `, Saturday: `00:00 PM - `
};

let doctors = [doctor1, doctor2, doctor3, doctor4, doctor5, doctor6, doctor7, doctor8, doctor9, doctor10];

dname.innerHTML = doctors[0].Name;
dspec.innerHTML = doctors[0].specific;
ddeg.innerHTML = doctors[0].deg;
dexp.innerHTML = doctors[0].exp;
dlang.innerHTML = doctors[0].Lang;
dprice.innerHTML = doctors[0].price;
dasum.innerHTML = doctors[0].about
dblog.innerHTML = doctors[0].blog;
docSun.innerHTML = doctors[0].Sunday;
docMon.innerHTML = doctors[0].Monday;
docTue.innerHTML = doctors[0].Tuesday;
docWed.innerHTML = doctors[0].Wednesday;
docThu.innerHTML = doctors[0].Thursday;
docFri.innerHTML = doctors[0].Friday;
docSat.innerHTML = doctors[0].Saturday;

function getValu() {
    let a = document.getElementById('doctors');
    let v = Number(a.value);
    for (let i = 0; i >= 0; i++) {
        if (v == doctors[i].did) {
            dname.innerHTML = doctors[i].Name;
            dspec.innerHTML = doctors[i].specific;
            ddeg.innerHTML = doctors[i].deg;
            dexp.innerHTML = doctors[i].exp;
            dlang.innerHTML = doctors[i].Lang;
            dprice.innerHTML = doctors[i].price;
            dasum.innerHTML = doctors[i].about
            dblog.innerHTML = doctors[i].blog;
            docSun.innerHTML = doctors[i].Sunday;
            docMon.innerHTML = doctors[i].Monday;
            docTue.innerHTML = doctors[i].Tuesday;
            docWed.innerHTML = doctors[i].Wednesday;
            docThu.innerHTML = doctors[i].Thursday;
            docFri.innerHTML = doctors[i].Friday;
            docSat.innerHTML = doctors[i].Saturday;
        }
    }
}