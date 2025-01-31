"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("https://hariharan-s-95f3.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        toast({ title: "Message sent!", description: "Thank you for your message." });
        reset();
      } else {
        toast({ title: "Error!", description: "Failed to send email.", variant: "destructive" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({ title: "Error!", description: "Something went wrong.", variant: "destructive" });
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Input {...register("name")} placeholder="Your Name" className={errors.name ? "border-red-500" : ""} />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Input {...register("email")} type="email" placeholder="Your Email" className={errors.email ? "border-red-500" : ""} />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <Textarea {...register("message")} placeholder="Your Message" className={errors.message ? "border-red-500" : ""} />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</Button>
    </form>
  );
}