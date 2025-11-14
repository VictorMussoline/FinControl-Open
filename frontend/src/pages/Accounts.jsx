import { useEffect, useState } from "react";
import { getAccounts, addAccount, deleteAccount } from "../services/accounts";
import { useAuth } from "../context/AuthContext";

export default function Accounts() {
  const { user } = useAuth();
  const [accounts, setAccounts] = useState([]);
  const [nome, setNome] = useState("");

  async function load() {
    const data = await getAccounts(user.uid);
    setAccounts(data);
  }

  async function create() {
    await addAccount({
      nome,
      tipo: "conta",
      saldoInicial: 0,
      userId: user.uid,
      criadoEm: new Date()
    });
    load();
  }

  async function remove(id) {
    await deleteAccount(id);
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Minhas Contas</h1>

      <input placeholder="Nome da conta" onChange={e => setNome(e.target.value)} />
      <button onClick={create}>Adicionar</button>

      <ul>
        {accounts.map(acc => (
          <li key={acc.id}>
            {acc.nome}
            <button onClick={() => remove(acc.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
