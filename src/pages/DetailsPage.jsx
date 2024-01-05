import { Link, useParams } from "react-router-dom";
import { useProductsDetails } from "../context/ProductContext";
//Loader
import Loader from "../components/Loader";
//Icons
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

function DetailsPage() {
  const { id } = useParams();

  const productDetails = useProductsDetails(+id);

  if (!productDetails) return <Loader />;

  return (
    <div>
      <img src={productDetails.image} alt={productDetails.title} />
      <div>
        <h3>{productDetails.title}</h3>
        <p>{productDetails.description}</p>
        <p>
          <SiOpenproject /> {productDetails.category}
        </p>
        <div>
          <span>
            <IoMdPricetag />
            {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
