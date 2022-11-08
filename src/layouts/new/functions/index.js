import { collection,addDoc } from "firebase/firestore";
import db from "../../../firebase";

export const addNewproject = (data) => {
    const dbRef = collection(db, "projects");
    addDoc(dbRef,data).then((docRef) => {
        console.log("Document has been added successfully");
        console.log(docRef.path);
        const projRef = collection(db, `${docRef.path}/parts`);
        const partsData = {
            drawing_number:0,
            estimated_time:0,
            status:0
        };
        Array.from(Array(data.parts_count)).forEach((el) => {
            
                addDoc(projRef,partsData).then((projDocRef) => {
                    console.log("Document has been added successfully");
                    console.log(projDocRef.path);
                    console.log(el);
                    
                })
                .catch(error => {
                    console.log(error);
                })
            
        })
    })
    .catch(error => {
        console.log(error);
    })
}

export const editProject = () =>{
    console.log("a")
    return {}
}