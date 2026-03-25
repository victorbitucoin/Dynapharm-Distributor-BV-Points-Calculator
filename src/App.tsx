/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from "react";
import { 
  Search, 
  Plus, 
  Minus, 
  Trash2, 
  Calculator, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Home,
  ChevronRight,
  ShoppingBag
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Fuse from "fuse.js";
import { PRODUCTS, type Product } from "./constants";

interface CartItem extends Product {
  quantity: number;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize Fuse for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(PRODUCTS, {
      keys: ["name", "category"],
      threshold: 0.6, // Increased from 0.4 to be more "smart" and fuzzy
      includeScore: true,
      shouldSort: true,
      minMatchCharLength: 2,
      location: 0,
      distance: 100,
      findAllMatches: true,
    });
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return PRODUCTS;
    
    // Use Fuse for fuzzy matching
    const results = fuse.search(searchQuery);
    return results.map(result => result.item);
  }, [searchQuery, fuse]);

  const totalBV = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.bv * item.quantity, 0);
  }, [cart]);

  // Qualification logic: 50 points for all
  const threshold = 50;
  const isQualified = totalBV >= threshold;

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const clearCart = () => setCart([]);

  const openInNewWindow = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-[#006837] selection:text-white">
      {/* Header */}
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#006837] rounded-lg flex items-center justify-center">
              <Calculator className="text-white w-5 h-5" />
            </div>
            <h1 className="font-bold text-xl tracking-tight text-[#006837]">DYNAPHARM DISTRIBUTOR POINTS CALCULATOR</h1>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => openInNewWindow("https://dynapharm.co.ke")}
              className="flex items-center gap-1.5 text-sm font-medium text-[#4B5563] hover:text-[#006837] transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </button>
            <button 
              onClick={() => openInNewWindow("https://dynapharm.co.ke")}
              className="flex items-center gap-1.5 text-sm font-medium bg-[#006837] text-white px-4 py-2 rounded-full hover:bg-[#00522b] transition-all shadow-sm"
            >
              <span className="hidden sm:inline">Main Website</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Product Selection */}
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB]">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#006837]" />
              Select Products
            </h2>
            
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] w-5 h-5" />
              <input
                type="text"
                placeholder="Search products (e.g., 'maharani' or 'alani')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#F3F4F6] border-none rounded-xl focus:ring-2 focus:ring-[#006837] transition-all outline-none text-sm"
              />
            </div>

            {/* Product List */}
            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  className="group flex items-center justify-between p-3 rounded-xl hover:bg-[#F9FAFB] border border-transparent hover:border-[#E5E7EB] transition-all"
                >
                  <div className="flex-1">
                    <p className="text-xs font-medium text-[#006837] uppercase tracking-wider mb-0.5 opacity-70">
                      {product.category}
                    </p>
                    <h3 className="text-sm font-semibold text-[#1F2937] group-hover:text-[#006837] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs font-mono text-[#6B7280] mt-1">
                      {product.bv} BV
                    </p>
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="ml-4 p-2 bg-[#F3F4F6] text-[#4B5563] rounded-lg hover:bg-[#006837] hover:text-white transition-all active:scale-95"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-[#6B7280] text-sm italic">No products found matching your search.</p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Right Column: Calculator Summary */}
        <div className="lg:col-span-5 space-y-6">
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5E7EB] sticky top-24">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#006837]" />
              Calculation Summary
            </h2>

            {/* Cart Items */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between text-xs font-bold text-[#6B7280] uppercase tracking-widest border-b border-[#F3F4F6] pb-2">
                <span>Items</span>
                <button 
                  onClick={clearCart}
                  className="text-[#EF4444] hover:underline normal-case font-medium"
                >
                  Clear All
                </button>
              </div>
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                <AnimatePresence initial={false}>
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex items-center justify-between group"
                    >
                      <div className="flex-1 min-w-0 pr-4">
                        <h4 className="text-sm font-medium text-[#1F2937] truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs text-[#6B7280] font-mono">
                          {item.bv} BV × {item.quantity} = {(item.bv * item.quantity).toFixed(1)} BV
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-[#F3F4F6] rounded-lg p-1">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-white rounded transition-colors text-[#4B5563]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-white rounded transition-colors text-[#4B5563]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 text-[#9CA3AF] hover:text-[#EF4444] transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {cart.length === 0 && (
                  <div className="text-center py-8 bg-[#F9FAFB] rounded-xl border border-dashed border-[#E5E7EB]">
                    <p className="text-xs text-[#9CA3AF]">Your cart is empty</p>
                  </div>
                )}
              </div>
            </div>

            {/* Totals & Status */}
            <div className="space-y-4 pt-6 border-t border-[#F3F4F6]">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-1">
                    Total Points
                  </p>
                  <p className="text-4xl font-black text-[#1F2937] font-mono leading-none">
                    {totalBV.toFixed(1)} <span className="text-lg font-bold text-[#006837]">BV</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-[#6B7280] uppercase tracking-widest mb-1">
                    Goal
                  </p>
                  <p className="text-lg font-bold text-[#4B5563] font-mono">
                    {threshold} BV
                  </p>
                </div>
              </div>

              {/* Qualification Progress Bar */}
              <div className="h-3 bg-[#F3F4F6] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (totalBV / threshold) * 100)}%` }}
                  className={`h-full transition-all duration-500 ${
                    isQualified ? "bg-[#006837]" : "bg-[#F59E0B]"
                  }`}
                />
              </div>

              {/* Status Message */}
              <motion.div
                key={isQualified ? "qualified" : "not-qualified"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl flex items-start gap-3 ${
                  isQualified 
                    ? "bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]" 
                    : "bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A]"
                }`}
              >
                {isQualified ? (
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className="font-bold text-sm">
                    {isQualified ? "Qualified!" : "Not Qualified Yet"}
                  </h4>
                  <p className="text-xs mt-1 opacity-90 leading-relaxed">
                    {isQualified 
                      ? `Congratulations! You have reached the ${threshold} BV qualification threshold.`
                      : `You need ${(threshold - totalBV).toFixed(1)} more BV to reach the ${threshold} BV qualification threshold.`}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            <div className="mt-8 pt-6 border-t border-[#F3F4F6] grid grid-cols-1 gap-3">
              <button 
                onClick={() => openInNewWindow("https://dynapharm.sale.co.ke")}
                className="flex items-center justify-between w-full p-3 text-xs font-semibold text-[#4B5563] bg-[#F9FAFB] rounded-xl hover:bg-[#F3F4F6] transition-all group"
              >
                <span>More Information</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] text-center text-[#9CA3AF] mt-2">
                &copy; {new Date().getFullYear()} Dynapharm Kenya. All rights reserved.
              </p>
            </div>
          </section>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E5E7EB;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #D1D5DB;
        }
      `}</style>
    </div>
  );
}
