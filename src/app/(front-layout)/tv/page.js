import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";


export const metadata = {
    title: 'TV | Tech Commerce',
    description: 'Showing all TV',
  }


const TVPage = async () => {
    const products = await getAllProducts("tv");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default TVPage;