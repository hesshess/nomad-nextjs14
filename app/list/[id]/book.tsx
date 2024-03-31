import Link from 'next/link';
import styles from './book.module.css';
interface IBook {
  rank: number;
  publisher: string;
  description: string;
  title: string;
  author: string;
  book_image: string;
  amazon_product_url: string;
}

export default async function Book(props: IBook) {
  return (
    <div className={styles.container}>
      <Link href={props.amazon_product_url}>
        <img
          className={styles.poster}
          src={props.book_image}
          alt={props.title}
        />
        <div className={styles.info}>
          <h1>{props.title}</h1>
          <h2>{props.author}</h2>
          <h3>⭐️ {props.rank}</h3>
          <h6>{props.description}</h6>
        </div>
      </Link>
      <a href={props.amazon_product_url} target={'_blank'}>
        Buy Now &rarr;
      </a>
    </div>
  );
}
