import { collection,addDoc } from "firebase/firestore";
import db from "../firebase";

const useAddNewWorker = async (data) => {
    if(data.name!=="" && data.id!==0){
        const dbRef = collection(db, "workers");
        const doc = await addDoc(dbRef,data)
        return doc;
    }
    throw new Error("invalid data");
    
}

export default useAddNewWorker