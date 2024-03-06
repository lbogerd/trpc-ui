// import { schemaToForm } from "@repo/zod-form/main";
import { ZodTypeAny } from "zod";
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
		default:
			return <pre>{typeName}</pre>;
	}
}
