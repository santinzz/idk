// just for watching that db was working
import { json, type RequestHandler } from '@sveltejs/kit';
import { db } from 'src/drizzle/client';
import { user } from 'src/drizzle/schemas/user';

export const GET: RequestHandler = async () => {
	const users = await db.select().from(user);

	return json(users);
};
