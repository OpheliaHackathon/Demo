import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { axiosClient } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export default function Suggestion() {
  const suggestionQuery = useQuery({
    queryKey: ["suggestion"],
    queryFn: async () =>
      axiosClient.get("/07_consigli.php").then((res) => res.data),
  });

  return (
    <Card className="w-full lg:w-1/2">
      <CardHeader>
        <CardTitle className="text-3xl">Consiglio 💡</CardTitle>
        <CardDescription>Ophelia ti consiglia...</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-full relative">
        <Card className="absolute w-2/3 bottom-4 hover:bg-sidebar-accent transition-colors duration-200">
          <CardHeader>
            <CardTitle className="text-center">
              {suggestionQuery.data?.consiglio}
            </CardTitle>
          </CardHeader>
        </Card>

        <img
          src={
            suggestionQuery.data?.co2_totale <= 500
              ? "felice.png"
              : suggestionQuery.data?.co2_totale <= 1000
              ? "neutro.png"
              : "arrabbiato.png"
          }
          alt="Ophelia"
          className="w-1/2 mx-auto"
          draggable={false}
        />
      </CardContent>
    </Card>
  );
}
