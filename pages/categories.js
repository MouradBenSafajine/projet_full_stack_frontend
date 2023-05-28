"use client"
import Link from 'next/link';
import Header from './../components/Header'
import { connectToDatabase } from '../util/db';
import styles from './css/style.module.css';
export async function getServerSideProps() {
    const {  db } = await connectToDatabase();

  const collection = db.collection('categories');
  const documents = await collection.find({}).toArray();

  return {

    props: {
      data: JSON.parse(JSON.stringify(documents)),
    },
  };
}


const categoriePage = ({ data }) => {
  return (
    <div><Header/>
    <div className={styles.cardContainer}>
      {data.map((item) => (
        <div key={item._id} className={styles.card}>
          {item.imagecategorie && (
            <img src={item.imagecategorie} alt={item.imagecategorie} className={styles.cardImage} />
          )}
          <h3 className={styles.nomcategorie}>{item.nomcategorie}</h3>
          <Link href={`/produits/produits?categorieId=${item._id}`}>
            <button className={styles.voirProduitsButton}>Voir Produits</button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default categoriePage;