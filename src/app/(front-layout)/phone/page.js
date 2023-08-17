import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";

export const metadata = {
    title: 'Phone | Tech Commerce',
    description: 'Showing all Phone',
  }


const PhonePage = async () => {
    const products = await getAllProducts("phone");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default PhonePage;