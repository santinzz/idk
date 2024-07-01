import { user } from 'src/drizzle/schemas/user';
import type { RegisterSchemaType } from './schema';
import { db } from 'src/drizzle/client';
import * as bcrypt from 'bcrypt';
import { generateIdFromEntropySize } from 'lucia';
import { getUserByEmail, getUserByUsername } from '@/actions/get-user';

export const createUser = async ({ email, username, password }: RegisterSchemaType) => {
	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		const userId = generateIdFromEntropySize(10);

		const [err, data] = await getUserByEmail(email);

		if (!err || data) {
			throw new Error(err ? (err as string) : 'User already exists');
		}

		const [err2, data2] = await getUserByUsername(username);

		if (!err2 || data2) {
			throw new Error(err2 ? (err2 as string) : 'Username already exists');
		}

		await db
			.insert(user)
			.values({
				id: userId,
				email,
				username,
				password: hashedPassword
			})
			.returning();

		return [null, userId];
	} catch (error) {
		console.error(error);
		if (error instanceof Error) {
			return [error.message, null];
		}

		return ['An unknown error occurred', null];
	}
};
