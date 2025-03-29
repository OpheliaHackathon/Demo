import { createLazyFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { axiosClient } from "@/lib/axios";

import Suggestion from "@/components/suggestion";

export type LeaderboardData = {
  username: string;
  score: number;
};

export const Route = createLazyFileRoute("/_layout/leaderboard")({
  component: Leaderboard,
});

function Leaderboard() {
  const leaderboardQuery = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () =>
      axiosClient
        .get<{ classifica: LeaderboardData[] }>("/03_classifica.php")
        .then((res) => res.data),
  });

  return (
    <div className="p-3 flex flex-col lg:flex-row w-full gap-3 h-fit">
      <Card className="w-full lg:w-1/2">
        <CardHeader>
          <CardTitle className="text-3xl">Classifica 📈</CardTitle>
          <CardDescription>Ecco la classifica dei migliori!</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2">
            {leaderboardQuery.data?.classifica
              .sort((a, b) => b.score - a.score)
              .slice(0, 10)
              .map((player, index) => {
                const medal = ["🏆", "🥈", "🥉"][index] || `${index + 1}.`;

                return (
                  <li
                    key={player.username}
                    className="p-4 border rounded-3xl flex items-center gap-2 w-full hover:bg-sidebar-accent transition-colors duration-200"
                  >
                    <span className="text-lg font-bold">{medal}</span>

                    <div className="flex justify-between items-center w-full">
                      <span>{player.username}:</span>
                      <span className="">{Math.round(player.score)} 💨</span>
                    </div>
                  </li>
                );
              })}
          </ul>
        </CardContent>
      </Card>

      <Suggestion />
    </div>
  );
}
