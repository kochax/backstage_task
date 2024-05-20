export const usePriceUtils = () => {
  const formatPrice = (
    price: number | string,
    decimal: number = 2,
    currency: string = "$"
  ): string => {
    const parsedPrice = parseFloat(price.toString());

    return parsedPrice % 1 === 0
      ? `${currency}${parsedPrice.toFixed(0)}`
      : `${currency}${parsedPrice.toFixed(decimal)}`;
  };

  return { formatPrice };
};
