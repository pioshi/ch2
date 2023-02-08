import { ProductPricing } from "./models/product-pricing.model";
import { FixedPrice } from "./rules/fixed-price.rules";

export const pricing_rules = [
    new ProductPricing('A', 50, new FixedPrice(3, 130)),
    new ProductPricing('B', 30, new FixedPrice(2, 45)),
    new ProductPricing('C', 20, null),
    new ProductPricing('D', 15, null),
]