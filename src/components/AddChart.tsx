import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
  } from "@/components/ui/form";
  import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
  import { useForm } from "react-hook-form";
  import { z } from "zod";
  import { zodResolver } from "@hookform/resolvers/zod";
  import { useState } from "react";
  
  export const EnumChartType = {
    Line: "line",
    Bar: "bar",
    Area: "area",
    Combined: "combined",
  } as const;
  
  export type ChartType = keyof typeof EnumChartType;
  
  const formSchema = z.object({
    type: z.enum(["Line", "Bar", "Area", "Combined"]),
  });
  
  interface AddChartDialogProps {
    onAdd: (type: ChartType) => void;
  }
  
  export function AddChart({ onAdd }: AddChartDialogProps) {
    const [open, setOpen] = useState(false);
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        type: "Line",
      },
    });
  
    function onSubmit(values: z.infer<typeof formSchema>) {
      onAdd(values.type);
      setOpen(false);
      form.reset();
    }
  
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Add Chart</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Select Chart Type</DialogTitle>
          </DialogHeader>
  
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chart Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="space-y-2"
                      >
                        {(Object.keys(EnumChartType) as ChartType[]).map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <RadioGroupItem value={type} id={type} />
                            <FormLabel htmlFor={type}>{type}</FormLabel>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
  
              <DialogFooter>
                <Button type="submit">Add</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    );
  }
  