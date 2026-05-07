import Link from "next/link";
import ProductForm from "./ProductForm";

const baseUrl = "https://lab14-sse8.vercel.app";

async function getProducts() {
  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main style={{ padding: "30px" }}>
      <h1>{process.env.NEXT_PUBLIC_SITE_NAME}</h1>
      <h2>Products List</h2>

      <ProductForm />

      <hr />

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}