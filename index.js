const form = document.getElementById("Form");
const table = document.getElementById("table");
const enrStudents = document.getElementById("enrStudents");
const tabRows = document.getElementsByClassName("tabRow");
const submit = document.getElementById("form_sub");
const reset = document.getElementById("reset");

var Uname, gender, email, web, img;
var skills = [];
let ski = '';
let data = [];
let dataItems = [];


const getChecks = () => {
    var checkboxes = document.getElementsByClassName('check');
    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            skills.push(checkbox.value + ' ');

            ski += String(checkbox.value) + ',';
        }
    }

    ski = ski.slice(0, -1);
}

const getGender = () => {
    var gen = document.getElementById("gender");
    var option = gen.options[gen.selectedIndex];
    gender = option.value;
}

const getBaseData = () => {

    const fullName = form.elements['name'];
    const emailId = form.elements['email'];
    const web_link = form.elements['web_link'];
    const img_link = form.elements['img_link'];

    Uname = fullName.value;
    email = emailId.value;
    web = web_link.value;
    img = img_link.value;

    if (Uname == "") {
        return false;
    }
    else {
        return true;
    }

}

const setData = (nam, gend, emai, we, sk, im) => {
    let temp = `<tr class="tabRow"><td><div class="desc"><p id="Sname">${nam}</p><p id="Sgender">${gend}</p><p id="Semail">${emai}</p><p id="Sweb"><a href=${"https://" + we} target="_blank" >${we}</a></p><p id="Sskils">${sk}</p> </div></td><td><div><img src=${im} alt="" onerror="this.onerror=null;this.src='${gend == "Male" ? './Images/profile-boy.svg' : './Images/profile-girl.svg'}';" class="profImg"></div></td></tr>`

    table.innerHTML += temp;
    enrStudents.style.display = "block";
    for (let index = 0; index < tabRows.length; index++) {
        tabRows[index].style.display = "contents";

    }
}


const clearForNew = () => {
    skills = [];
    dataItems = [];
    ski = '';
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    var valid = getBaseData();
    getChecks();
    getGender();

    if (valid == false) {

        var nam_inp = form.elements['name'];
        nam_inp.style.borderColor = "red";
        alert("Name is mandatory to Enroll, Please enter your full name ");
        nam_inp.addEventListener("keyup", () => {
            nam_inp.style.borderColor = "black";
        })
    }

    else {

        dataItems.push(Uname, gender, email, web, img, skills);
        data.push(dataItems);
        setData(Uname, gender, email, web, ski, img);
        clearForNew();
    }
})

