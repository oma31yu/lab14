import Link from "next/link";

async function getProduct(id) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export default async function ProductDetailPage({ params }) {
    const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return (
      <main style={{ padding: "30px" }}>
        <h1>Product not found</h1>
        <Link href="/products">Back to products</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "30px" }}>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>

      <Link href="/products">Back to products</Link>
    </main>
  );
}