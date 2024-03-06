// import { schemaToForm } from "@repo/zod-form/main";
import { ZodTypeAny } from "zod";
import { Input } from "../ui/input";

function schemaToForm<T extends ZodTypeAny>(schema: T) {
	const shape = schema._def.typeName;

	console.log(shape);

	return shape;
}

export function BasicExample(schema: ZodTypeAny) {
	// const [typeName, setTypeName] = useState<string | null>(schemaToForm(schema));
	const typeName = schemaToForm(schema);

	return (
		<div>
			<h1>Schema type name:</h1>
			{typeName === "ZodString" ? <Input /> : <pre>{typeName}</pre>}
		</div>
	);
}
