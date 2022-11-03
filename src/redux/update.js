import { useDispatch } from "react-redux";
import { getWorkers } from "./slices/workersSlice";

(function main(){
    useDispatch(getWorkers);
})