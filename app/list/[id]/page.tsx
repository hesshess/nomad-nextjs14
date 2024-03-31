import { API_URL } from '../../constants';
import styles from './list.module.css';
import Book from './book';

interface IParams {
  params: { id: string };
}

interface IBook {
  rank: number;
  publisher: string;
  description: string;
  title: string;
  author: string;
  book_image: string;
  amazon_product_url: string;
}
interface IBooks {
  books: IBook[];
  list_name: string;
}
interface IResponse {
  results: IBooks;
}
let books = [];
let genre = '';

export async function getList(id: string): Promise<IResponse> {
  const response = await fetch(`${API_URL}/list?name=${id}`);
  return response.json();
}

export async function generateMetadata({ params: { id } }: IParams) {
  const results = (await getList(id)).results;
  books = results.books;
  genre = results.list_name;
  return {
    title: results.list_name,
  };
}

export default async function BookList() {
  return (
    <div className={styles.box}>
      <h1 className={styles.genre}>{genre}</h1>
      <div className={styles.container}>
        {books.map((book) => (
          <Book {...book}>{book.title}</Book>
        ))}
      </div>
    </div>
  );
}
