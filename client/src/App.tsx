
// react home landing page
export function HomePage() {
  return (
    <div className="home-page">
      <h1>Home</h1>
    </div>
  );
}


// react component login form
export function LoginForm() {
  return (
    <div className="login-form">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}