import { useEffect, useState, useRef } from "react";

const Forms = () => {
  const inputRef = useRef();
  const [formInputs, setFormInputs] = useState({
    firstname: "",
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [validationMessages, setValidationMessages] = useState({
    firstname: "",
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [isValid, setIsValid] = useState(false);

  const regex = {
    email: /\S+@\S+.\S+/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+~`=[\]{}|\\;:'",.<>/?]).{8,}$/,
    firstname: /^[A-Z][a-zA-Z]*$/,
    name: /^[A-Z][a-zA-Z]*$/,
    username: /^[a-zA-Z0-9_\-]+$/,
  };

  const validateInput = (name, value) => {
    console.log(`Name: ${name}`);
    console.log(`Value: ${value}`);
    console.log(`Regex: ${regex[name]}`);
    console.log('Test Result:', regex[name].test(value));

    if (!value) {
      setValidationMessages((prevState) => ({
        ...prevState,
        [name]: `Please enter a ${name}!`,
      }));
      return false;
    }
    if (regex[name] && regex[name].test(value)) {
      setValidationMessages((prevState) => ({
        ...prevState,
        [name]: <span className="text-success">Your {name} looks good!</span>,
      }));      
      return true;
    } else {
      setValidationMessages((prevState) => ({
        ...prevState,
        [name]: `Please enter a valid ${name}!`,
      }));
      return false;
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  
    // Check if value is not empty or undefined
    if (value && value !== "") {
      // Call validateInput only if value is not empty
      validateInput(name, value);
    }
  
    setFormInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log(inputRef);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          placeholder="Firstname"
          name="firstname"
          onChange={handleInputChange}
          ref={inputRef}
          className="form-control"
        />
        <div
          className={`message ${
            isValid ? "success text-success" : "error text-danger"
          }`}
        >
          {validationMessages.firstname}
        </div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleInputChange}
          ref={inputRef}
          className="form-control"
        />
        <div
          className={`message ${
            isValid ? "success text-success" : "error text-danger"
          }`}
        >
          {validationMessages.name}
        </div>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleInputChange}
          ref={inputRef}
          className="form-control"
        />
        <div
          className={`message ${
            isValid ? "success text-success" : "error text-danger"
          }`}
        >
          {validationMessages.username}
        </div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          ref={inputRef}
          className="form-control"
        />
        <div
          className={`message ${
            isValid ? "success text-success" : "error text-danger"
          }`}
        >
          {validationMessages.email}
        </div>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          ref={inputRef}
          className="form-control"
        />
        <div
          className={`message ${
            isValid ? "success text-success" : "error text-danger"
          }`}
        >
          {validationMessages.password}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Forms;
