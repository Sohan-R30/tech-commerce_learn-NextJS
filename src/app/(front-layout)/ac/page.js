import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";


export const metadata = {
    title: 'AC | Tech Commerce',
    description: 'Showing all ac',
  }

  
const ACPage = async () => {
    const products = await getAllProducts("ac");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};

export default ACPage;