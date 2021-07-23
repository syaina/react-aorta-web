import axios from "axios";

class AuthService {
    // login(email, password) {
    //     return axios.post('/login', {
    //         email: email,
    //         password: password
    //     })
    //     .then(response => { 
    //         if (response.data.result.token) {
    //             localStorage.setItem("token", JSON.stringify(response.data.result.token));
    //             localStorage.setItem("id_user", JSON.stringify(response.data.result.id_user));
    //             localStorage.setItem("name", JSON.stringify(response.data.result.nama));
    //             localStorage.setItem("email", JSON.stringify(response.data.result.email));
    //         }
    //     })
    //     .catch(error => {
    //         console.log(error.response)
    //     });   
    // }

    register(email, password, nama, asal_universitas, pekerjaan) {
        return axios.post("/register", {
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
        return JSON.parse(localStorage.getItem('id_user'));
    }

    getName() {
        return JSON.parse(localStorage.getItem('name'));
    }

    getEmail() {
        return JSON.parse(localStorage.getItem('email'));
    }

    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("id_user");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
    }
}

export default new AuthService();