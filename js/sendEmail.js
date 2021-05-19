var btnForm = document.querySelector(".btnSend");
btnForm.addEventListener("click", getDataForm);

function getDataForm() {
  let inputs = document.querySelectorAll(".inputArea");
  const dataUser = [];
  inputs.forEach((item) => {
    dataUser.push(item.value);
  });

  let objData = {
    name: dataUser[0],
    email: dataUser[1],
    message: dataUser[2],
  };
  if (objData.name === "" || objData.email === "" || objData.message === "") {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Please fill all inputs",
    });
  } else {
    sendEmail(objData);
  }
}

function sendEmail(data) {
  try {
    emailjs.init("user_O8WSQyRnGAneL5g5cAoiL");

    emailjs.send("service_3dyldio", "template_5pqcktq", {
      personName: data.name,
      personEmail: data.email,
      message: data.message,
    });
    Swal.fire({
      icon: "success",
      title: "Email Sent",
      text: "Thaks for type me, i will contact you as son as possibble",
    });
  } catch (error) {
    alert(error.message);
  }
}
