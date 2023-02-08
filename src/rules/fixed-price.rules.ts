import { PricingRule } from "../interfaces/pricing-rule.interface";

export class FixedPrice implements PricingRule {
    constructor(
        private target: number,
        private promoPrice: number
    ) { }

    getTotalPrice(items: number, price: number): number {
        if (items >= this.target) {
            return Math.floor(items / this.target) * this.promoPrice + (items % this.target) * price;
        } else {
            return price * items;
        }
    }    
}