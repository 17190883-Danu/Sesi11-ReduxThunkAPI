import { useDispatch, useSelector } from "react-redux";
import {Container, Form, Button, Alert, Spinner} from "react-bootstrap";
import {useState} from "react";
import {authLoginApi} from "./authSlice";

const AuthLoginForm = () => {
  const authState = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doSubmit = (e) => {
    e.preventDefault();
    dispatch(authLoginApi({ email, password }));
    setEmail('');
    setPassword('');
  }

  // console.log('authState', authState);
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Button disabled={!!authState?.isLoginPending} onClick={doSubmit} variant="primary" type="submit">
          {!!authState?.isLoginPending ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : "Submitt"}
        </Button>
      </Form>
      <div>
        {!!authState?.errorMessage && (
          <Alert variant="danger">
            {authState?.errorMessage}
          </Alert>
        )}
        {!!authState?.isLoginSuccess && (
          <Alert variant="primary">
            Success login
          </Alert>
        )}

      </div>
    </Container>
  )
}

export default AuthLoginForm;

