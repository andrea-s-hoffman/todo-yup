import * as yup from "yup";

export const formSchema = yup.object({
  task: yup
    .string()
    .required("Task is required")
    .max(15, "Max of 15 characters"),
  dueDate: yup.date().required("Due date is required").min(new Date()),
  priorityLevel: yup.number().required().min(1).max(3),
});

export type SchemaProps = yup.InferType<typeof formSchema>;
