import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";


export const metadata = {
    title: 'Desktop | Tech Commerce',
    description: 'Showing all Desktop',
  }


const DesktopPage = async () => {
    const products = await getAllProducts("desktop");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default DesktopPage;