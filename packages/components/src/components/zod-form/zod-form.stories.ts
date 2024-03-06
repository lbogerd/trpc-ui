import { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import { ZodForm } from "./zod-form";

const meta = {
	title: "ZodForm/BasicForm",
	component: ZodForm,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ZodForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const String: Story = {
	args: z.object({
		name: z.string(),
		age: z.number(),
		isCool: z.boolean(),
	}) as any,
};
