'use client'

import { createContext, useContext, useState } from 'react'
import { Product } from '@/components/ProductCard'

type QuickViewContextType = {
  openQuickView: (product: Product) => void
  closeQuickView: () => void
  product: Product | null
}

const QuickViewContext = createContext<QuickViewContextType | null>(null)

export function QuickViewProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null)

  const openQuickView = (p: Product) => setProduct(p)
  const closeQuickView = () => setProduct(null)

  return (
    <QuickViewContext.Provider value={{ product, openQuickView, closeQuickView }}>
      {children}
    </QuickViewContext.Provider>
  )
}

export function useQuickView() {
  const context = useContext(QuickViewContext)
  if (!context) throw new Error('useQuickView must be used inside provider')
  return context
}