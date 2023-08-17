import axios from "axios";

export const getAllProducts = async (product) => {
    try {
        const res = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/products?product=${product}`,)
        console.log(process.env.NEXT_PUBLIC_API_URL);
        return res?.data;
    } catch (error) {
        console.error('Error fetching all product:', error);
        return [];
    }
}

