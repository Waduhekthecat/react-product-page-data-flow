import ProductCard from "../../components/ProductCard"
import { products } from "../../data/products"
import "./_styles.css"

function ProductPage() {
  return (
    <main className="page-shell">
      <header className="product-page-header">
        <h1 className="product-page-title">Product Page Data Flow</h1>
        <p className="product-page-subtitle">
          Template products rendered from structured data through reusable React
          components.
        </p>
      </header>

      <section className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={`${product.name}-${index}`} product={product} />
        ))}
      </section>
    </main>
  )
}

export default ProductPage