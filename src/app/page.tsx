import { first20Items, removeDuplicates } from "@/utils"
import { fetchMobileApi } from "@/mobile-api"
import type { ProductList } from "@/types"
import SearchBar from "@/components/search_bar"
import TilesGrid from "@/components/tiles_grid"
import { ErrorMessage } from "@/components/error_message"

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const { search: searchValue } = params as { [key: string]: string }
  const url = searchValue ? `/products?search=${searchValue}` : "/products"
  const { data, error } = await fetchMobileApi<ProductList>(url)

  if (error || !data) {
    return <ErrorMessage />
  }

  const tiles = first20Items(removeDuplicates(data))

  return (
    <>
      <SearchBar resultsCount={tiles.length} />
      <TilesGrid tiles={tiles} />
    </>
  )
}
