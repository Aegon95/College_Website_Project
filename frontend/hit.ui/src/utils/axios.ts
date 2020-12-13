import axios from "axios";
import {BASEURL} from "./constants";

export default axios.create({
    baseURL: BASEURL,
    headers: {
        "Content-type": "application/json"
    }
});
