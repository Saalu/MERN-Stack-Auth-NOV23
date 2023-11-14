import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here using formData
    console.log('Registration data submitted:', formData);
  };

  return (
   <div className="flex  justify-center items-center">
     <form onSubmit={handleSubmit} className=''>
      {/* <label htmlFor=""></label> */}
      <label>
        Username:
        </label>
        <input
          className='border-slate-100 border-2'
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>

      <br />

      <button type="submit">Register</button>
    </form>
   </div>
  );
};

export default Register;
