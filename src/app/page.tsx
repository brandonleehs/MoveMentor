"use client";
import Chessground from "@react-chess/chessground";
import BoardWrapper from "./components/BoardWrapper";
import ImportCard from "./ImportCard/ImportCard";

import "chessground/assets/chessground.base.css";
import "chessground/assets/chessground.brown.css";
import "chessground/assets/chessground.cburnett.css";

export default function Home() {
  return (
    <main>
      <BoardWrapper>
        <Chessground contained />
      </BoardWrapper>
      <section className="grid gap-2 p-2">
        <ImportCard></ImportCard>
      </section>
    </main>
  );
}
