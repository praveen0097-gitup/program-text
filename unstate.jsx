import  { useState } from 'react'


const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // console.log(formData,name)
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(formData);
    // You can add logic here to send the form data to a server or do anything else with it
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
      <br />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
      <br />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <br />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <br />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
