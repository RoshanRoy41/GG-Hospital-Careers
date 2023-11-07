function submitForm(e){
    e.preventDefault();

    const myform = document.getElementById("form");

    const formData = new FormData(myform);

    fetch("https://show.ratufa.io/json"){
        method: "POST"
        body: FormData
    })

    .then(response => {
        if (!response.ok) {
          throw new Error("network returns error");
        }
        return response.json();
      })
      .then(resp => {
        let respdiv = document.createElement("pre");
        respdiv.innerHTML = JSON.stringify(resp, null, 2);
        myform.replaceWith(respdiv);
        console.log("resp from server ", resp);
      })
      .catch(error => {
        // Handle error
        console.log("error ", error);
      });
  }