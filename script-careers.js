import { getData } from "./getData.js";
import { postData } from "./postData.js";

const usersURL = "https://dummyjson.com/users";
const usersAddURL = "https://dummyjson.com/products/add";

const changePage = (user_id) => {
  console.log(user_id);
  const newPageURL = `forms.html?user_id=${user_id}`;
  window.location.href = newPageURL;
};

const updateUser = () => {
  const form = document.getElementById("career-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.modified_on = new Date().toISOString();
    console.log(data);

    const response = await postData(usersAddURL, data);
    console.log(response);
    // window.location.href = "career.html";
  });
};

const loadCareerPage = async () => {
  const data = await getData(usersURL);
  const usersArray = data.users;
  usersArray.forEach((user, index) => {
    const user_id = user.id;
    const firstName = user.firstName;
    const lastName = user.lastName;
    const age = user.age;
    const birthDate = user.birthDate;
    const gender = user.gender;
    const phone = user.phone;

    const cardItemDiv = document.createElement("div");
    cardItemDiv.className = "card-item";

    const firstDiv = document.createElement("div");
    const firstParagraph = document.createElement("h2");
    firstParagraph.textContent = `${firstName} ${lastName}`;
    firstDiv.appendChild(firstParagraph);

    const secondParagraph = document.createElement("h3");
    secondParagraph.textContent = `Department: ${age} | Gender: ${gender} | Phone: ${phone}`;

    const thirdParagraph = document.createElement("h3");
    thirdParagraph.textContent = `DOB: ${birthDate}`;

    const editButton = document.createElement("button");
    editButton.className = "Edit";
    editButton.textContent = "Edit Now";
    editButton.setAttribute("user_id", user_id);
    editButton.onclick = () => changePage(user_id);

    cardItemDiv.appendChild(firstDiv);
    cardItemDiv.appendChild(secondParagraph);
    cardItemDiv.appendChild(thirdParagraph);
    cardItemDiv.appendChild(editButton);

    const cardContainer = document.getElementById("career-cards");
    cardContainer.appendChild(cardItemDiv);
  });
};

const loadUserCareerPage = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const user_id = urlParams.get("user_id");
  const user_url = `${usersURL}/${user_id}`;
  const user = await getData(user_url);

  const firstName = user.firstName;
  const lastName = user.lastName;
  const age = user.age;
  const birthDate = user.birthDate;
  const gender = user.gender;
  const phone = user.phone;

  const userItemDiv = document.createElement("div");
  userItemDiv.className = "user-item";

  const firstParagraph = document.createElement("h1");
  firstParagraph.textContent = `${firstName} ${lastName}`;

  const breakElement = document.createElement("br");

  const secondParagraph = document.createElement("h2");
  secondParagraph.textContent = `Age: ${age} | Gender: ${gender} | Phone: ${phone}`;

  userItemDiv.appendChild(firstParagraph);
  userItemDiv.appendChild(breakElement);
  userItemDiv.appendChild(secondParagraph);

  const cardContainer = document.getElementById("career-cards");
  cardContainer.appendChild(userItemDiv);

  const firstname_input = document.getElementById("firstname");
  firstname_input.value = firstName;

  const lastname_input = document.getElementById("lastname");
  lastname_input.value = lastName;

  const phone_input = document.getElementById("phone");
  phone_input.value = phone;

  const birth_input = document.getElementById("birthDate");
  birth_input.value = birthDate;

  const age_input = document.getElementById("age");
  age_input.value = age;

  const gender_input = document.getElementById("gender");
  gender_input.value = gender;
};

if (window.location.href.split("/").pop() === "careers.html") {
  loadCareerPage();
} else {
  updateUser();
  loadUserCareerPage();
}
