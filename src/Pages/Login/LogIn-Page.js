import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../Firebase/Auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/products");
    } catch (err) {
      setError("Error . Wrong Email/Password");
    }
  };

  return (
    <>
      <div className="p-4 flex flex-col items-center">
        <h2 className="mb-3 font-bold text-blue-500">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 border border-sky-500" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 border border-sky-500" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" className="w-14 h-6 border border-sky-500 rounded-sm bg-slate-200">
              Log In
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default LoginPage;