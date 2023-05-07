import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../types";


export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post(API_URL + "/api/auth/login", {
      username: email,
      password: password
    })
      .then((res: any) => {
        console.log(res.data.token);
        // Set a cookie with a key, value, and expiration date
        const key = "token";
        const value = res.data.token;
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30); 
        document.cookie = `${key}=${value}; expires=${expirationDate.toUTCString()}; path=/;`;

      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center text-center">
      <main className="form-signin w-50 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating mb-2">
            <input type="email" className="form-control" id="floatingInput" placeholder="Username" onChange={handleEmailChange} />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlePasswordChange} />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox my-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 mb-2 btn btn-lg btn-primary" type="submit" onClick={handleSubmit}>Sign in</button>
          <div className="d-flex justify-content-between">
            <div className="w-100 me-1">
              <button className="w-100 btn btn-dark" type="submit">Sign in as "Test User 1"</button>
            </div>
            <div className="w-100">
              <button className="w-100 btn btn-dark" type="submit">Sign in as "Test User 2"</button>
            </div>
          </div>
          <div className="mt-4">
            <a className="text-body-secondary" href="/signup" target="_self">Sign up for an account</a>
          </div>
          <p className="mt-5 mb-3 text-body-secondary">© Real-time chat app - 2023</p>
        </form>
      </main>
    </div>

  );
}