"use client"

import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/cart"
import { useClientOnly } from "@/hooks/use-client-only"
import MaxWidthBox from "../max-width-box"
import styles from "./header.module.css"

export default function Header() {
  const { cart } = useCart()
  const hasMounted = useClientOnly()
  return (
    <header className={styles.header}>
      <MaxWidthBox className={styles.wrapper}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="MBST logo"
            width={77}
            height={30}
            priority
          />
        </Link>
        {hasMounted ? (
          <Link aria-label={`Cart, ${cart.length} items`} href="/cart" className={styles.cart}>
            <Image
              src={cart.length ? "/bag_filled.svg" : "/bag.svg"}
              alt="Bag"
              width={18}
              height={18}
            />
            <span aria-hidden>{cart.length}</span>
          </Link>
        ) : null}
      </MaxWidthBox>
    </header>
  )
}
