import { login } from "./action";

export default function LoginPage() {
  return (
    <div className="">
        <form action={login}>
          <input name="email" type="email" placeholder='Email' required />
          <input name="password" type="password" placeholder='Senha' required />
          <button type="submit">Login</button>
        </form>
    </div>
  )
}