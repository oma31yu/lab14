const products = [
  {
    id: 1,
    title: "Laptop",
    price: 2500,
    description: "Powerful laptop for study and work",
  },
  {
    id: 2,
    title: "Phone",
    price: 1200,
    description: "Smartphone with good camera",
  },
];

export async function GET(request, { params }) {
  const { id } = await params;
  console.log(id);

  const product = products.find((item) => item.id == id);

  if (!product) {
    return Response.json(
      { error: { message: "Product not found" } },
      { status: 404 }
    );
  }

  return Response.json(product);
}