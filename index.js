Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  "1FGazj3rw3I8Z71n2wR72oyTl4mWCua1rgnOI87x", // This is your Application ID
  "Vb8bHHLzMGgTCvSUzC9cH3JdMyWbvC9mmQPdeuIe" // This is your Javascript key
);

const CVdata = Parse.Object.extend("CVdata");

const ulHardSkills = document.getElementById('hardSkills');
const ulSoftSkills = document.getElementById('softSkills');
const ulLanguages = document.getElementById('languages');
const ulHobbies = document.getElementById('hobbies');
const h1Name = document.getElementById('name');
const h2Role = document.getElementById('role');
const numberTxt = document.getElementById('number');
const emailTxt = document.getElementById('email');
const aboutMeTxt = document.getElementById('aboutMe');
const expTxt = document.getElementById('exp');
const expDescTxt = document.getElementById('expDesc');
const educationList = document.getElementById('education');

const loadCV = async () => {

  const query = new Parse.Query(CVdata);

  try {

    const results = await query.find();

    for (const data of results) {

      const name = data.get('name');
      const role = data.get('role');
      const number = data.get('phoneNumber');
      const email = data.get('email');
      const aboutMe = data.get('aboutMe');
      const exp = data.get('exp');
      const education = data.get('education');
      const educationDescs = data.get('educationDescs');
      const softSkills = data.get('softSkills');
      const hardSkills = data.get('hardSkills');
      const languages = data.get('languages');
      const hobbies = data.get('hobbies');
      const expDesc = data.get('expDesc');


      h1Name.innerHTML = name;
      numberTxt.innerHTML = number;
      emailTxt.innerHTML = email;
      aboutMeTxt.innerHTML = aboutMe;
      expTxt.innerHTML = exp;
      expDescTxt.innerHTML = expDesc;
      h2Role.innerHTML = role;

      for (let i = 0; i < education.length; i++) {
        educationList.innerHTML += `<li>${education[i]}<br><p>${educationDescs[i]}</p></li>`;
      }

      for (let i = 0; i < softSkills.length; i++) {
        ulSoftSkills.innerHTML += `<li>${softSkills[i]}</li>`;
      }

      for (let i = 0; i < hardSkills.length; i++) {
        ulHardSkills.innerHTML += `<li>${hardSkills[i]}</li>`;
      }

      for (let i = 0; i < languages.length; i++) {
        ulLanguages.innerHTML += `<li>${languages[i]}</li>`;
      }

      for (let i = 0; i < hobbies.length; i++) {
        ulHobbies.innerHTML += `<li>${hobbies[i]}</li>`;
      }


    }

  } catch (error) {
    console.error("Error while fetching Tasks", error);
  }

};


loadCV();
