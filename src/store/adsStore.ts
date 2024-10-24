import {defineStore} from "pinia";

export const useAdsStore = defineStore('ads', {
    state : () => ({
       filter: {
           type: '',
           city: '',
           square: '',
           price: ''
       },
        cities : [],
        ads : [],
        isLoading: false

    }),

    actions : {
        MUTATE_CITIES(cities: any[]){
            cities.map((city) => {
              if(!this.cities.includes(city.city)){
                this.cities.push(city.city)
              }
            })
        },


        setCities(value: any){
            this.MUTATE_CITIES(value)
        },

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
            }finally{
                this.isLoading = false
            }
        },
        
        async fetchCities(){
            try{
                const response = await fetch('http://localhost:3000/ad/cities')
                const data = await response.json();
                this.setCities(data)
            }catch (e) {
                console.error("Erreur lors de la récupération des villes:", e);
            }
        }
    }
})