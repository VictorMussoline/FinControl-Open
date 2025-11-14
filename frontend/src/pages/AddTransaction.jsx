import { useState } from "react";
import { addTransaction } from "../services/transactions";
import { updateBalance } from "../services/balance";
import { useAuth } from "../context/AuthContext";

export default function AddTransaction() {
  const { user } = useAuth();

  const [tipo, setTipo] = useState("despesa");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState("");
  const [contaId, setContaId] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  async function salvar() {
    const dados = {
      tipo,
      categoria,
      valor: Number(valor),
      contaId,
      data,
      descricao,
      userId: user.uid,
      criadoEm: new Date()
    };

    await addTransaction(dados);
    await updateBalance(contaId, tipo, Number(valor));
    alert("Transação salva!");
  }

  return (
    <div>
      <h1>Adicionar Transação</h1>

      <select onChange={e => setTipo(e.target.value)}>
        <option value="despesa">Despesa</option>
        <option value="receita">Receita</option>
      </select>

      <input placeholder="Categoria" onChange={e => setCategoria(e.target.value)} />
      <input placeholder="Descrição" onChange={e => setDescricao(e.target.value)} />
      <input placeholder="Valor" type="number" onChange={e => setValor(e.target.value)} />

      <input type="date" onChange={e => setData(e.target.value)} />

      <input placeholder="ID da conta" onChange={e => setContaId(e.target.value)} />

      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
