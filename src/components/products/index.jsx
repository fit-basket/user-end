import vanilla from "../../assets/products/vanilla.jpg";
import strawberry from "../../assets/products/strawberry.jpeg";
import red from "../../assets/products/red.jpeg";
import choco from "../../assets/products/chocolate.jpeg";
import Modal from "../modals";

export default function Product({ products, setOpen, setModalItem }) {
  const handleModal = (item) => {
    setOpen(true);
    setModalItem(item);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onClick={() => handleModal(product)}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 cursor-pointer">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="cursor-pointer">
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-start text-gray-500">
                    {product.color}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ₹{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
