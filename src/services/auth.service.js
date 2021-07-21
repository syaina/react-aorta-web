import axios from "axios";

const API_URL = "https://api.tentiraorta.com/";

class AuthService {
    login(email, password) {
        return axios
        .post(API_URL + "login", {
            email,
            password
        })
        .then(response => {
            // if (response.data.accessToken) {
            //   localStorage.setItem("user", JSON.stringify(response.data));
            // }

            console.log(email, password);
            console.log(response.data)
        });
    }

    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("nama");
        localStorage.removeItem("email");
    }

    register(email, password, nama, asal_universitas, pekerjaan) {
        return axios.post(API_URL + "register", {
        email,
        password,
        nama, 
        asal_universitas, 
        pekerjaan
        });
    }

    getToken() {
        return JSON.parse(localStorage.getItem('token'));
    }

    getUser() {
        return JSON.parse(localStorage.getItem('nama'));
    }

    getEmail() {
        return JSON.parse(localStorage.getItem('email'));
    }
}

export default new AuthService();