import * as yup from "yup";

export const formSchema = yup.object({
  task: yup
    .string()
    .required("Task is required")
    .max(15, "Max of 15 characters"),
  dueDate: yup
    .date()
    .required("Due date is required")
    .test({
      test(value, ctx) {
        if (value <= new Date(new Date().setDate(new Date().getDate() - 1))) {
          return ctx.createError({
            message: "Please pick a date today or in the future",
          });
        }
        return true;
      },
    }),
  // .min(new Date(new Date().setDate(new Date().getDate() - 1))),
  priorityLevel: yup.number().required().min(1).max(3),
});

export type SchemaProps = yup.InferType<typeof formSchema>;
