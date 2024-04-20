import { ZodTypeAny } from "zod";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { InputHTMLAttributes } from "react";

type ZodFormInputProps = {
	schema?: ZodTypeAny;
	typeName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function ZodFormInput(props: ZodFormInputProps) {
	const { schema, typeName } = props;

	if (schema && typeName) {
		throw new Error("Only one of 'schema' or 'typeName' should be provided");
	}

	const parsedTypeName = (schema?._def?.typeName || typeName) ?? "";

	switch (parsedTypeName) {
		case "ZodString":
			return (
				<>
					<h1>{typeName ?? ""}</h1>
					<Input {...props} />
				</>
			);
		case "ZodNumber":
			return (
				<>
					<h1>{typeName ?? ""}</h1>
					<Input type="number" {...props} />
				</>
			);
		case "ZodBoolean":
			return (
				<>
					<h1>{typeName ?? ""}</h1>
					{/* @ts-ignore */}
					<Checkbox {...props} />
				</>
			);
		default:
			return <pre>{typeName}</pre>;
	}
}
