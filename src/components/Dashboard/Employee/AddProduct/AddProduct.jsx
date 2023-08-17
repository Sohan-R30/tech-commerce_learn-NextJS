"use client"
import { AuthContext } from "@/context/Authprovider";
import { storage } from "@/utils/firebase/firebase.config";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import Select from "react-dropdown-select";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const AddProduct = () => {
    const [imgFile, setImgFile] = useState('');
    const {users, userLoading} = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const ratings = [
        {
            value: 1,
            label: 1
        },
        {
            value:2,
            label:2
        },
        {
            value: 3,
            label: 3
        },
        {
            value: 4,
            label: 4
        },
        {
            value:5,
            label:5
        },
        {
            value: 1.5,
            label: 1.5
        },
        {
            value:2.5,
            label:2.5
        },
        {
            value: 3.5,
            label: 3.5
        },
        {
            value: 4.5,
            label: 4.5
        }
    ]
    const options = [
        {
            value: "phone",
            label: "phone"
        },
        {
            value: "watch",
            label: "watch"
        },
        {
            value: "laptop",
            label: "laptop"
        },
        {
            value: "desktop",
            label: "desktop"
        },
        {
            value: "tablet",
            label: "tablet"
        },
        {
            value: "monitor",
            label: "monitor"
        },
        {
            value: "tv",
            label: "tv"
        },
        {
            value: "ac",
            label: "ac"
        },
    ];

    const onSubmit = (data) => {
        console.log(data)
        setLoading(true)
        const imagesRef = ref(storage, `product/images/${imgFile.name}`);
            uploadBytes(imagesRef, imgFile).then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                       const productInfo = {
                        ...data,
                        productImage: url,
                        category: category[0].value,
                        ratings: seletedRating[0].value,
                        productState: "pending",
                       }
                        
                        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, productInfo)
                        .then(() => {
                            setError("")
                            setLoading(false)
                            reset();
                            router.push("/dashboard/see-product")
                            toast.success("Your Product has been Updated")
                        }).catch(() => {
                            setLoading(false)
                        })
                    })
                    .catch(() => {
                        setLoading(false)
                    })
            });
    }
    return (
        <>
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
                                <label className=" absolute right-3 -top-5 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="category">Product Category <span className='text-red-500'>*</span> </label>
                                <Select
                                required={true}
                                dropdownPosition="top"
                                color='#c24da4'
                                placeholder='Select Your Product Category'
                                options={options}
                                onChange={(values) => setCategory(values)}
                            />
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
                                <input type="file" onChange={(e) => setImgFile(e.target.files[0])} required className="border w-full rounded-md  mt-2 p-2 outline-none" id="productImage"/>
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productPrice">Product Price <span className='text-red-500'>*</span> </label>
                                <input  {...register("productPrice", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productPrice"/>
                                {errors.productPrice && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Price Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 -top-5 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productPrice">Product Ratings <span className='text-red-500'>*</span> </label>
                                <Select
                                required={true}
                                dropdownPosition="top"
                                color='#c24da4'
                                placeholder='Select Your Product Ratings'
                                options={ratings}
                                onChange={(values) => setSeletedRating(values)}
                            />
                                {errors.ratings && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Price Properly.</span>}
                            </div>
                        </div>
                    </div>
                    <div className="border w-[500px] shadow-md rounded-md">
                        <h3 className="text-center uppercase text-xl font-semibold py-5 rounded-md">Product Optional Details</h3>
                        <div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productDisplay">Product Display </label>
                                <input  {...register("productDisplay",)} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productDisplay"/>
                                {errors.productDisplay && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Display Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productProccesor">Product Proccessor </label>
                                <input  {...register("productProccesor",)} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productProccesor"/>
                                {errors.productProccesor && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Proccessor Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productRam">Product Ram </label>
                                <input  {...register("productRam",)} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productRam" />
                                {errors.productRam && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Ram Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productStorage">Product Storage </label>
                                <input  {...register("productStorage",)} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productStorage"/>
                                {errors.productStorage && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Storage Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productCamera">Product Camera </label>
                                <input  {...register("productCamera",)} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productCamera" />
                                {errors.productCamera && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Color Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productPortAndSlot">Product Port & Slot </label>
                                <input  {...register("productPortAndSlot",)} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productPortAndSlot"/>
                                {errors.productPortAndSlot && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Port & Slot Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productBattery">Product Battery </label>
                                <input   {...register("productBattery",)} className="border w-full rounded-md  mt-2 p-2 outline-none" id="productBattery"/>
                                {errors.productBattery && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Battery Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="productDescription">Product Description </label>
                                <textarea {...register("productDescription",)} name="productDescription" id="productDescription" cols="10" rows="5" className="border w-full rounded-md  mt-2 p-2 outline-none"></textarea>
                                {errors.productDescription && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter Product Description Properly.</span>}
                            </div>
                        </div>
                    </div>
                    <div className="border w-[500px] shadow-md rounded-md">
                        <h3 className="text-center uppercase text-xl font-semibold py-5 rounded-md">Employee Details</h3>
                        <div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="employeEmail">Employee Email <span className='text-red-500'>*</span> </label>
                                <input   type="email" readOnly defaultValue={users?.email}  {...register("employeEmail", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="employeEmail" name="employeEmail"/>
                                {errors.employeEmail && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter your Email Properly.</span>}
                            </div>
                            <div className="my-8 relative w-2/3 mx-auto">
                                <label className=" absolute right-3 bg-primaryColor text-sm text-white px-2 rounded-md" htmlFor="employeeName">Employee Name <span className='text-red-500'>*</span> </label>
                                <input type="text" readOnly  defaultValue={users?.displayName} {...register("employeeName", { required: true })} className="border w-full rounded-md  mt-2 p-2 outline-none" id="employeeName"  name="employeeName"/>
                                {errors.employeeName && <span className="text-sm text-red-600 absolute left-5 -bottom-6">Enter your Name Properly.</span>}
                            </div>
                        </div>
                    </div>
                    <div className="border w-[500px] shadow-md rounded-md">
                        <h3 className="text-center uppercase text-xl font-semibold py-5 rounded-md">Add Your Product</h3>
                        <p className="text-center tracking-wider">Please prodive your product Info Carefully</p>
                        <div>
                            <div className="my-8 w-2/3 mx-auto">
                            <button type="submit" className="buttonStyle rounded-md  bg-primaryColor hover:bg-[#0065a3] w-full hover:text-sm">{`${loading ? "loading..." : "ADD Product"}`}</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default AddProduct;