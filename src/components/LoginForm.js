import styled from "styled-components";
import { useState } from "react";
export default function LoginForm({ addUser }) {
  /* TODO: Setup State for form's multiple values */
  const [values, setValues] = useState({
    username: "shanerodri",
    password: "testpass"
  });

  //set value of passIsValid to boolean
  let passIsValid = values.password.length > 10;

  /* TODO: Write boilerplate updater function */
  function update(value, name) {
    let newState = {
      ...values, //spread operator: everything that is currently there
      [name]: value // use the parameter name as key, param value as new value
    };
    setValues(newState);
  }

  /* TODO: Write submit handler function */
  function handleSubmit(event) {
    event.preventDefault();
    alert(event);
  }

  /* TODO: add conditional validation and the submit handler, 
  source values from state, and add the onClick handlers */
  return (
    <Wrapper onSubmit={handleSubmit}>
      <h2> Register </h2>
      <Spacer size={20} />
      <Field>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={(e) => update(e.target.value, "username")}
          value={values.username}
        />
      </Field>
      <Field>
        <label htmlFor="password">Password</label>
        {/* <Error> Your password must be longer than 10 characters. </Error> */}
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={(e) => update(e.target.value, "password")}
        />
      </Field>
      <Spacer size={20} />
      <button
        type="submit"
        disabled={
          !passIsValid ||
          values.password.length < 1 ||
          values.username.length < 1
        }
      >
        Join the Club
      </button>
    </Wrapper>
  );
}

const Spacer = styled.div`
  height: ${(p) => p.size}px;
`;

const Error = styled.strong`
  margin: 0;
  padding-bottom: 5px;
  color: red;
  text-transform: uppercase;
  font-size: 0.6rem;
`;

const Wrapper = styled.form`
  width: 300px;
  background-color: var(--gray-100);
  border-radius: 10px;
  padding: 20px;

  h2 {
    margin: 0;
    font-size: 1.8rem;
    color: var(--gray-400);
  }

  button {
    cursor: pointer;
    background-color: var(--gray-400);
    border: none;
    color: var(--gray-100);
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    box-shadow: var(--shadow-elevation-medium);
  }
  button:disabled {
    background-color: var(--gray-200);
    cursor: not-allowed;
  }

  --shadow-color: 231deg 21% 9%;
  box-shadow: 0.3px 0.5px 0.8px hsl(var(--shadow-color) / 0.11),
    2px 3.9px 6px -0.1px hsl(var(--shadow-color) / 0.15),
    3.5px 7px 10.7px -0.3px hsl(var(--shadow-color) / 0.2),
    5.3px 10.6px 16.2px -0.4px hsl(var(--shadow-color) / 0.25),
    7.7px 15.3px 23.4px -0.5px hsl(var(--shadow-color) / 0.3),
    11px 22.1px 33.7px -0.6px hsl(var(--shadow-color) / 0.34),
    15.8px 31.5px 48.1px -0.8px hsl(var(--shadow-color) / 0.39),
    22.3px 44.5px 67.9px -0.9px hsl(var(--shadow-color) / 0.44);
`;

const Field = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;

  input {
    padding: 8px;
    border: none;
    border-radius: 5px;
    box-shadow: var(--shadow-elevation-medium);
  }

  label {
    padding-bottom: 5px;
    text-transform: uppercase;
    font-size: 0.6rem;
    color: var(--gray-300);
  }
`;
