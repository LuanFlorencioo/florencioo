"use client";

import { icons } from "@/data";
import Article from "./Article";

export default function Stacks() {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <Article title="Front end" badges={icons.frontend} />

      <Article title="Back end" badges={icons.backend} />

      <Article title="Banco de dados" badges={icons.database} />

      <Article title="Complementares" badges={icons.complementary} />
    </div>
  )
}
