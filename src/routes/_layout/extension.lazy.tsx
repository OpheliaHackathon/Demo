import { createLazyFileRoute } from "@tanstack/react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createLazyFileRoute("/_layout/extension")({
  component: Extension,
});

function Extension() {
  return (
    <div className="p-3 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Installa l'estensione 🧩</CardTitle>
          <CardDescription>
            Per iniziare a usare la nostra piattaforma.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <a href="https://hackathon.lorenzoc.dev/chrome.crx">Scarica</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
