import { db } from "./firebase";
import {
  collection, addDoc, getDocs, query, where, orderBy, deleteDoc, doc
} from "firebase/firestore";

export async function addTransaction(data) {
  const ref = collection(db, "transactions");
  await addDoc(ref, data);
}

export async function getTransactions(userId, month) {
  const q = query(
    collection(db, "transactions"),
    where("userId", "==", userId),
    orderBy("data", "desc")
  );

  const snap = await getDocs(q);

  const all = snap.docs.map(d => ({ id: d.id, ...d.data() }));

  if (month) {
    return all.filter(t => t.data.startsWith(month)); // ex "2025-11"
  }

  return all;
}

export async function deleteTransaction(id) {
  const ref = doc(db, "transactions", id);
  await deleteDoc(ref);
}
