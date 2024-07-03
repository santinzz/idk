import { boolean, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const item = pgTable('item', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: varchar('name', { length: 125 }).notNull(),
	completed: boolean('completed').default(false)
});
