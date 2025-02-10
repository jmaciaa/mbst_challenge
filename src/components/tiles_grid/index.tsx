import { AnimatePresence } from "framer-motion"
import type { ProductList } from "@/types"
import MaxWidthBox from "../max-width-box"
import Tile from "../tile"
import styles from "./tiles_grid.module.css"

export default function TilesGrid({ tiles }: { tiles: ProductList }) {
  return (
    <MaxWidthBox className={styles.wrapper}>
      <ul className={styles.grid}>
        <AnimatePresence>
          {tiles.map(({ id, brand, name, basePrice, imageUrl }) => (
            <Tile
              key={id}
              id={id}
              brand={brand}
              name={name}
              basePrice={basePrice}
              imageUrl={imageUrl}
            />
          ))}
        </AnimatePresence>
      </ul>
    </MaxWidthBox>
  )
}
