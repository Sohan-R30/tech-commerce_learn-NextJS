import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";

const TabletPage = async () => {
    const products = await getAllProducts("tablet");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default TabletPage;