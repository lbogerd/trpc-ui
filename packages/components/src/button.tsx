interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
	return (
		<button
			className={"bg-red-500 text-white p-2 " + className}
			onClick={() => alert(`Hello from your ${appName} app!`)}
		>
			{children}
		</button>
	);
};
