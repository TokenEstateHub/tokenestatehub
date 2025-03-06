import { useState, useEffect } from "react";

interface Property {
    id: number;
    title: string;
    price: string;
    location: string;
    type: string;
    image: string;
}

export const useProducts = () => {
    const [products, setProducts] = useState<Property[]>([]);
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

    useEffect(() => {
        fetch("/data/products/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error loading products:", error));
    }, []);

    const handleViewDetails = (property: Property) => {
        setSelectedProperty(property);
    };

    return {
        products,
        selectedProperty,
        handleViewDetails,
        setSelectedProperty,
    };
};