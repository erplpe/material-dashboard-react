import { collection,addDoc } from "firebase/firestore";
import db from "../../../firebase";

export const addNewproject = (data) => {
    const dbRef = collection(db, "projects");
    addDoc(dbRef,data).then((docRef) => {
        console.log("Document has been added successfully");
        console.log(docRef);
    })
    .catch(error => {
        console.log(error);
    })
}

export const editProject = () =>{
    console.log("a")
    return {}
}