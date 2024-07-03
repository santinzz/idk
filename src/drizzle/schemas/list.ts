import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { board } from './board';

export const list = pgTable('list', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: varchar('name', { length: 40 }).notNull(),
	description: varchar('description', { length: 100 }),
	boardId: uuid('board_id').references(() => board.id),
	numberOfItems: integer('number_of_items').default(0)
});
