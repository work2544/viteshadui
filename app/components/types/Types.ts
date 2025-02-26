export enum CountActionKind {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
}
export type MenuItem = {
  id: string;
  title: string;
  description: string;
  src: string;
  price: number;
  category: string;
  qty:number;
};

export type MenuCategory = {
  type: string;
  items: MenuItem[];
};