const btn = document.querySelector(".btn");

interface DataObject {
  address: string;
  city: string;
  complement: string;
  cpf: string;
  description: string;
  email: string;
  name: string;
  number: string;
  state: string;
}

interface DataUser {
  user: {
    name: string,
    cpf: string,
    address: {
      cep: string,
      state: string,
      city: string,
      street: string,
      complemento: string,
      number: string,
    },
    complaint: {
      description: string,
    },
  };
}
const sendDataDenuncia = async (data: DataObject) => {
  const user = {
    user: {
      name: data.name,
      cpf: data.cpf,
      address: {
        // cep: data.cep,
        state: data.state,
        city: data.city,
        street: data.s,
        complemento:data.complement,

      },
    },
  } as DataUser;

  const response = await axios.post("http://localhost:3333/reports", {
    data,
  });

  console.log(response);
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

  console.log(data);
}

btn.addEventListener("click", click);
