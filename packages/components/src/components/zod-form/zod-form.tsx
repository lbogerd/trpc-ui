import { ZodObject, ZodType } from "zod";
import { Button } from "../ui/button";
import { ZodFormInput } from "./zod-form-input";

export function ZodForm(schema: ZodType<ZodObject<any>>) {
	const objectSchema: { [key: string]: any } = (
		schema._def as ZodObject<any>
	).shape();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				window.alert(JSON.stringify(objectSchema, null, 2));
			}}
		>
			{Object.keys(objectSchema).map((key) => {
				const fieldSchema = objectSchema[key];
				return (
					<div key={key}>
						<label htmlFor={key}>{key}</label>
						<ZodFormInput typeName={fieldSchema._def.typeName} />
					</div>
				);
			})}

			<Button type="submit">Submit</Button>
		</form>
	);
}
