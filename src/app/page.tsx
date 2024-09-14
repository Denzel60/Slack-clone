// import { Button } from "@/components/ui/button";
import { AuthScreen } from "@/features/auth/components/auth-screen";

export default function Home() {
  return (
    <div className="text-rose-500 font-bold text-2xl">
      {/* <h1>Hello, world</h1>
      <Button variant={"slack"} size={"lg"}>Click me</Button> */}
      <AuthScreen />
    </div>
  );
}
