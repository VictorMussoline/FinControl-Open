import { useState, useEffect } from "react";
import { getTransactions, deleteTransaction } from "../services/transactions";
import { useAuth } from "../context/AuthContext";

export default function Transactions() {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [mes, setMes] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  async function load() {
    const lista = await getTransactions(user.uid, mes);
    const filtrados = filtroTipo
      ? lista.filter(t => t.tipo === filtroTipo)
      : lista;

    setTransactions(filtrados);
  }

  useEffect(() => { load(); }, [mes, filtroTipo]);

  return (
    <div>
      <h1>Transações</h1>

      <input
        type="month"
        onChange={e => setMes(e.target.value)}
      />

      <select onChange={e => setFiltroTipo(e.target.value)}>
        <option value="">Todos</option>
        <option value="despesa">Despesas</option>
        <option value="receita">Receitas</option>
      </select>

      <ul>
        {transactions.map(t => (
          <li key={t.id}>
            {t.tipo} - {t.descricao} - R${t.valor}
            <button onClick={() => deleteTransaction(t.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
