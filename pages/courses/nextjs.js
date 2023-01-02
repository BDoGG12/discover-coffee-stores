import { useRouter } from 'next/router';
import Link from 'next/link';

const NextJS = () => {
  const route = useRouter();
  console.log('route', route);

  return (
    <div>
      <h1>
        Welcome to Next.js with Ben
      </h1>
      <Link href='/ankita'>Go to Coffee Foobar</Link>
    </div>
  );
};

export default NextJS;