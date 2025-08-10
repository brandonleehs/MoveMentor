"use client";
import Chessground from "@react-chess/chessground";
import BoardWrapper from "./components/BoardWrapper";

import "chessground/assets/chessground.base.css";
import "chessground/assets/chessground.brown.css";
import "chessground/assets/chessground.cburnett.css";

export default function Home() {
  return (
    <main className="">
      <BoardWrapper>
        <Chessground contained />
      </BoardWrapper>

      <div className="cursor-pointer w-32 h-32"></div>
    </main>
  );
}
