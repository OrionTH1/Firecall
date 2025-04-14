import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"muted"}>Muted</Button>
      <Button variant={"teritary"}>Teritary</Button>
      <p className="text-red-400">Test</p>
    </div>
  );
}
