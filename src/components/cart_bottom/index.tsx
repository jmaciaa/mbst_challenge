"use client"

import Link from "next/link"
import { useCart } from "@/contexts/cart"
import MaxWidthBox from "../max-width-box"
import styles from "./cart_bottom.module.css"

export default function CartBottom() {
  const { cart } = useCart()
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  return (
    <MaxWidthBox className={styles.bottom}>
      <Link href="/" className={styles.continue_shopping}>
        <span>CONTINUE SHOPPING</span>
      </Link>

      <div className={styles.wrapper}>
        {cart.length ? (
          <div className={styles.total}>
            <span>TOTAL</span>
            <span>{totalPrice} EUR</span>
          </div>
        ) : null}

        {cart.length ? (
          <Link className={styles.pay} href="/">
            PAY
          </Link>
        ) : null}
      </div>
    </MaxWidthBox>
  )
}
