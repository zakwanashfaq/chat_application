

export default function SignUpPage() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center text-center">
      <main className="form-signin w-50 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">Sign up for a new account!</h1>
          <div className="form-floating mb-2">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm Password" />
            <label htmlFor="floatingPassword">Confirm Password</label>
          </div>
          <button className="w-100 mb-2 btn btn-lg btn-primary" type="submit">Sign up</button>
          <div className="mt-4">
            <a className="text-body-secondary" href="/login" target="_self">Log-in with existing account</a>
          </div>
          <p className="mt-5 mb-3 text-body-secondary">© Real-time chat app - 2023</p>
        </form>
      </main>
    </div>

  );
}