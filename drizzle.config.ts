import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: ['./src/drizzle/schemas/**/*.ts'],
	out: './src/drizzle/migrations',
	dialect: 'postgresql', // 'postgresql' | 'mysql' | 'sqlite'
	strict: true,
	verbose: true,
	dbCredentials: {
		url: process.env.VITE_DATABASE_URL as string
	}
});
