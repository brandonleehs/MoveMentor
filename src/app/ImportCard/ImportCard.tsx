import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ImportCard() {
  return (
    <Card className="rounded-lg w-full max-w-sm">
      <CardHeader>
        <CardTitle>Import Lichess Study</CardTitle>
        <CardDescription>
          Paste a Lichess study URL to import opening lines and positions for
          practice.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-3">
            <div className="grid gap-3">
              <Label htmlFor="study-url">Study Url</Label>
              <Input
                id="study-url"
                type="text"
                className="placeholder:text-sm"
                placeholder="https://lichess.org/study/..."
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full active:bg-neutral-700 dark:active:bg-neutral-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>{" "}
              Import Study
            </Button>{" "}
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2">
        <p className="text-muted-foreground text-xs">Supported Formats</p>
        <ul className="list-disc list-inside">
          <li className="text-muted-foreground text-xs">Lichess study URLs</li>
          <li className="text-muted-foreground text-xs">Public studies</li>
          <li className="text-muted-foreground text-xs">
            Multi-chapter studies
          </li>
        </ul>
      </CardFooter>
    </Card>
  );
}
