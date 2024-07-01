import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// for migrations
export const migrationClient = postgres(DATABASE_URL, { max: 1 });

async function main() {
	// This will run migrations on the database, skipping the ones already applied
	await migrate(drizzle(migrationClient), { migrationsFolder: './src/drizzle/migrations' });

	// Don't forget to close the connection, otherwise the script will hang
	await migrationClient.end();
}

main();
