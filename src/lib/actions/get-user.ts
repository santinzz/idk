import { eq } from 'drizzle-orm';
import { db } from 'src/drizzle/client';
import { user as userTable } from 'src/drizzle/schemas/user';

/**
 * If error is thrown, user not found
 * @param email
 * @returns
 */
export const getUserByEmail = async (email: string) => {
	try {
		const result = await db.select().from(userTable).where(eq(userTable.email, email));

		if (result.length === 0) {
			throw new Error('User not found');
		}

		return [null, result[0]];
	} catch (error) {
		if (error instanceof Error) {
			return [error.message, null];
		}

		return ['Unknown error', null];
	}
};

/**
 * If error is thrown, user not found
 * @param username
 * @returns
 */
export const getUserByUsername = async (username: string) => {
	try {
		const result = await db.select().from(userTable).where(eq(userTable.username, username));

		if (result.length === 0) {
			throw new Error('User not found');
		}

		return [null, result[0]];
	} catch (error) {
		if (error instanceof Error) {
			return [error.message, null];
		}

		return ['Unknown error', null];
	}
};
