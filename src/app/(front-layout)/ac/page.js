import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";

const ACPage = async () => {
    const products = await getAllProducts("ac");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};

export default ACPage;