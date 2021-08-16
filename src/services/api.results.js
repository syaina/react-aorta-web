import axios from 'axios';

class ApiResults {

    getProduk() {
        const endpoint = "/produk";
        return axios
        .get(endpoint)
        .then((response) => {
            if (response.status === 200) {
                let respProduct = [];

                response.data.results.map((resp) => {
                    respProduct.push({
                        id_produk: resp.id_produk,
                        produk: resp.produk,
                    });
                });

                console.log(respProduct);
            }   
        })
        .catch(function (error) {
        
        });   
    }

}

export default new ApiResults();