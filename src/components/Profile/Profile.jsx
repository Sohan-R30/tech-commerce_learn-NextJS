"use client"

import { AuthContext } from "@/context/Authprovider";
import axios from "axios";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { useContext, useState } from "react";
import { toast } from "react-toastify";


const Profile = () => {
    const { users, emailVerification, updateUserProfile } = useContext(AuthContext)
    const [profileName, setProfileName] = useState('');
    const [imgFile, setImgFile] = useState('');
    const [imgUrl, setImgUrl] = useState(users?.photoURL || "");
    const [phoneNumber, setPhoneNumber] = useState('');
    const [Error, setError] = useState('')

    const [pictureLoading, setpictureLoading]  = useState(false)
    const [nameLoading, setnameLoading]  = useState(false)
    const [verifyLoading, setverifyLoading]  = useState(false)

    const storage = getStorage();

    const handleUpdateProfilePicture = () => {
        console.log("update")
        if (imgFile) {
            setpictureLoading(true)
            const imagesRef = ref(storage, `profile/images/${imgFile.name}`);
            uploadBytes(imagesRef, imgFile).then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                        setImgUrl(url)
                        setError("")
                        updateUserProfile("profilePicture", url)
                            .then(() => {
                                const user = {
                                    photoURL: url
                                }
                                axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${users?.email}`, user)
                                    .then(() => {
                                        setError("")
                                        setpictureLoading(false)
                                        toast.success("Your Profile picture has been Updated")
                                    }).catch((error) => {
                                        setpictureLoading(false)
                                        setError(error.message)
                                    })
                            }

                            )
                            .catch((error) => {
                                setpictureLoading(false)
                                setError(error.message)
                            })
                    })
                    .catch((error) => {
                        setpictureLoading(false)
                        setError(error.message)
                    })
            });

        }
    }

    const handleUpdateProfileName = () => {
        console.log("🚀 ~ file: Profile.jsx:48 ~ handleUpdateProfileName ~ profileName:", profileName)
        if (profileName) {
            setnameLoading(true)
            const user = {
                displayName: profileName
            }
            updateUserProfile("profileName", profileName)
                .then(() => axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${users?.email}`, user)
                    .then(() => {
                        setError("")
                        setProfileName("")
                        setnameLoading(false)
                        toast.success("Your Profile Name has been Updated")
                    }).catch((error) => setError(error.message))
                )
                .catch((error) => {
                    setnameLoading(false)
                    setError(error.message)
                })
        }
    }


    const handleVerifyEmail = () => {
        verifyLoading(true)
        emailVerification()
            .then(() => {
                setError("")
                verifyLoading(false)
                toast.success("Verification Mail Send")
            })
            .catch((error) => {
                verifyLoading(false)
                setError(error.message)
            })
    }



    return (
        <>
            <div className="my-10">
                <p className="text-xl text-center font-semibold">{Error}</p>
                <p className="text-xl text-center border py-3 my-2 rounded-md">Welcome, To your Profile <span className=" font-bold tracking-widest uppercase">{users?.displayName}</span></p>
                <div className="flex flex-wrap items-end justify-start gap-10">
                    {
                        users && users?.photoURL && (


                            <div className="max-w-sm border rounded-md p-5 my-5 shadow-sm">
                                {
                                    users && users?.photoURL && (
                                        <Image className="rounded-md" src={users?.photoURL} height={100} width={255} alt={users?.displayName} />
                                    )
                                }
                            </div>
                        )
                    }
                    <div className="max-w-sm border rounded-md p-5 my-5 shadow-sm">
                        <p>Want to Update Your Profile Picture</p>
                        <input onChange={(e) => setImgFile(e.target.files[0])} className="my-5 border rounded-md" type="file" name="image" id="image" />
                        <button onClick={handleUpdateProfilePicture} className="buttonStyle  rounded-md  bg-primaryColor hover:bg-[#0065a3] w-2/4 hover:text-sm">{`${pictureLoading ? "loading..." : "Update"}`}</button>
                    </div>
                    <div className="max-w-sm border rounded-md p-5 my-5 shadow-sm">
                        <p>Want to Update Your Profile Name</p>
                        <input onChange={(e) => setProfileName(e.target.value)} placeholder="Write Your Upadated Name" className="my-5 border rounded-md w-full outline-none px-3 py-1" type="text" name="name" id="name" />
                        <button onClick={handleUpdateProfileName} className="buttonStyle  rounded-md  bg-primaryColor hover:bg-[#0065a3] w-2/4 hover:text-sm">{`${nameLoading ? "loading..." : "Update"}`}</button>
                    </div>
                    <div className="max-w-sm border rounded-md p-5 my-5 shadow-sm">
                        <p className="my-2 font-bold">Your Email :  <span className="font-normal">{users?.email}</span></p>
                        <p className="my-2 font-bold"> Your Email is {users?.emailVerified ? <span>Verfied</span> : <span>Not Varified</span>}</p>
                        <p className="my-2 font-bold">{!users?.emailVerified && <span onClick={handleVerifyEmail} className="buttonStyle  rounded-md  bg-primaryColor hover:bg-[#0065a3] w-2/4 hover:text-sm">{`${verifyLoading ? "loading..." : "Verify"}`}</span>}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;