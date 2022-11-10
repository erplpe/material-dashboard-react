import { collection,addDoc } from "firebase/firestore";
import db from "../firebase";

const useAddNewCustomer = async (data) => {
    const dbRef = collection(db, "customers");
    const doc = await addDoc(dbRef,data)
    return doc;
    
}

export default useAddNewCustomer;