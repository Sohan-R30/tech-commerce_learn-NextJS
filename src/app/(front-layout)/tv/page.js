import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";

const TVPage = async () => {
    const products = await getAllProducts("tv");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default TVPage;