"use client"

import type { ChangeEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { debounce } from "@/utils"
import MaxWidthBox from "../max-width-box"
import styles from "./search_bar.module.css"

export default function SearchBar({ resultsCount }: { resultsCount: number }) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const value = e.target.value
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set("search", value)
    } else {
      params.delete("search")
    }

    router.push(`?${params.toString()}`, { scroll: false })
  }

  const debuoncedHandleChange = debounce(handleChange, 500)
  return (
    <form className={styles.search}>
      <MaxWidthBox className={styles.wrapper}>
        <input
          onChange={debuoncedHandleChange}
          type="text"
          placeholder="Search for a smartphone..."
          name="search"
          aria-label="Search"
          defaultValue={searchParams.get("search") ?? ""}
        />
        <p className={styles.results}>
          <span>{resultsCount}</span>
          <span> RESULTS</span>
        </p>
      </MaxWidthBox>
    </form>
  )
}
