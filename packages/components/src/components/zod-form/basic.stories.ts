import { Meta, StoryObj } from "@storybook/react";
import { z } from "zod";
import { BasicExample } from "./basic";

const meta = {
	title: "ZodForm/Basic",
	component: BasicExample,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof BasicExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: z.string(),
};
