export interface PricingRule {
    getTotalPrice(count: number, price: number): number;
}