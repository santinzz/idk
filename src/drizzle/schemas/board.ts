import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { user } from './user';

export const board = pgTable('board', {
	id: uuid('id').primaryKey().defaultRandom(),
	userId: text('user_id').references(() => user.id),
	boardName: varchar('board_name', { length: 125 }).notNull(),
	boardDescription: text('board_description')
});
