'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './genre.module.css';

interface IListProps {
  list_name: string;
  id: string;
}

export default function Genre({ list_name, id }: IListProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/list/${id}`);
  };
  return (
    <div className={styles.genre}>
      <Link
        prefetch
        href={{
          pathname: `/list/${id}`,
          query: { name: list_name },
        }}
      >
        {list_name}
      </Link>
    </div>
  );
}
