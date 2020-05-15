const btn = document.querySelector(".btn");

const sendDataDenuncia = async data => {
  try {
    const response = await axios.post("http://localhost:3333/reports", {
      ...data,
    });

    console.log(response);
    location.href = "./";
  } catch (error) {
    console.log(error);
  }
};

function click(event) {
  event.preventDefault();

  var data;
  for (i = 0; i < 9; i++) {
    data = {
      [event.target.form[i].name]: event.target.form[i].value,
      ...data,
    };
  }

  sendDataDenuncia(data);
}

btn.addEventListener("click", click);
