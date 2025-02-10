export type ProductList = {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
}[];

export type Product = {
  id: string;
  brand: string;
  name: string;
  description: string;
  basePrice: number;
  rating: number;
  specs: {
    screen: string;
    resolution: string;
    processor: string;
    mainCamera: string;
    selfieCamera: string;
    battery: string;
    os: string;
    screenRefreshRate: string;
  };
  colorOptions: {
    name: string;
    hexCode: string;
    imageUrl: string;
  }[];
  storageOptions: {
    capacity: string;
    price: number;
  }[];
  similarProducts: ProductList;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  storage: string;
  color: string;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
};

export type RadioOption = {
  id: string;
  value: string;
  text: string;
};
