import { createLazyFileRoute } from "@tanstack/react-router";

import Header from "@/components/landing/header";
import Offers from "@/components/landing/offers";
import Footer from "@/components/parts/footer";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="w-full text-center">
      <Header />
      <Offers />
      <Footer />
    </div>
  );
}
