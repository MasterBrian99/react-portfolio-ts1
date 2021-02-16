
import axios from "axios";

export const  projectMain=async ()=> {

    const response = await axios.get('https://api.github.com/repos/MasterBrian99/REPO-EYEv2');
    if (response.status===200){
        return response.data;
    }else{
        return response.status;
    }

}
