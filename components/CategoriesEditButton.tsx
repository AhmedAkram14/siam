"use client";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { BsFileEarmarkPlus } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';
import { Button } from './ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from './ui/use-toast';
import { useRouter } from 'next/navigation';
import { categorySchemaType, categorySchema } from '@/schemas/category';
import { addNewCategory, updateCategory } from '@/firebase/firestore/addData';
import { Upload } from 'lucide-react';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { v4 } from "uuid";
import { uploadImage } from '@/firebase/storge/storge';
import { Timestamp } from 'firebase/firestore';
import { timestampToDate } from '@/utils/helperFunctions';
export default function CategoriesEditButton({ category }: { category: categorySchemaType }) {
    const inputRef = useRef(null);
    const [imageUrl, setImageUrl] = useState<string | ArrayBuffer | null>(null);
    const [image, setImage] = useState<File | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const router = useRouter();
    const form = useForm<categorySchemaType>({
        resolver: zodResolver(categorySchema),
        defaultValues: category

    })
    async function onSubmit(data: categorySchemaType) {
        try {
            // if (!image) {
            //     toast({
            //         title: "Error",
            //         description: "Please upload an image",
            //         variant: 'destructive'
            //     });
            //     return;
            // }
            // const url = await uploadImage(image as File, `categories/${data.title_EN}/${data.title_EN}`);
            // data.imageUrl = url;
            data.updatedAt = new Date()
            await updateCategory(data, category.title_EN);
            toast({
                title: "Success",
                description: "Category Updated successfully"
            })
            setDialogOpen(false);
            router.refresh();
        } catch (error) {
            console.log(error)
            toast({
                title: "Error",
                description: "Something went wrong, please try again later",
                variant: 'destructive'
            })
        }
    }
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        setImage(file as File);
        if (file) {
            var reader = new FileReader();
            var url = reader.readAsDataURL(file);

            reader.onloadend = function (e) {
                setImageUrl(reader.result);
            }
        }
    }
    function handleClick() {
        (inputRef.current as HTMLInputElement | null)?.click();
    }
    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button
                    variant={"ghost"}
                    className="w-full"
                >
                    Edit
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit {category.title_EN}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
                        <FormField control={form.control} name='title_EN' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title_EN</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name='title_AR' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title_AR</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name='description_EN' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description_EN</FormLabel>
                                <FormControl>
                                    <Textarea rows={5} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name='description_AR' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description_AR</FormLabel>
                                <FormControl>
                                    <Textarea rows={5} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name='imageUrl' render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    {imageUrl ? <Image src={imageUrl as string} width={400} height={400} alt='image' className='m-auto' /> :
                                        <button type='button' onClick={handleClick} className="hover:text-primary group flex aspect-square w-full max-h-[200px] flex-col items-center justify-center rounded-md border border-dashed">
                                            <Upload className="h-4 w-4 text-muted-foreground" />
                                            <span className="sr-only">Upload</span>
                                            <input ref={inputRef} type='file' hidden onChange={handleFileChange} />
                                        </button>}
                                </FormControl>
                                <FormMessage content='required' />
                            </FormItem>
                        )} />
                    </form>
                </Form>
                <DialogFooter>
                    <Button
                        onClick={
                            form.handleSubmit(onSubmit)
                        }
                        type='submit'
                        disabled={form.formState.isSubmitting} className='w-full mt-4'>
                        {!form.formState.isSubmitting ? "Edit" : <ImSpinner2 className='animate-spin' />}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}