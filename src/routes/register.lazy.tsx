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
import { axiosClient } from "@/lib/axios";

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

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    if (data.password !== data.confirmPassword) {
      form.setError("confirmPassword", {
        type: "validate",
        message: "Le password non corrispondono",
      });
      return;
    }

    try {
      const { data: res } = await axiosClient.post(
        "/00_registrazione.php",
        data
      );

      if (res.success) {
        const { data: res2 } = await axiosClient.post(
          "/01_autentificazione.php",
          data
        );

        if (res2.token) {
          localStorage.setItem("token", res2.token);
          navigate({
            to: "/dashboard",
          });
          return;
        }

        return;
      }

      alert(res.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response.status === 422) {
        form.setError("username", {
          type: "validate",
          message: error.response.data.message,
        });
      } else {
        form.setError("username", {
          type: "validate",
          message: "Errore durante la registrazione",
        });
      }
    }
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
