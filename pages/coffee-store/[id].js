import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import cls from 'classNames';

import coffeeStoresData from '../../data/coffee-stores.json';

import styles from '../../styles/coffee-stores.module.css';
import { fetchCoffeeStores } from '../../lib/coffee-stores';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  const coffeeStores = await fetchCoffeeStores();
  console.log('params', staticProps);

  return {
    props: {
      coffeeStore: coffeeStores.find(coffeeStore => {
        return coffeeStore.fsq_id.toString() === params.id;
      })
    }
  }
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores();
  const paths = coffeeStores.map(coffeeStore => {
    return {
      params: {
        id: coffeeStore.fsq_id.toString()
      }
    }
  })
  return {
    paths: paths,
    fallback: true
  }
}

const CoffeeStore = (props) => {
  const router = useRouter();

  const id = router.id

  if (router.isFallback) {
    return <div>
      Loading...
    </div>
  }

  const handleUpvoteButton = () => {
    console.log('handle upvote');
  };

  const { address, name, neighborhood, imgUrl } = props.coffeeStore;

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href='/'>
              Back to home
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={cls('glass', styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src='/static/icons/places.png' width='24' height='24' alt={address} />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src='/static/icons/nearMe.png' width='24' height='24' alt={neighborhood} />
            <p className={styles.text}>{neighborhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src='/static/icons/star.png' width='24' height='24' alt={1} />
            <p className={styles.text}>1</p>
          </div>
          <button
            className={styles.upvoteButton}
            onClick={handleUpvoteButton}
          >
            Up vote!
          </button>
        </div>
      </div>

    </div>
  );
};

export default CoffeeStore;