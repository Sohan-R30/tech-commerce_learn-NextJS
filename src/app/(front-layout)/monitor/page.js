import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";

export const metadata = {
    title: 'Monitor | Tech Commerce',
    description: 'Showing all Monitor',
  }


const MonitorPage = async () => {
    const products = await getAllProducts("monitor");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default MonitorPage;