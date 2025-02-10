"use client"

import { useCart } from "@/contexts/cart"
import { useClientOnly } from "@/hooks/use-client-only"
import CartBottom from "@/components/cart_bottom"
import MaxWidthBox from "@/components/max-width-box"
import CartItems from "@/components/cart_items"
import styles from "./page.module.css"

export default function Cart() {
  const { cart } = useCart()
  const hasMounted = useClientOnly()

  if (!hasMounted) return null

  return (
    <MaxWidthBox className={styles.cart}>
      <h1>Cart ({cart.length})</h1>
      <CartItems cart={cart} />
      <CartBottom />
    </MaxWidthBox>
  )
}
