import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { AvatarFallback, AvatarImage, Avatar } from "./ui/avatar";
import { User as FirebaseUser } from "firebase/auth";
import { signOut } from "@/firebase/auth/signup";

const User = ({ user }: { user: FirebaseUser }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                >
                    <Avatar>
                        <AvatarImage src={user.photoURL as string} alt="@shadcn" />
                        <AvatarFallback>{user.email?.charAt(0)}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default User;