import { useState } from 'react';

interface AddProductProps {
    onAddProduct: (product: {
        id: number;
        title: string;
        price: string;
        location: string;
        type: string;
        images: string[];
    }) => void;
}

const AddProduct = ({ onAddProduct }: AddProductProps) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('For Sale');
    const [images, setImages] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const newProduct = {
            id: Date.now(), // Unique ID for now
            title,
            price,
            location,
            type,
            images: images.split(',').map((img) => img.trim()), // Convert string to array
        };

        onAddProduct(newProduct);

        // Reset form fields
        setTitle('');
        setPrice('');
        setLocation('');
        setType('For Sale');
        setImages('');
    };

    return (
        <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="For Sale">For Sale</option>
                    <option value="For Rent">For Rent</option>
                </select>
                <input
                    type="text"
                    placeholder="Image URLs (comma-separated)"
                    value={images}
                    onChange={(e) => setImages(e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;