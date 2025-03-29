import { createLazyFileRoute } from "@tanstack/react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axios";

export const Route = createLazyFileRoute("/_layout/account")({
  component: Account,
});

function Account() {
  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: async () =>
      axiosClient.get("/06_info.php").then((res) => res.data),
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
