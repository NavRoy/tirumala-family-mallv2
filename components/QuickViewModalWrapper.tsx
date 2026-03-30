'use client'

import QuickViewModal from './QuickViewModal'
import { useQuickView } from '@/context/QuickViewContext'

export default function QuickViewModalWrapper() {
  const { product, closeQuickView } = useQuickView()

  return (
    <QuickViewModal
      product={product}
      onClose={closeQuickView}
    />
  )
}