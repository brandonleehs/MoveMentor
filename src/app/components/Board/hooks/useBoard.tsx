import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import * as cg from "chessground/types.js";
import { defaults } from "chessground/state";
import type { Config } from "chessground/config";

export default function useBoard() {
  const [chess, setChess] = useState(new Chess());
  const [orientation, setOrientation] = useState<"white" | "black">("white");
  // config is null until mount
  const [config, setConfig] = useState<Config | null>(null);

  const lastMove = chess.history({ verbose: true }).at(-1);
  const dests: cg.Dests = new Map();
  chess.moves({ verbose: true }).forEach((move) => {
    const from = dests.get(move.from);
    if (from) {
      from.push(move.to);
    } else {
      dests.set(move.from, [move.to]);
    }
  });

  useEffect(() => {
    const movable = {
      ...defaults().movable,
      free: false,
      color: (chess.turn() === "w" ? "white" : "black") as "white" | "black",
      dests: dests,
      events: {
        after: (orig: cg.Key, dest: cg.Key, metadata: cg.MoveMetadata) => {
          chess.move(`${orig}${dest}`);
          const newChess = new Chess();
          newChess.loadPgn(chess.pgn());
          setChess(newChess);
        },
      },
    };
    const newConfig = {
      ...defaults(),
      fen: chess.fen(),
      turnColor: (chess.turn() === "w" ? "white" : "black") as
        | "white"
        | "black",
      orientation,
      check: chess.inCheck(),
      lastMove: lastMove && [lastMove.from, lastMove.to],
      movable,
      events: {},
    };

    setConfig(newConfig);
  }, [chess]);
  return { setOrientation, config };
}
