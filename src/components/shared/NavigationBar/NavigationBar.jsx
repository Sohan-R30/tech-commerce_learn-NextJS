import Link from "next/link"

const NavigationBar = () => {

    const navigation = [
        {
            value: "phone",
            nav: "Phone"
        },
        {
            value: "watch",
            nav: "watch"
        },
        {
            value: "laptop",
            nav: "Laptop"
        },
        {
            value: "desktop",
            nav: "Desktop"
        },
        {
            value: "tablet",
            nav: "Tablet"
        },
        {
            value: "monitor",
            nav: "Monitor"
        },
        {
            value: "tv",
            nav: "TV"
        },
        {
            value: "ac",
            nav: "AC"
        }
    ]
    return (
        <div className="flex justify-between gap-8 uppercase font-semibold">
            {
                navigation && navigation?.map((nav, index) =>  <Link key={index}
                href={`/${nav?.value}`}>
                    <p className="hover:text-primaryColor hover:opacity-50 transition-all">{nav?.nav}</p>
                </Link>)
            }
            
        </div>
    )
}

export default NavigationBar