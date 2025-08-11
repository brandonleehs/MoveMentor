"use client";
// import Chessground from "@react-chess/chessground";
import { ChessgroundUci } from "./uci";
import BoardWrapper from "./BoardWrapper";
import useBoard from "./hooks/useBoard";

export default function Board() {
  const { config } = useBoard();
  return <BoardWrapper></BoardWrapper>;
}
