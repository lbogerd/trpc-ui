import type { Preview } from "@storybook/react";

import React from "react";

import "./tailwind/dist.css";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

type test = React.FormEvent;

export default preview;
