export const PriceFormated = (value) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'USD'
  }).format(value)
}