import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createLazyFileRoute("/_layout/account")({
  component: Account,
});

function Account() {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => ({
      username: "Demo",
      email: "demo@lorenzoc.dev",
    }),
  });

  return (
    <div className="p-3 w-full">
      <Card className="w-full h-fit">
        <CardHeader>
          <CardTitle className="text-3xl">Dettagli account 🧑‍💻</CardTitle>
          <CardDescription>Visualizza del tuo account.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div>
              <Label htmlFor="name">Username:</Label>
              <Input
                placeholder={userQuery.data?.username}
                className="mt-2"
                disabled
              />
            </div>

            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                placeholder={userQuery.data?.email}
                className="mt-2"
                disabled
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
