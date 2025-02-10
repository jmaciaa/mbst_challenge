"use client"

import Image from "next/image"
import type { CartItem as CartItemType } from "@/types"
import { useCart } from "@/contexts/cart"
import styles from "./cart_item.module.css"

export default function CartItem({ item }: { item: CartItemType }) {
  const { id, image, name, storage, color, price } = item
  const { removeFromCart } = useCart()
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image src={image} alt={name} fill sizes="(max-width: 768px) 160px, 262px" priority />
      </div>
      <div className={styles.text}>
        <div className={styles.info}>
          <p>{name}</p>
          <p>
            {storage} | {color}
          </p>
          <p className={styles.price}>{price} EUR</p>
        </div>
        <button type="button" onClick={() => removeFromCart(id)}>
          Remove
        </button>
      </div>
    </div>
  )
}
