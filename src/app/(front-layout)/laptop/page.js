import ProductByCategory from "@/components/Products/CategoryProducts/ProductByCategory";
import { getAllProducts } from "@/utils/allProducts";


export const metadata = {
    title: 'Laptop | Tech Commerce',
    description: 'Showing all laptop',
  }


const LaptopPage = async () => {
    const products = await getAllProducts("laptop");

    return (
        <>
            <ProductByCategory products={products}/>
        </>
    );
};


export default LaptopPage;