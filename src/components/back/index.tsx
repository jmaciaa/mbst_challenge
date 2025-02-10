import Link from "next/link"
import Image from "next/image"
import MaxWidthBox from "../max-width-box"
import styles from "./back.module.css"

export default function Back() {
  return (
    <MaxWidthBox className={styles.back}>
      <Link href="/">
        <Image src="/arrow.svg" alt="Arrow pointing to the left" width={20} height={20} />
        BACK
      </Link>
    </MaxWidthBox>
  )
}
