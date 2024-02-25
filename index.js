import Freecurrencyapi from '@everapi/freecurrencyapi-js'; 

const freecurrencyapi = new Freecurrencyapi('fca_live_pHZeHWobakJWjg5Ll3NYnESkUwRuAXA8DNKVuZaS');

export async function convertCurrency(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier*units;
}


