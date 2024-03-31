import Genre from './genre';
import styles from './home.module.css';
import { API_URL } from '../constants';

export const metadata = {
  title: 'Home',
};
interface IGenre {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

async function getLists(): Promise<IGenre[]> {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json.results;
}

export default async function HomePage() {
  const lists = await getLists();
  return (
    <div className={styles.container}>
      {lists.map((list) => (
        <Genre
          key={list.list_name_encoded}
          id={list.list_name_encoded}
          list_name={list.list_name}
        />
      ))}
    </div>
  );
}

export const runtime = 'edge';
