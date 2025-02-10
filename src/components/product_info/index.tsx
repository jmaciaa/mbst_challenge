"use client"

import { motion } from "framer-motion"
import type { Product } from "@/types"
import { convertColors, convertStorage, getPrice } from "@/utils"
import AddToCartButton from "../add_to_cart_button"
import ColorLabel from "../color_label"
import RadioInputGroup from "../radio_input_group"
import styles from "./product_info.module.css"

export default function ProductInfo({
  product,
  selectedStorage,
  selectedColor,
  image,
}: {
  product: Product
  selectedStorage: string
  selectedColor: string
  image: string
}) {
  const storage = convertStorage(product.storageOptions)
  const colors = convertColors(product.colorOptions)
  const areStorageAndColorSelected = !!selectedStorage && !!selectedColor
  const price = getPrice(selectedStorage, product)

  return (
    <form className={styles.product_options} action="">
      <div className={styles.info}>
        <h1>{product.name}</h1>
        <p>
          From{" "}
          <motion.span
            key={price}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            exit={{ opacity: 0 }}
          >
            {price}
          </motion.span>{" "}
          EUR
        </p>
      </div>
      <div className={styles.radios}>
        <RadioInputGroup
          legend="STORAGE. HOW MUCH SPACE DO YOU NEED?"
          name="storage"
          options={storage}
        />
        <RadioInputGroup
          legend="COLOR. PICK YOUR FAVOURITE"
          name="color"
          options={colors}
          LabelComponent={({ option }) => <ColorLabel option={option} />}
          showSelected
        />
      </div>
      <AddToCartButton
        areStorageAndColorSelected={areStorageAndColorSelected}
        product={{
          id: product.id,
          name: product.name,
          storage: selectedStorage,
          color: selectedColor,
          price: price || 0,
          image: image || "",
        }}
      />
    </form>
  )
}
