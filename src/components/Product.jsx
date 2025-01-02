import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Product() {
    const [product, setProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const { slug } = useParams();
    const productsPerPage = 30;

    const fetchProduct = () => {
        const skip = (currentPage - 1) * productsPerPage;
        let api = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`;
        if (slug !== undefined) {
            api = `https://dummyjson.com/products/category/${slug}?limit=${productsPerPage}&skip=${skip}`;
        }

        axios
            .get(api)
            .then((response) => {
                setProduct(response.data.products);
                setTotalProducts(response.data.total);
            })
            .catch(() => {
                alert("Product API error");
            });
    };

    useEffect(() => {
        fetchProduct();
    }, [slug, currentPage]);

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <ul>
                <li className="p-2 bg-slate-400 rounded-sm mb-2 border-[1px]">Product</li>
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
                {Array.isArray(product) &&
                    product.map((item) => (
                        <Link to={`/detail/${item.id}`} key={item.id}>
                            <div className="p-4 border rounded text-center hover:scale-105 duration-500 hover:bg-slate-300">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-full h-auto"
                                />
                                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm">{item.description}</p>
                                <p className="text-sm font-bold">Price: ${item.price}</p>
                            </div>
                        </Link>
                    ))}
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
                <button
                    className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 mx-1 ${
                            currentPage === index + 1
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300"
                        } rounded`}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className="px-4 py-2 mx-1 bg-gray-300 rounded disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
