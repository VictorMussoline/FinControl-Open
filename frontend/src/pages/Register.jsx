import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function register() {
    await createUserWithEmailAndPassword(auth, email, senha);
    alert("Conta criada!");
  }

  return (
    <div>
      <h1>Registrar</h1>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={e => setSenha(e.target.value)} />
      <button onClick={register}>Cadastrar</button>
    </div>
  );
}
