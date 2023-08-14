import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";

const DesktopPage = async () => {
    const products = await getAllProducts("desktop");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default DesktopPage;