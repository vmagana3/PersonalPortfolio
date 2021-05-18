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
  return objData;
}
