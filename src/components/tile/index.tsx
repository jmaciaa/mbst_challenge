"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import styles from "./tile.module.css"

export default function Tile({
  id,
  brand,
  name,
  basePrice,
  imageUrl,
}: {
  id: string
  brand: string
  name: string
  basePrice: number
  imageUrl: string
}) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
      layout
    >
      <Link href={`/product/${id}`} className={styles.tile}>
        <div className={styles.image}>
          <Image src={imageUrl} alt={name} width={312} height={312} />
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <p className={styles.brand}>{brand}</p>
            <p className={styles.model}>{name}</p>
          </div>
          <div className={styles.price}>
            <span>{basePrice}</span>
            <span> EUR</span>
          </div>
        </div>
      </Link>
    </motion.li>
  )
}
