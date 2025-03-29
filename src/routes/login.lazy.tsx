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

import { loginSchema } from "@/lib/schemas";
import { axiosClient } from "@/lib/axios";

export const Route = createLazyFileRoute("/login")({
  component: Login,
});

function Login() {
  const navigate = Route.useNavigate();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  if (localStorage.getItem("token") !== null) {
    navigate({
      to: "/dashboard",
    });
    return null;
  }

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    const { data: res } = await axiosClient.post(
      "/01_autentificazione.php",
      data
    );

    if (res.token) {
      localStorage.setItem("token", res.token);
      location.href = "/dashboard";
      return;
    }

    alert(res.message);
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto gap-3 rounded-2xl">
      <div className="relative">
        <Card className="absolute w-full bottom-4">
          <CardHeader>
            <CardTitle className="text-center">Ei chi si rivede! </CardTitle>
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
          <CardTitle className="text-4xl text-center">Accedi</CardTitle>
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
              <Button type="submit">Conferma</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <Link to="/register" className="muted text-center w-full">
            Non hai un account?{" "}
            <span className="text-primary hover:underline">Registrati</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
