import { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import { ZodFormInput } from "./zod-form-input";

const meta = {
	title: "ZodForm/Input",
	component: ZodFormInput,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ZodFormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const String: Story = {
	args: {
		schema: z.string(),
	},
};

export const Number: Story = {
	args: {
		schema: z.number(),
	},
};

export const Boolean: Story = {
	args: {
		schema: z.boolean(),
	},
};
