import { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import { ZodFormInput } from "./zod-form-input";

const meta = {
	title: "ZodForm/Basic",
	component: ZodFormInput,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ZodFormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const String: Story = {
	args: z.string(),
};

export const Number: Story = {
	args: z.number(),
};

export const Boolean: Story = {
	args: z.boolean(),
};
