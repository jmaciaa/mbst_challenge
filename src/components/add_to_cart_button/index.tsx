"use client"

import type { MouseEvent } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/cart"
import type { CartItem } from "@/types"
import styles from "./add_to_cart_button.module.css"

export default function AddToCartButton({
  areStorageAndColorSelected,
  product,
}: {
  areStorageAndColorSelected: boolean
  product: CartItem
}) {
  const router = useRouter()
  const { addToCart } = useCart()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addToCart(product)

    router.push("/cart")
  }

  return (
    <button
      className={styles.btn}
      type="submit"
      disabled={!areStorageAndColorSelected}
      onClick={handleClick}
    >
      ADD
    </button>
  )
}
