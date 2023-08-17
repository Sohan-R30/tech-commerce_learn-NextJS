import SingleProducts from "@/components/Products/SingleProducts/SingleProducts";
import { getsingleProducts } from "@/utils/getsingleProducts";


export async function generateMetadata({ params }, parent) {
    const {productId} = params
    const product = await getsingleProducts(productId);
   
    return {
      title: product?.productFullName,
      description: product?.productDescription.slice(0,100),
      
    }
  }
   

const singleProductPage = ({ params }) => {
    return (
        <div className="my-10">
            <SingleProducts productId={params?.productId}/>
        </div>
    );
};

export default singleProductPage;