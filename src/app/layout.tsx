import "./globals.css"
import { CartProvider } from "@/contexts/cart"
import Header from "@/components/header"

export const metadata = {
  title: "Mobile Store",
  description: "Discover the latest smartphones",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <CartProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </CartProvider>
  )
}
