import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";

const PhonePage = async () => {
    const products = await getAllProducts("phone");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default PhonePage;