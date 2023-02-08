import { CheckOut } from "./src/check-out";
import { pricing_rules } from "./src/prices";

const price = (goods: string) => {
    const co = new CheckOut(pricing_rules);
    goods.split('').forEach((e: string) => co.scan(e));
    return co.total;
}

test('', () => { expect(price("")).toBe(0); });

test('', () => { expect(price("A")).toBe(50); });
test('', () => { expect(price("AB")).toBe(80); });
test('', () => { expect(price("CDBA")).toBe(115); });

test('', () => { expect(price("AA")).toBe(100); });
test('', () => { expect(price("AAA")).toBe(130); });
test('', () => { expect(price("AAAA")).toBe(180); });
test('', () => { expect(price("AAAAA")).toBe(230); });
test('', () => { expect(price("AAAAAA")).toBe(260); });

test('', () => { expect(price("AAAB")).toBe(160); });
test('', () => { expect(price("AAABB")).toBe(175); });
test('', () => { expect(price("AAABBD")).toBe(190); });
test('', () => { expect(price("DABABA")).toBe(190); });


test('incremental', () => {
    const co = new CheckOut(pricing_rules);
    expect(co.total).toBe(0);
    co.scan("A");  expect(co.total).toBe( 50);
    co.scan("B");  expect(co.total).toBe( 80);
    co.scan("A");  expect(co.total).toBe(130);
    co.scan("A");  expect(co.total).toBe(160);
    co.scan("B");  expect(co.total).toBe(175);
});
