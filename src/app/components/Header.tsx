import ModeToggle from "./ModeToggle";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex p-2 items-center">
      <div className="flex gap-1 items-center">
        <Image src="/logo.png" width={32} height={32} alt="MoveMentor Logo" />
        <div className="relative">
          <p className="font-semibold">MoveMentor</p>
          <small className="text-xs absolute w-max text-muted-foreground">
            Practice your openings
          </small>
        </div>
      </div>
      <div className="flex gap-2 ml-auto">
        <ModeToggle></ModeToggle>
        <HeaderMenu></HeaderMenu>
      </div>
    </header>
  );
}
