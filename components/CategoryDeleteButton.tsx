"use client";
import { Button } from "./ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "./ui/alert-dialog";
import { FaSpinner } from "react-icons/fa";
import { useTransition } from "react";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { categorySchemaType } from "@/schemas/category";
import { deleteCategory } from "@/firebase/firestore/addData";
const CategoryDeleteBtn = ({ category }: { category: categorySchemaType }) => {
    const [loading, startTransition] = useTransition();
    const router = useRouter();
    async function deleteForm() {
        try {
            await deleteCategory(category)
            toast({
                title: "Success",
                description: "Your Category deleted successfully",
            })
            router.refresh();
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong",
            })
        }
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className="w-full bg-red-500 hover:bg-red-400"
                >
                    Delete
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. After delete the Category you will not be able to show it again.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={loading} onClick={(e) => {
                        e.preventDefault();
                        startTransition(deleteForm);
                    }}>Delete {loading && <FaSpinner className="animate-spin" />}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
export default CategoryDeleteBtn;