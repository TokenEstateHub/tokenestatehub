import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    oldPrice: number;
    images: string[];
    brand: string;
    color: string;
    category: string;
    rating: number;
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetch("/data/products/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error loading products:", error));
    }, []);

    if (selectedProduct) {
        return <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />;
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4 text-blue-800">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
                        <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p className="text-gray-600">{product.category}</p>
                            <p className="text-blue-500 text-lg font-bold">${product.price}</p>
                            <button
                                onClick={() => setSelectedProduct(product)}
                                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}