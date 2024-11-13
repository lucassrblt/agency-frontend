import {defineStore} from "pinia";

export const useAdsStore = defineStore('ads', {
    state : () => ({
       filter: {
           type: '',
           city: '',
           square: '',
           price: ''
       },
        cities : [] as string[],
        ads : [],
        currentAd: undefined,
        isLoading: false

    }),

    actions : {
        MUTATE_CITIES(cities: any[]){
            cities.map((city: string) => {
              if(!this.cities.includes(city)){
                this.cities.push(city)
              }
            })
            this.cities.unshift('Toutes les villes')
        },

        MUTATE_SELECT_AD(id: string){
            if(this.ads.length > 0 && id !== null){
                this.currentAd = this.ads.find((ad: any) => ad.id === id)
                console.log('current ad', this.currentAd)
            }else{
                console.log("Erreur lors de la récupération de l'annonce")
            }
        },


        setCities(value: any){
            this.MUTATE_CITIES(value)
        },

        setType(value: string) {
            if(value.toLowerCase() === 'location'){
                this.filter.type = value.toUpperCase()
            }else if(value.toLowerCase() === 'vente'){
                this.filter.type = value.toUpperCase()
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
                let url = `http://localhost:3000/ad?`
                if(this.filter.city !== '' && this.filter.city !== 'Toutes les villes') url += `&city=${this.filter.city}`
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
                console.log('response ads', data)
                this.setAds(data.data);
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
                this.setCities(data.data)
            }catch (e) {
                console.error("Erreur lors de la récupération des villes:", e);
            }
        }
    }
})