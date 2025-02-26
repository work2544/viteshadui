import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type {
  CountActionKind,
  MenuCategory,
  MenuItem,
} from "~/components/types/Types";
import { menu } from "~/data/menu";

type CountContextType = {
  state: CountState;
  dispatch: React.Dispatch<CountAction>;
};
type ICartProvider = {
  children: ReactNode;
};
const CartContext = createContext<CountContextType | undefined>(undefined);

export default function CartProvider({ children }: ICartProvider) {
  const [product, setProduct] = useState<MenuCategory[]>(menu);
  const [state, dispatch] = useReducer(CartReducer, {
    product: product,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

interface CountAction {
  type: CountActionKind;
  payload: MenuItem;
}
interface CountState {
  product: MenuCategory[];
  cart: MenuItem[];
}
export const CartReducer = (
  state: CountState,
  action: CountAction
): CountState => {
  const existingItem = state.cart.find((item) => item.id === action.payload.id);
  switch (action.type) {
    case "ADD_TO_CART":
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      } else {
        
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      }

    case "REMOVE_FROM_CART":

      if (existingItem && existingItem.qty > 0) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty - 1 }
              : item
          ),
        };
      }
    default:
      return state;
  }
};
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
