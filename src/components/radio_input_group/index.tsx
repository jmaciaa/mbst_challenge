"use client"

import { useState, type ChangeEvent, type ReactNode } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import type { RadioOption } from "@/types"
import styles from "./radio_input_group.module.css"

type RadioInputGroupProps = {
  legend: string
  name: string
  options: RadioOption[]
  LabelComponent?: ({ option }: { option: RadioOption }) => ReactNode
  showSelected?: boolean
}

export default function RadioInputGroup({
  legend,
  name,
  options,
  LabelComponent,
  showSelected,
}: RadioInputGroupProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const selectedValue = searchParams.get(name)
  const [showHovered, setShowHovered] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const value = e.target.value
    const params = new URLSearchParams(searchParams.toString())

    params.set(name, value)
    router.push(`?${params.toString()}`, { scroll: false })
  }

  return (
    <fieldset className={styles.fieldset}>
      <legend>{legend}</legend>
      <div className={styles.radio_group}>
        {options.map((option) => (
          <div
            key={option.id}
            className={styles.option}
            onMouseEnter={() => setShowHovered(option.text)}
            onMouseLeave={() => setShowHovered("")}
          >
            <input
              type="radio"
              id={option.id}
              name={name}
              value={option.value}
              onChange={handleChange}
              checked={selectedValue === option.value}
              aria-label={option.text}
            />

            {LabelComponent ? (
              LabelComponent({ option })
            ) : (
              <label className={styles.default_label} htmlFor={option.id}>
                {option.text}
              </label>
            )}
          </div>
        ))}
      </div>
      {showSelected ? (
        <div className={`${styles.selected}`}>
          <motion.p
            key={showHovered || selectedValue}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            exit={{ opacity: 0 }}
          >
            {showHovered || selectedValue}
          </motion.p>
        </div>
      ) : null}
    </fieldset>
  )
}
