import ProductInfo from "../product_info"
import Image from "next/image"
import { getImage } from "@/utils"
import type { Product } from "@/types"
import styles from "./product.module.css"

export default function Product({
  product,
  selectedStorage,
  selectedColor,
}: {
  product: Product
  selectedStorage: string
  selectedColor: string
}) {
  const image = getImage(selectedColor, product)
  return (
    <section className={styles.product}>
      <div className={styles.image}>
        <Image src={image ?? ""} alt="Phone" width={362} height={362} priority />
      </div>
      <ProductInfo
        product={product}
        selectedStorage={selectedStorage}
        selectedColor={selectedColor}
        image={image ?? ""}
      />
    </section>
  )
}
