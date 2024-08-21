import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let error = {};
    if (!formData.firstName) error.firstName = 'This field is required';
    if (!formData.lastName) error.lastName = 'This field is required';
    if (!formData.email) {
      error.email = 'Please enter a valid email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      error.email = 'Email address is invalid';
    }
    if (!formData.queryType) error.queryType = 'Please select a query type';
    if (!formData.message) error.message = 'This field is required';
    if (!formData.consent)
      error.consent = 'To submit this form, please consent to being contacted';
    return error;
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      alert('Form has been submitted successfully');
      // Clear the form data and errors after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: false,
      });
      setErrors({});
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-4xl md:w-1/2 flex flex-col p-8 font-karla rounded-xl"
      >
        <h3 className="font-bold text-3xl mt-2 mb-2">Contact Us</h3>
        <div className="flex md:flex-row flex-col mt-4 mb-4 w-full">
          <div className="mr-1 md:w-[50%]">
            <label>
              First Name *
              <input
                type="text"
                className={`block border rounded-md p-2 mt-2 w-full ${
                  errors.firstName ? 'border-red' : 'border-grey500Medium'
                }`}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            {errors.firstName && (
              <span className="text-red">{errors.firstName}</span>
            )}
          </div>
          <div className="ml-1 md:w-[50%]">
            <label>
              Last Name *
              <input
                type="text"
                className={`block border rounded-md p-2 mt-2 w-full ${
                  errors.lastName ? 'border-red' : 'border-grey500Medium'
                }`}
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            {errors.lastName && (
              <span className="text-red">{errors.lastName}</span>
            )}
          </div>
        </div>
        <div>
          <label>
            Email Address *
            <input
              type="text"
              className={`block border rounded-md w-full p-2 ${
                errors.email ? 'border-red' : 'border-grey500Medium'
              }`}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <span className="text-red">{errors.email}</span>}
        </div>
        <div className="mt-4 mb-4 w-full">
          <label>
            Query Type *
            <div className="flex md:flex-row flex-col mt-2">
              <label
                className={`block border rounded-md p-2 md:mr-2 mt-2 md:mt-0 md:w-1/2 ${
                  errors.queryType ? 'border-red' : 'border-grey500Medium'
                }`}
              >
                <input
                  type="radio"
                  name="queryType"
                  value="General Enquiry"
                  checked={formData.queryType === 'General Enquiry'}
                  onChange={handleChange}
                  className="mr-2 text-center"
                />
                General Enquiry
              </label>
              <label
                className={`block border rounded-md p-2 md:ml-2 mt-2 md:mt-0 md:w-1/2 ${
                  errors.queryType ? 'border-red' : 'border-grey500Medium'
                }`}
              >
                <input
                  type="radio"
                  name="queryType"
                  value="Support Request"
                  checked={formData.queryType === 'Support Request'}
                  onChange={handleChange}
                  className="mr-2 text-center"
                />
                Support Request
              </label>
            </div>
          </label>
          {errors.queryType && (
            <span className="text-red">{errors.queryType}</span>
          )}
        </div>
        <div className="mb-2">
          <label>
            Message *
            <textarea
              name="message"
              className={`block border rounded-md p-2 w-full ${
                errors.message ? 'border-red' : 'border-grey500Medium'
              }`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </label>
          {errors.message && <span className="text-red">{errors.message}</span>}
        </div>
        <div className="mt-4 mb-4">
          <label className="flex">
            <input
              type="checkbox"
              name="consent"
              className={`mr-2 ${
                errors.consent ? 'border-red' : 'border-grey500Medium'
              } accent-green600Medium`}
              checked={formData.consent}
              onChange={handleChange}
            />
            I consent to being contacted by the team *
          </label>
          {errors.consent && <span className="text-red">{errors.consent}</span>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-green600Medium p-4 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
