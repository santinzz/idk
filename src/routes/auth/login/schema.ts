import { z } from 'zod';

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6)
});

export type LoginSchema = typeof loginSchema;
export type LoginSchemaType = z.infer<LoginSchema>;

export interface FormFields {
	name: keyof LoginSchemaType;
	label: string;
	type: string;
	placeholder: string;
}
