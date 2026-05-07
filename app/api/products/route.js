let products = [
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

function errorResponse(message, status = 400) {
  return Response.json(
    { error: { message } },
    { status }
  );
}

export async function GET() {
  return Response.json(products);
}

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.title || !data.price) {
      return errorResponse("Title and price are required", 400);
    }

    if (isNaN(Number(data.price))) {
      return errorResponse("Price must be a number", 400);
    }

    const newProduct = {
      id: Date.now(),
      title: data.title,
      price: Number(data.price),
      description: data.description || "No description",
    };

    products.push(newProduct);

    return Response.json(newProduct, { status: 201 });
  } catch {
    return errorResponse("Invalid request body", 400);
  }
}