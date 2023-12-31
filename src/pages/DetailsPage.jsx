import { Link, useParams } from "react-router-dom";
import { useProductsDetails } from "../context/ProductContext";
//Loader
import Loader from "../components/Loader";
//Icons
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
//styles
import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();

  const productDetails = useProductsDetails(+id);
  const { image, title, description, category, price } = productDetails;

  if (!productDetails) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.category}>
          <SiOpenproject /> {category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {price} $
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
