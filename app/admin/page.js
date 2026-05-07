import { cookies } from "next/headers";
import Link from "next/link";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");

  if (!auth) {
    return (
      <main style={{ padding: "30px" }}>
        <h1>Access denied</h1>
        <p>Please login first.</p>
        <Link href="/products">Back to products</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "30px" }}>
      <h1>Admin Page</h1>
      <p>This page is protected by mock cookie.</p>
    </main>
  );
}