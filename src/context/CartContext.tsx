"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  sku: string;
  features: string[];
}

export interface CartItem {
  plan: Plan;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (plan: Plan) => void;
  removeFromCart: (planId: string) => void;
  updateQuantity: (planId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("by-software-cart");
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("by-software-cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (plan: Plan) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.plan.id === plan.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.plan.id === plan.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { plan, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (planId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.plan.id !== planId));
  };

  const updateQuantity = (planId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(planId);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.plan.id === planId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = () => {
    return items.reduce((total, item) => total + item.plan.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}