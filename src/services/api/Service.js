import axios from "axios";

class Service {
    #baseURL = 'http://localhost:8080';

    constructor(){
        this.token = localStorage.getItem('token');
        this.headers = {
            Authorization : `Bearer ${this.token}`
        }
    }

    async getImages (params) {
        try {
            const response = await axios.get(this.#baseURL,{
                headers : this.headers,
                params : params,
            })

            return response;
        } catch (error) {
            return 0;
        }
    }
}

export default Service