import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { user } from './user';
import { board } from './board';

export const userBoards = pgTable('user_boards', {
	userId: text('user_id')
		.primaryKey()
		.references(() => user.id),
	boardId: uuid('board_id')
		.primaryKey()
		.references(() => board.id)
});
