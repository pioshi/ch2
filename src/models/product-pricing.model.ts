import { PricingRule } from "../interfaces/pricing-rule.interface";

export class ProductPricing {
    constructor(
        public sku: string,
        public price: number,
        public pricingRule: PricingRule | null
    ) { }
}