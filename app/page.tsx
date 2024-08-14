
import { test } from 'mydep';

export default function Home() {
  console.log('DB', test('file:./test-sqlite.db'))

  return (
    <p>
      test
    </p>
  );
}
