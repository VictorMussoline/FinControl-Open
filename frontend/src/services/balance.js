import { db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function updateBalance(contaId, tipo, valor) {
  const ref = doc(db, "accounts", contaId);
  const snap = await getDoc(ref);

  const atual = snap.data().saldoInicial;

  let novoSaldo = atual;

  if (tipo === "receita") novoSaldo += valor;
  if (tipo === "despesa") novoSaldo -= valor;

  await updateDoc(ref, { saldoInicial: novoSaldo });
}
