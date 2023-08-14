import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";

const WatchPage = async () => {
    const products = await getAllProducts("watch");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default WatchPage;