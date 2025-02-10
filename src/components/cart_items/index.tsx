import { type CartItem as CartItemType } from "@/types"
import CartItem from "../cart_item"
import styles from "./cart_items.module.css"

export default function CartItems({ cart }: { cart: CartItemType[] }) {
  return (
    <div className={styles.list}>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}
