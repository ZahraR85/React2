import { useState } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value,
    });
  };
const handleSubmit = (e)=> {
  e.preventDefault();
  if (! form.firstName || ! form.lastName || !form.email || ! form.message){
    alert("All fields required!");
  }
    console.log(form);
   /* setForm = ({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
  }); */
  };
  return (
    <>
      <label>
        First name:
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last name:
        <input name="lastName" value={form.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input name="email" value={form.email} onChange={handleChange} />
      </label>
      <br />
      <textarea name="message" value={form.message} onChange={handleChange} />
      <p>
        My Name is {form.firstName} {form.lastName} and my Email address is: {form.email} . I have this message:{form.message}
      </p>
      <button style={{padding: "20px"}} onClick={handleSubmit}>Submit</button>
    </>
  );
};

const App = () => {
  return (
    <>
      <Form />
    </>
  );
};

export default App;
