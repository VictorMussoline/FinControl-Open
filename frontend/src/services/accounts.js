import { db } from "./firebase";
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";

export async function addAccount(data) {
  const ref = collection(db, "accounts");
  await addDoc(ref, data);
}

export async function getAccounts(userId) {
  const q = query(collection(db, "accounts"), where("userId", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function deleteAccount(id) {
  const ref = doc(db, "accounts", id);
  await deleteDoc(ref);
}
