import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./actions";
import './mystyle.css'

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  

  const handleRegister = () => {
    dispatch(registerUser(email, name, password));
    navigate("/login");
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="main-content">
      <h1>Register</h1>
      <Form>
        <Form.Group controlId="email">
          {/*<Form.Label>Email</Form.Label>*/}
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="input-field"
          />
        </Form.Group>

        <Form.Group controlId="name">
         {/* <Form.Label>Name</Form.Label> */}
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
            className="input-field"
          />
        </Form.Group>

        <Form.Group controlId="password">
          {/* <Form.Label>Password</Form.Label>*/}
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="input-field"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleRegister}>
          Register
        </Button>
      </Form>
      </div>
      </div>
    </div>
  );
};

export default Register;