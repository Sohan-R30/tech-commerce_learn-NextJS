import SingleProducts from "@/components/Products/SingleProducts/SingleProducts";


const singleProductPage = ({ params }) => {
    return (
        <div className="my-10">
            <SingleProducts productId={params?.productId}/>
        </div>
    );
};

export default singleProductPage;