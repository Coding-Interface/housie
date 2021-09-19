 import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";

globalThis.db = getFirestore();
globalThis.collection = collection;
globalThis.addDoc = addDoc;


