let customer = {
    name : 'Mohan Shahi',
    age : 21,
    gender : 'Female'
}

let Any_offer = {
    for_female : {
        today_offer : 50
    }
};


let mintra_product1={
    company:'Banana',
    item_name:'T-shirt',
    price:100,

    display_price:function(){

        if (customer.gender === 'Male'){
            return `
    Brand: ${this.company}
    Product Name: ${this.item_name}
    Price: रु${this.price}`
        }
        else{
            let discount = Any_offer.for_female.today_offer;
            let final_price = this.price*discount/this.price;
            return `
    Brand: ${this.company}
    Product Name: ${this.item_name}
    Price: रु${this.price}
    Offer Price: रु${final_price}`
    }
    }
};

console.log(mintra_product1.display_price())