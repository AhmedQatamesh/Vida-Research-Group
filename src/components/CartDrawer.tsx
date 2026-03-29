import { Link } from "react-router-dom";
import { X, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  const handleCheckout = () => {
    const cartUrl = items.map(item =>
      `?add-to-cart=${item.id}&quantity=${item.quantity}`
    ).join("&");
    window.location.href = `${import.meta.env.VITE_WC_URL}/checkout${cartUrl}`;
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-card shadow-2xl z-50 flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-teal" />
            <h2 className="font-heading font-semibold text-foreground text-lg">
              Cart ({totalItems})
            </h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button variant="outline" size="sm" className="mt-4" onClick={onClose}>
                Browse Compounds
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-muted rounded-lg">
                  {/* Image */}
                  <div className="w-16 h-20 bg-card rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
                    ) : (
                      <ShoppingCart className="h-6 w-6 text-muted-foreground/30" />
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm text-foreground truncate">{item.name}</h3>
                    <p className="text-teal font-semibold text-sm mt-1">${item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-card rounded transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-card rounded transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors shrink-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-heading font-bold text-foreground text-lg">${totalPrice.toFixed(2)}</span>
            </div>
            <Button
              onClick={handleCheckout}
              className="w-full bg-teal hover:bg-teal-light text-primary-foreground font-semibold"
              size="lg"
            >
              Proceed to Checkout
            </Button>
            <Button variant="outline" className="w-full" onClick={onClose}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </>
  );
}