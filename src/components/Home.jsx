import Header from "./Header"
import Cat from "./Cat"
import Product from "./Product"
import Footer from "./Footer"
export default function Home () {
    return (
        <>
        
        <Header />
        <div className="max-w-[1200px] mx-auto grid grid-cols-4 my-4  gap-2">
            <div >
                <Cat />
            </div>
            <div className="col-span-3">
                <Product />
            </div>
        </div>
        <Footer />
        
        </>
    )
}