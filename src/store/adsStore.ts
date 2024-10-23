import {defineStore} from "pinia";

export const useAdsStore = defineStore('ads', {
    state : () => ({
       filter: {
           type: '',
           city: '',
           square: '',
           price: ''
       },
        ads : [],
        isLoading: false

    }),

    actions : {
        setType(value: string) {
            console.log('value', value)
            if(value.toLowerCase() === 'location'){
                this.filter.type = 0
            }else if(value.toLowerCase() === 'vente'){
                this.filter.type = 1
            }else{
                this.filter.type = ""
            }

        },
        setCity(value: string) {
            this.filter.city = value;
        },
        setSquare(value: string) {
            this.filter.square = value;
        },
        setPrice(value: string) {
            this.filter.price = value;
        },
        setAds(value: any){
            this.ads = value
        },

        async fetchAds(){
            try {
                this.isLoading = true;
                let url = `http://localhost:3000/ad?&city=${this.filter.city}`
                if(this.filter.square !== '') url+= `&squarefoot=${this.filter.square}`
                if(this.filter.price !== '') url+= `&price=${this.filter.price}`
                if(this.filter.type !== '') url+= `&type=${this.filter.type}`
                console.log(url)
                const response = await fetch(url , {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                console.log('data received', data)
                this.setAds(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des annonces:", error);
            }finally{
                this.isLoading = false
            }
        }
    }
})