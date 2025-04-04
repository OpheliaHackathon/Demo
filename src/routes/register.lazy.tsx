import { createLazyFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { registerSchema } from "@/lib/schemas";

export const Route = createLazyFileRoute("/register")({
  component: Register,
});

function Register() {
  const navigate = Route.useNavigate();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  if (localStorage.getItem("token") !== null) {
    navigate({
      to: "/dashboard",
    });
    return null;
  }

  async function onSubmit() {
    alert("La registrazione non è disponibile nella versione demo.");
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto gap-3 rounded-2xl">
      <div className="relative">
        <Card className="absolute w-full bottom-4">
          <CardHeader>
            <CardTitle className="text-center">
              Ei tu, sei pronto per iniziare?{" "}
            </CardTitle>
          </CardHeader>
        </Card>

        <img
          src="logo.png"
          alt="Logo"
          width={250}
          height={250}
          draggable={false}
        />
      </div>

      <Card className="w-sm md:w-lg">
        <CardHeader>
          <CardTitle className="text-4xl text-center">Registrati</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Inserisci il tuo username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Inserisci la tua email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Inserisci la tua password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conferma Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Conferma la tua password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Conferma</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Link to="/login" className="muted">
            Hai già un account?{" "}
            <span className="text-primary hover:underline">Accedi qui</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
