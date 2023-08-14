"use client"
import { useForm } from "react-hook-form";


const AddProduct = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="mt-5">
            <div className=' text-center'>
                <h3 className="text-2xl tracking-wider">Add Your Product Carefully</h3>
                <p className=" tracking-wider">Your Product will be Added or Cencel</p>
                <p>Its only choice of <strong> Admin</strong></p>
            </div>
            <div className="mt-5">
                <form onSubmit={handleSubmit(onSubmit)} className="my-10 grid grid-cols-2 justify-items-center gap-10">



                    <div className="border w-[500px] shadow-md rounded-md">
                        <h3 className="text-center uppercase text-xl font-semibold py-5 rounded-md">Product Must Details</h3>
                        <div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="category">Product Category <span className='text-red-500'>*</span> </label>
                                <input  {...register("category", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="category"/>
                                {errors.category && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product category Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productFullName">Product FullName <span className='text-red-500'>*</span> </label>
                                <input  {...register("productFullName", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productFullName"/>
                                {errors.productFullName && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Name Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productModel">Product Model <span className='text-red-500'>*</span> </label>
                                <input  {...register("productModel", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productModel"/>
                                {errors.productModel && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Model Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productBrand">Product Brand <span className='text-red-500'>*</span> </label>
                                <input  {...register("productBrand", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productBrand"/>
                                {errors.productBrand && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Brand Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productColor">Product Color <span className='text-red-500'>*</span> </label>
                                <input  {...register("productColor", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productColor"/>
                                {errors.productColor && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Color Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productAvailableQuantity">Product Quantity <span className='text-red-500'>*</span> </label>
                                <input  {...register("productAvailableQuantity", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productAvailableQuantity"/>
                                {errors.productAvailableQuantity && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product quantity Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productImage">Product Image <span className='text-red-500'>*</span> </label>
                                <input  {...register("productImage", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productImage"/>
                                {errors.productImage && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Image Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productPrice">Product Price <span className='text-red-500'>*</span> </label>
                                <input  {...register("productPrice", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productPrice"/>
                                {errors.productPrice && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Price Properly.</span>}
                            </div>
                        </div>
                    </div>
                    <div className="border w-[500px] shadow-md rounded-md">
                        <h3 className="text-center uppercase text-xl font-semibold py-5 rounded-md">Product Optional Details</h3>
                        <div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productDisplay">Product Display </label>
                                <input  {...register("productDisplay", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productDisplay"/>
                                {errors.productDisplay && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Display Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productProccesor">Product Proccessor </label>
                                <input  {...register("productProccesor", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productProccesor"/>
                                {errors.productProccesor && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Proccessor Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productRam">Product Ram </label>
                                <input  {...register("productRam", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productRam" />
                                {errors.productRam && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Ram Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productStorage">Product Storage </label>
                                <input  {...register("productStorage", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productStorage"/>
                                {errors.productStorage && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Storage Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productCamera">Product Camera </label>
                                <input  {...register("productCamera", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productCamera" />
                                {errors.productCamera && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Color Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productPortAndSlot">Product Port & Slot </label>
                                <input  {...register("productPortAndSlot", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productPortAndSlot"/>
                                {errors.productPortAndSlot && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Port & Slot Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productBattery">Product Battery </label>
                                <input  {...register("productBattery", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productBattery"/>
                                {errors.productBattery && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Battery Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productDescription">Product Description </label>
                                <textarea {...register("productDescription", { required: true })} name="productDescription" id="productDescription" cols="10" rows="5" className="border w-full rounded-md  mt-2 p-2 outline-none"></textarea>
                                {errors.productDescription && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Description Properly.</span>}
                            </div>
                        </div>
                    </div>
                    <div className="border w-[500px] shadow-md rounded-md">
                        <h3 className="text-center uppercase text-xl font-semibold py-5 rounded-md">Employee Details</h3>
                        <div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="employeEmail">Employee Email <span className='text-red-500'>*</span> </label>
                                <input  {...register("employeEmail", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="employeEmail"/>
                                {errors.employeEmail && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter your Email Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="employeeName">Employee Name <span className='text-red-500'>*</span> </label>
                                <input  {...register("employeeName", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="employeeName"/>
                                {errors.employeeName && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter your Name Properly.</span>}
                            </div>
                        </div>
                    </div>
                    <div className="border w-[500px] shadow-md rounded-md">
                        <h3 className="text-center uppercase text-xl font-semibold py-5 rounded-md">Add Your Product</h3>
                        <p className="text-center tracking-wider">Please prodive your product Info Carefully</p>
                        <div>
                            <div className="my-8 w-2/3 mx-auto">
                            <button type="submit" className="buttonStyle rounded-md  bg-primaryColor hover:bg-[#0065a3] w-full hover:text-sm">ADD Product</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;