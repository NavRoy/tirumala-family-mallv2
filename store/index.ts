import { create } from 'zustand'

/* ─── Types ─── */
export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  size?: string
  qty: number
}

export interface WishItem {
  id: string
  name: string
  price: number
  image: string
  href: string
}

/* ─── Cart Store ─── */
interface CartStore {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (item: Omit<CartItem, 'qty'>) => void
  removeItem: (id: string, size?: string) => void
  updateQty: (id: string, size: string | undefined, qty: number) => void
  totalItems: () => number
  totalPrice: () => number
  clear: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (item) => {
    const existing = get().items.find(i => i.id === item.id && i.size === item.size)
    if (existing) {
      set({ items: get().items.map(i => i.id === item.id && i.size === item.size ? { ...i, qty: i.qty + 1 } : i) })
    } else {
      set({ items: [...get().items, { ...item, qty: 1 }] })
    }
  },
  removeItem: (id, size) => set({ items: get().items.filter(i => !(i.id === id && i.size === size)) }),
  updateQty: (id, size, qty) => {
    if (qty <= 0) { get().removeItem(id, size); return }
    set({ items: get().items.map(i => i.id === id && i.size === size ? { ...i, qty } : i) })
  },
  totalItems: () => get().items.reduce((s, i) => s + i.qty, 0),
  totalPrice: () => get().items.reduce((s, i) => s + i.price * i.qty, 0),
  clear: () => set({ items: [] }),
}))

/* ─── Wishlist Store ─── */
interface WishlistStore {
  items: WishItem[]
  isOpen: boolean
  openWishlist: () => void
  closeWishlist: () => void
  toggle: (item: WishItem) => void
  has: (id: string) => boolean
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],
  isOpen: false,
  openWishlist: () => set({ isOpen: true }),
  closeWishlist: () => set({ isOpen: false }),
  toggle: (item) => {
    const exists = get().items.find(i => i.id === item.id)
    if (exists) {
      set({ items: get().items.filter(i => i.id !== item.id) })
    } else {
      set({ items: [...get().items, item] })
    }
  },
  has: (id) => !!get().items.find(i => i.id === id),
}))
