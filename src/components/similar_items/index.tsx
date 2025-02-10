import { removeDuplicates } from "@/utils"
import { Product } from "@/types"
import Tile from "../tile"
import styles from "./similar_items.module.css"

export default function SimilarItems({
  similarProducts,
}: {
  similarProducts: Product["similarProducts"]
}) {
  return (
    <section className={styles.similar}>
      <h3>SIMILAR ITEMS</h3>
      <ul className={styles.tiles}>
        {removeDuplicates(similarProducts).map(({ id, brand, name, basePrice, imageUrl }) => (
          <Tile
            key={id}
            id={id}
            brand={brand}
            name={name}
            basePrice={basePrice}
            imageUrl={imageUrl}
          />
        ))}
      </ul>
    </section>
  )
}
