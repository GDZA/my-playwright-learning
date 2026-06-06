// Create a Product type
type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

// Create products using this type
const phone: Product = {
  name: "iPhone 16",
  price: 999,
  inStock: true,
};

const headphones: Product = {
  name: "AirPods",
  price: 199,
  inStock: false,
};

// Helper function to format price
function formatPrice(price: number): string {
  return `$${price}`;
}

// Example usage
console.log(formatPrice(phone.price));
console.log(formatPrice(headphones.price));