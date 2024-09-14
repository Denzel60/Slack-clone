import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const SignInCard = () => {
    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                Login to Continue
                </CardTitle>
                <CardDescription>
                Use your Email or another Service to continue
            </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                    disabled={false}
                    value=""
                    onChange={() => {}}
                    placeholder="Email"
                    type="email"
                    required
                    />
                    <Input
                    disabled={false}
                    value=""
                    onChange={() => {}}
                    placeholder="password"
                    type="password"
                    required
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={false}>
                        Continue
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}