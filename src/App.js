import "./styles.css";
import styled from "styled-components";
import LoginForm from "./components/LoginForm";
import { useState } from "react";

export default function App() {
  /* TODO: move state up to store app-wide users */

  /* TODO: write add user function */

  /* TODO: pass addUser function down, so component
  can update the state of the parent */
  return (
    <Wrapper>
      {/* <p>Registered: {users}</p> */}
      <LoginForm />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  background-color: var(--gray-300);
  display: grid;
  place-items: center;
`;
