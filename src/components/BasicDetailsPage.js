import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const BasicDetailsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted successfully!');
      console.log({ name, email, gender });
      navigate('/TopicSelectionPage');
    } else {
      setErrors(errors);
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' , backgroundColor: 'lightcyan' , flex : 1}}>
      <h1 style={{ fontSize: '2em', marginTop: '2rem' }}>Mcq Test Platform</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '500px' }}
      >
        <label style={{ marginTop: '2rem' }}>
          Full Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginTop: '1rem', padding: '0.5rem', borderRadius: '5px' }}
          />
          {errors.name && <p style={{ color: 'green' }}>{errors.name}</p>}
        </label>

        <label style={{ marginTop: '2rem' }}>
          Email id:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginTop: '1rem', padding: '0.5rem', borderRadius: '5px' }}
          />
          {errors.email && <p style={{ color: 'green' }}>{errors.email}</p>}
        </label>

        <label style={{ marginTop: '2rem' }}>
          Gender:
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            style={{ marginTop: '1rem', padding: '0.5rem', borderRadius: '5px' }}
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <button
          type="submit"
          style={{ marginTop: '2rem', padding: '0.5rem', borderRadius: '5px', backgroundColor: '#007bff', color: 'Yellow' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BasicDetailsPage;

