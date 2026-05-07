"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "@/services/productsClient";

export default function ProductForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await createProduct({
        title,
        price,
        description: "Created from form",
      });

      setTitle("");
      setPrice("");
      router.refresh();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Create Product</h3>

      <input
        type="text"
        placeholder="Product title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "10px", padding: "8px" }}
      />

      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ marginRight: "10px", padding: "8px" }}
      />

      <button type="submit" style={{ padding: "8px 12px" }}>
        Add Product
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}