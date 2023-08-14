import Products from "@/components/Products/Products";



export const metadata = {
  title: 'Home | Tech Commerce',
  description: 'Ecomerce Platfrom for selling varities of electronic and non electronics products',
}



async function Home() {

  return (
    <>
    <Products/>
    </>
  )
}

export default Home;

