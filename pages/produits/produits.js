import { connectToDatabase } from '../../util/db';
import styles from '../css/style.module.css';
import Header from '../../components/Header';

export async function getServerSideProps({ query }) {
  const { categorieId } = query; // Access the categorieId from query parameters
  const { db } = await connectToDatabase();

  // Fetch products for the selected category based on categorieId
  const collection = db.collection('produits');
  const documents = await collection.find(categorieId).toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(documents)),
    },
  };
}

const ProduitPage = ({ data }) => {
  const handleAddToCart = (item) => {
    // Implement the logic to add the item to the cart using the client-side code
    console.log('Add to Cart:', item);
  };

  return (
    <div>
      <Header />
      <div className={styles.cardContainer}>
        {data.map((item) => (
          <div key={item._id} className={styles.card}>
            {item.imageart && (
              <img src={item.imageart} alt={item.imageart} className={styles.cardImage} />
            )}
            <div className={styles.cardDetails}>
              <h1 className={styles.cardTitle}>{item.reference}</h1>
              <h3 className={`${styles.cardSubtitle} ${styles.cardSubtitleName}`}>
                Name: {item.nom}
              </h3>
              <h3 className={styles.cardSubtitle}>Price: {item.prix}</h3>
              <h3 className={styles.cardSubtitle}>{item.marque}</h3>
              <h3 className={styles.cardSubtitle}>{item.qtestock}</h3>
              {/* Render other properties as needed */}
              <button
                className={styles.addToCartButton}
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProduitPage;
