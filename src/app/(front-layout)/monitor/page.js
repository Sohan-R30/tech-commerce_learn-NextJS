import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";

const MonitorPage = async () => {
    const products = await getAllProducts("monitor");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default MonitorPage;