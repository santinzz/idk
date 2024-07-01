import { z } from 'zod';

export const registerSchema = z.object({
	email: z.string().email(),
	username: z.string().min(3),
	password: z.string().min(6, 'Password must be at least 6 characters')
});

export type RegisterSchema = typeof registerSchema;
export type RegisterSchemaType = z.infer<typeof registerSchema>;

export interface FormField {
	name: keyof RegisterSchemaType;
	label: string;
	type: 'text' | 'password';
	placeholder: string;
}
