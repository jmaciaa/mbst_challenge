import type { Product } from "@/types"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timer: NodeJS.Timeout
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ((...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => func(...args), delay)
  }) as T
}

export const removeDuplicates = <T extends { id: string }>(list: T[]) => [
  ...new Map(list.map((item) => [item.id, item])).values(),
]

export function first20Items<T>(arr: T[]): T[] {
  return arr.slice(0, 20)
}

export const convertSpecs = (product: Product) => {
  const keys = Object.keys(product.specs) as Array<keyof Product["specs"]>
  const productSpecs = keys.map((key) => ({
    title: camelCaseToStringWithSpaces(key),
    content: product.specs[key],
  }))
  return [
    { title: "brand", content: product.brand },
    { title: "name", content: product.name },
    { title: "description", content: product.description },
    ...productSpecs,
  ]
}

export const convertStorage = (storageOptions: Product["storageOptions"]) =>
  storageOptions.map((option) => ({
    id: option.capacity,
    value: option.capacity,
    text: option.capacity,
  }))

export const convertColors = (colorOptions: Product["colorOptions"]) =>
  colorOptions.map((option) => ({
    id: option.hexCode,
    value: option.name,
    text: option.name,
  }))

export const getImage = (colorParam: string, product: Product) => {
  return colorParam
    ? product.colorOptions.find((option) => option.name === colorParam)?.imageUrl
    : product.colorOptions[0].imageUrl
}

export const getPrice = (storageParam: string, product: Product) => {
  return storageParam
    ? product.storageOptions.find((option) => option.capacity === storageParam)?.price
    : product.basePrice
}

const camelCaseToStringWithSpaces = (str: string) => str.replace(/([A-Z])/g, " $1")
