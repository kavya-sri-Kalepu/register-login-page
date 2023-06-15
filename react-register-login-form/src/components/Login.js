import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './mystyle.css'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        navigate("/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="main-container login-page">
      <div className="container">
        <div className="main-content">
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="email">
         {/** <Form.Label>Email</Form.Label> */}
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="input-field"
          />
        </Form.Group>

        <Form.Group controlId="password">
          {/*<Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="input-field"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
        {error && <p>{error}</p>}
      </Form>
    </div>
    </div>
    </div>
  );
};

export default Login;