import { ZodTypeAny } from "zod";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

type ZodFormInputProps = {
	schema?: ZodTypeAny;
	typeName?: string;
};

export function ZodFormInput({ schema, typeName }: ZodFormInputProps) {
	if (schema && typeName) {
		throw new Error("Only one of 'schema' or 'typeName' should be provided");
	}

	const parsedTypeName = schema?._def.typeName || typeName;

	switch (parsedTypeName) {
		case "ZodString":
			return (
				<>
					<h1>{typeName}</h1>
					<Input />
				</>
			);
		case "ZodNumber":
			return (
				<>
					<h1>{typeName}</h1>
					<Input type="number" />
				</>
			);
		case "ZodBoolean":
			return (
				<>
					<h1>{typeName}</h1>
					<Checkbox />
				</>
			);
		default:
			return <pre>{typeName}</pre>;
	}
}
