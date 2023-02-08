import { ProductPricing } from "./models/product-pricing.model";
import * as _ from "lodash";

export class CheckOut {
    private scans: string[] = [];

    constructor(private rules: ProductPricing[]) {
        
    }

    get total(): number {
        let total = 0;
        const skus = _.countBy(this.scans);
        for (let sku in skus) {
            const rule = this.rules.find(e => e.sku === sku);
            if (rule) {
                if (rule.pricingRule) {
                    total += rule.pricingRule.getTotalPrice(skus[sku], rule.price);
                } else {
                    total += skus[sku] * rule.price
                }
            } else {
                console.log(`Sku ${sku} has no pricing!`)
            }
        }
        return total;
    }

    scan(sku: string) {
        this.scans.push(sku);
    }
}