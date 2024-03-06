// import { schemaToForm } from "@repo/zod-form/main";
import { ZodTypeAny } from "zod";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

export function ZodFormInput<T extends ZodTypeAny>(schema: T) {
	const typeName = schema._def.typeName;

	switch (typeName) {
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
