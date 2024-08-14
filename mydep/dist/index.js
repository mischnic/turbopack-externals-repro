import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
export async function test(dbURL) {
    const client = createClient({ url: dbURL });
    const db = drizzle(client);
    console.log('db', db);
}
//# sourceMappingURL=index.js.map