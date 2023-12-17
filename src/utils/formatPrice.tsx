export const formatPrice = (price: number) => {
  const formattedPrice = price - (price % 1000);
  return formattedPrice.toLocaleString();
};
