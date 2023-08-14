import { getAllProducts } from "@/utils/allProducts";

import ProductByCategory from "./CategoryProducts/ProductByCategory";

export const revalidate = 60


const Products = async () => {

    const products = await getAllProducts("all");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};
export default Products;
