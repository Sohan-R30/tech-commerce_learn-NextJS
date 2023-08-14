import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";

const LaptopPage = async () => {
    const products = await getAllProducts("laptop");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default LaptopPage;