import { collection,addDoc } from "firebase/firestore";
import db from "../firebase";

const useAddNewProject = async (data) => {
    const partsData = {
        drawing_number:0,
        estimated_time:0,
        status:0
    };
    const dbRef = collection(db, "projects");
    if(data.customer!=="" && data.id!==0 && data.parts_count!==0){
        const doc = await addDoc(dbRef,data);
        const projRef = collection(db, `${doc.path}/parts`);
        const docsAdder = Array.from(Array(data.parts_count)).map(() => (addDoc(projRef,partsData)));
        const docs = Promise.all(docsAdder);
        return {root:doc,sub:docs}
    }
    
    throw new Error("invalid data");
}

export default useAddNewProject;