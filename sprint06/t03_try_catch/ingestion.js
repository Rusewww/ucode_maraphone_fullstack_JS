let {Product} = require("./product.js")

class Ingestion {
    constructor(meal_type, id) {
        this.meal_type = meal_type
        this.id = id
    }

    day_of_diet = 0;
    products = [];

    getFromFridge(product) {
        for (let prod of this.products) {
            if (prod.name === product) {
                if (prod.kcal_per_portion > 200) {
                    throw `To many calories in ${product} for ${this.meal_type}`
                }
            }
        }
    }

    setProduct(product) {
        this.products.push(product)
    }

    getProductInfo(product) {
        let result = {}
        for (let p of this.products) {
            if (p.name === product) {
                result.kcal = p.kcal_per_portion
                return result
            }
        }
    }
}

module.exports.Ingestion = Ingestion;