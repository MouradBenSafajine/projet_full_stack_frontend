"use client"
import { connectToDatabase } from '../../../util/db';
import styles from '../css/style.module.css';

export async function getServerSideProps() {
  const client = await connectToDatabase();
  const db = client.db();

  const collection = db.collection('produits');
  const documents = await collection.find({}).toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(documents)),
    },
  };
}

const ProduitPage = ({ data }) => {
  // Get the ID from the query parameters
  const { id } = useRouter().query;

  // Find the matching item based on ID
  const selectedItem = data.find((item) => item._id === id);

  // Check if the item is found
  if (!selectedItem) {
    return <div>Item not found.</div>;
  }

  return (
    <div className={styles.cardContainer}>
      <div key={selectedItem._id} className={styles.card}>
        {selectedItem.imageart && (
          <img src={selectedItem.imageart} alt={selectedItem.imageart} className={styles.cardImage} />
        )}
        <div className={styles.cardDetails}>
          <h1 className={styles.cardTitle}>{selectedItem.reference}</h1>
          <h3 className={`${styles.cardSubtitle} ${styles.cardSubtitleName}`}>{selectedItem.nom}</h3>
          <h3 className={styles.cardSubtitle}>{selectedItem.prix}</h3>
          <h3 className={styles.cardSubtitle}>{selectedItem.marque}</h3>
          <h3 className={styles.cardSubtitle}>{selectedItem.qtestock}</h3>
          {/* Render other properties as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProduitPage;