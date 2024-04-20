import { ZodObject, ZodSchema, ZodType, z } from "zod";
import { Button } from "../ui/button";
import { ZodFormInput } from "./zod-form-input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export function ZodForm<T extends z.ZodType<ZodObject<any>>>(schema: T) {
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
	});

	function onSubmit(values: z.infer<typeof schema>) {
		window.alert(JSON.stringify(values, null, 2));
	}

	const objectSchema = schema;

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				{Object.keys(objectSchema._def.shape()).map((key) => {
					const fieldSchema = (objectSchema._def.shape() as any)[
						key
					] as ZodType<any>;

					console.log("field schema:");
					console.log(fieldSchema);
					console.log(key);

					return (
						<FormField
							control={form.control}
							name={key as any}
							key={key}
							render={({ field }) => (
								<FormItem>
									<FormLabel>{key}</FormLabel>
									<FormControl>
										<ZodFormInput schema={fieldSchema} {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
					);
				})}
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
