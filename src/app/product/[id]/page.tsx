import { fetchMobileApi } from "@/mobile-api"
import { Product as ProductType } from "@/types"
import { convertSpecs } from "@/utils"
import { ErrorMessage } from "@/components/error_message"
import Product from "@/components/product"
import Back from "@/components/back"
import Specifications from "@/components/specifications"
import SimilarItems from "@/components/similar_items"
import styles from "./page.module.css"

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string }>
}) {
  const productId = (await params).id
  const storageParam = (await searchParams).storage
  const colorParam = (await searchParams).color

  const { data: product } = await fetchMobileApi<ProductType>(`/products/${productId}`)

  if (!product) {
    return <ErrorMessage />
  }

  return (
    <>
      <Back />
      <div className={styles.main}>
        <Product product={product} selectedColor={colorParam} selectedStorage={storageParam} />
        <Specifications specs={convertSpecs(product)} />
        <SimilarItems similarProducts={product.similarProducts} />
      </div>
    </>
  )
}
