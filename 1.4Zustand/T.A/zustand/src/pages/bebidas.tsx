import create from 'zustand';

interface ProductState {
  juice: number;
  soda: number;
}

interface FactoryStore {
  products: ProductState;
  produce: (product: keyof ProductState, quantity: number) => void;
  distribute: (product: keyof ProductState, quantity: number) => void;
}

const Storage = create <FactoryStore>((set) => ({
  products: {
    juice: 100,
    soda: 150,
  },
  produce: (product, quantity) =>
    set((state) => ({
      products: {
        ...state.products,
        [product]: state.products[product] + quantity,
      },
    })),
  distribute: (product, quantity) =>
    set((state) => ({
      products: {
        ...state.products,
        [product]: state.products[product] - quantity,
      },
    })),
}));

export default Storage;
