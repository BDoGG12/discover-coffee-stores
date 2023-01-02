import { useRouter } from 'next/router';
import Link from 'next/link';

const CoffeeMerch = () => {

  const router = useRouter();
  const {pid} = router.query;

  return (
    <div>
      <h1>
        {pid}
      </h1>
    </div>
  );
};

export default CoffeeMerch;