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

export const Route = createLazyFileRoute("/_layout/account")({
  component: Account,
});

const userData = {
  name: "John Doe",
  email: "john.doe@example.com",
};

function Account() {
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
              <Label htmlFor="name">Nome:</Label>
              <Input placeholder={userData.name} className="mt-2" disabled />
            </div>

            <div>
              <Label htmlFor="email">Email:</Label>
              <Input placeholder={userData.email} className="mt-2" disabled />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
