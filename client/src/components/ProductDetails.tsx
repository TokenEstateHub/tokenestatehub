import { useState } from "react";
import * as React from "react";

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

interface ProductDetailsProps {
    product: Product;
    onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
    const { name, description, price, oldPrice, images, brand, color, category, rating } = product;
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="container mx-auto p-4 md:flex md:gap-10">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Back to Products
            </button>

            {/* Image Gallery */}
            <div className="flex flex-col items-center md:w-1/2">
                <img src={selectedImage} alt={name} className="w-full h-auto rounded-lg shadow-md" />
                <div className="flex gap-2 mt-4">
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={name}
                            className={`w-16 h-16 cursor-pointer rounded-md border-2 ${
                                selectedImage === img ? "border-blue-500" : "border-gray-300"
                            }`}
                            onClick={() => setSelectedImage(img)}
                        />
                    ))}
                </div>
            </div>

            {/* Product Information */}
            <div className="md:w-1/2 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">{name}</h1>
                <div className="flex items-center text-blue-500">
                    {"⭐".repeat(Math.floor(rating))} <span className="text-gray-500 ml-2">({rating})</span>
                </div>
                <p className="text-gray-600">{description}</p>

                <div className="text-2xl font-semibold">
                    ${price} <span className="text-gray-400 line-through ml-2">${oldPrice}</span>
                </div>

                <div className="text-sm text-gray-600">
                    <p>
                        <strong>Brand:</strong> {brand}
                    </p>
                    <p>
                        <strong>Color:</strong> {color}
                    </p>
                    <p>
                        <strong>Category:</strong> {category}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                    <button className="px-6 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300">
                        Add to Cart
                    </button>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Buy now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;