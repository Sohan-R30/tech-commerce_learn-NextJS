import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";


export const metadata = {
    title: 'Tablet | Tech Commerce',
    description: 'Showing all Tablet',
  }


const TabletPage = async () => {
    const products = await getAllProducts("tablet");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default TabletPage;