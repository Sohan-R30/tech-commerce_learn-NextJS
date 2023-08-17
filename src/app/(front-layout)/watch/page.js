import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";

export const metadata = {
    title: 'Watch | Tech Commerce',
    description: 'Showing all Watch',
  }


const WatchPage = async () => {
    const products = await getAllProducts("watch");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default WatchPage;