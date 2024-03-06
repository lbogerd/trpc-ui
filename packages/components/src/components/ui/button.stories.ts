import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
	title: "UI/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: "dit-is-een-test",
		onClick: () => window.alert("Hello, world!"),
		children: "Hello, world!",
	},
};
