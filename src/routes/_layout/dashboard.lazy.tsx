import { createLazyFileRoute } from "@tanstack/react-router";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartData = [
  { day: "Lunedì", me: 100, global: 200 },
  { day: "Martedì", me: 120, global: 250 },
  { day: "Mercoledì", me: 150, global: 300 },
  { day: "Giovedì", me: 200, global: 350 },
  { day: "Venerdì", me: 250, global: 400 },
  { day: "Sabato", me: 300, global: 450 },
  { day: "Domenica", me: 350, global: 500 },
];
const chartConfig = {
  me: {
    label: "Me",
    color: "hsl(var(--chart-1))",
  },
  global: {
    label: "Globale",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const Route = createLazyFileRoute("/_layout/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="p-3 w-full flex flex-col gap-3">
      <div className="flex flex-col lg:flex-row gap-3">
        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-3xl">
              <span className="text-primary">20.000 KM</span> in macchina 🚗
            </CardTitle>
            <CardDescription>
              Il consumo tangibile dell'ultimo giorno.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-3xl">
              <span className="text-primary">100 emissioni</span> di CO2 🌍
            </CardTitle>
            <CardDescription>
              Il consumo reale dell'ultimo giorno.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Separator className="my-2" />

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Ultimo giorno" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="current">Settimana corrente</SelectItem>
          <SelectItem value="last">Settimana precendente</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex flex-col lg:flex-row gap-3">
        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-3xl">Storico consumo 📜</CardTitle>
            <CardDescription>Ecco il tuo storico di consumo.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="max-h-[600px] w-full"
            >
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  dataKey="me"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="me" fill="var(--color-me)" radius={4} />
                <Bar dataKey="global" fill="var(--color-global)" radius={4} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="w-full lg:w-1/2">
          <CardHeader>
            <CardTitle className="text-3xl">Consiglio 💡</CardTitle>
            <CardDescription>
              Ophelia ti consiglia...
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="felice.png"
              alt="Ophelia"
              className="w-1/2 mx-auto"
              draggable={false}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
