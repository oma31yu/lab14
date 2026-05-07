import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "30px" }}>
      <h1>Lab14 Product App</h1>

      <p>Welcome to my Next.js project</p>

      <Link href="/products">
        Go to Products
      </Link>
    </main>
  );
}