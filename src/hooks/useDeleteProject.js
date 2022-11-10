import {doc,deleteDoc} from "firebase/firestore";
import db from "../firebase";

const useDeleteProject = async (key) => {
    const docRef = doc(db,"projects",key)
    await deleteDoc(docRef);
}

export default useDeleteProject;