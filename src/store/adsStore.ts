import {defineStore} from "pinia";

export const useAdsStore = defineStore('ads', {
    state : () => ({
        typeFilter : '',
        cityFilter: '',
        squareFilter: '',
        priceFilter: '',
        ads : []
    }),

    actions : {
        setType(value: string) {
            value === 'location' ? this.typeFilter = '0' : this.typeFilter = '1';
        },
        setCity(value: string) {
            this.cityFilter = value;
        },
        setSquare(value: string) {
            this.squareFilter = value;
        },
        setPrice(value: string) {
            this.priceFilter = value;
        },
        setAds(value: any){
            this.ads = value
        },

        async fetchAds(){
            try {
                let url = `http://localhost:3000/ad?&city=${this.cityFilter}`
                if(this.squareFilter !== null) url+= `&squarefoot=${this.squareFilter}`
                if(this.priceFilter !== null) url+= `&price=${this.priceFilter}`
                if(this.typeFilter !== '') url+= `&type=${this.typeFilter}`
                console.log(url)
                const response = await fetch(url , {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                this.setAds(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des annonces:", error);
            }
        }
    }
})