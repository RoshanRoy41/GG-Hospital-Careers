const url = "https://dummyjson.com/users";

const request = fetch(url);

let cardContainer = document.querySelector(".container");

request
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (i = 0; i < 10; i++) {
      const CareerCard = document.createElement("div");
      CareerCard.classList.add("CareerCard");
      const FirstName = document.createElement("h2");
      FirstName.classList.add("Name");
      //   const LastName = document.createElement("h2");
      //   LastName.classList.add("LastName");
      const Details = document.createElement("div");
      Details.classList.add("details");
      const Age = document.createElement("h3");
      Age.classList.add("Age");
      const DOB = document.createElement("h3");
      DOB.classList.add("DOB");
      const PHno = document.createElement("h3");
      PHno.classList.add("Phno");
      const Gender = document.createElement("h3");
      Gender.classList.add("Gender");
      const EditNow = document.createElement("button");
      EditNow.classList.add("Edit");
      const CardDescription = document.createElement("p1");
      CardDescription.classList.add("CardDescription");
      CardDescription.textContent =
        "Send your CV to: gghospitalhrd@gmail.com | Contact Number:0471-2779100";

      //giving values
      FirstName.textContent =
        data.users[i].firstName + " " + data.users[i].lastName;
      //   LastName.textContent = data.users[i].lastName;
      Age.textContent = data.users[i].age;
      DOB.textContent = data.users[i].birthDate;
      PHno.textContent = data.users[i].phone;
      Gender.textContent = data.users[i].gender;
      // FirstName.textContent = data.users[i].firstName;

      console.log(data.users[i].firstName);
      CareerCard.appendChild(FirstName);
      //   CareerCard.appendChild(LastName);
      Details.appendChild(Age);
      Details.appendChild(DOB);
      Details.appendChild(PHno);
      Details.appendChild(Gender);
      CareerCard.appendChild(Details);
      CareerCard.appendChild(CardDescription);
      CareerCard.appendChild(EditNow);
      cardContainer.appendChild(CareerCard);
    }
  })
  .catch((error) => console.log(error));
