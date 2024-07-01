import { pgTable, text, uniqueIndex, varchar } from 'drizzle-orm/pg-core';

export const user = pgTable(
	'user',
	{
		id: text('id').primaryKey(),
		email: varchar('email', { length: 125 }).notNull().unique(),
		username: varchar('username', { length: 125 }).notNull().unique(),
		password: varchar('password', { length: 125 }),
		image: text('image')
	},
	(table) => {
		return {
			email_idx: uniqueIndex('email_idx').on(table.email)
		};
	}
);

export type User = typeof user.$inferSelect;
