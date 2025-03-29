import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Suggestion() {
  return (
    <Card className="w-full lg:w-1/2">
      <CardHeader>
        <CardTitle className="text-3xl">Consiglio 💡</CardTitle>
        <CardDescription>Ophelia ti consiglia...</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-full relative">
        <Card className="absolute w-2/3 bottom-4 hover:bg-sidebar-accent transition-colors duration-200">
          <CardHeader>
            <CardTitle className="text-center">TEST</CardTitle>
          </CardHeader>
        </Card>

        <img
          src="felice.png"
          alt="Ophelia"
          className="w-1/2 mx-auto"
          draggable={false}
        />
      </CardContent>
    </Card>
  );
}
