"use client";
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import AddProductImages from "./components/AddProductImages"
import { ChangeEvent, useState } from "react";
import { productSchema, productSchemaType } from "@/schemas/product";
import { toast } from "@/components/ui/use-toast";
import { uploadImage } from "@/firebase/storge/storge";
import { addNewCategoryItem } from "@/firebase/firestore/addData";
import { useRouter } from "next/navigation";
import { v4 } from 'uuid';
import { ImSpinner2 } from "react-icons/im";

export default function Add({ params: { category } }: { params: { category: string } }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [imagesUrl, setImagesUrl] = useState<(string | ArrayBuffer | null)[]>([]);
    const [images, setImages] = useState<(File | null)[]>([]);
    const [productData, setProductData] = useState<productSchemaType>({} as productSchemaType);
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        let key = e.target.name;
        let value: string | number = e.target.value;
        if (key === 'price') {
            value = +value
        }
        setProductData((prevData) => ({ ...prevData, [key]: value }))
    }
    console.log(productData)
    const handleSubmit = async () => {
        if (images.length < 1) {
            toast({
                title: "Error",
                description: "Please upload at least one image",
                variant: 'destructive'
            })
            return;
        }
        if (!productSchema.safeParse(productData).success) {
            toast({
                title: "Error",
                description: "Please fill all the fields",
                variant: 'destructive'
            })
            return;
        }
        try {
            setIsLoading(true);
            const data = productSchema.parse(productData);
            const productImages: string[] = [];
            for await (const image of images) {
                if (image) {
                    const downloadURL = await uploadImage(image as File, `products/${data.id}/${image.name + v4()}`);
                    productImages.push(downloadURL);
                }
            }
            data.imageUrls = productImages;
            await addNewCategoryItem(category, data);
            setIsLoading(false);
            toast({
                title: "Success",
                description: "Product created successfully"
            })
            router.push(`/admin/dashboard/categories/${category}`)
        }
        catch (e) {
            setIsLoading(false);
            toast({
                title: "Error",
                description: "Something went wrong, please try again later",
                variant: 'destructive'
            })
        }
        // console.log('Product Data:', productSchema.parse(productData))
    }
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[70rem] flex-1 auto-rows-max gap-4">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="h-7 w-7">
                        <Link href={`/admin/dashboard/categories/${category}`}>
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Back</span>
                        </Link>
                    </Button>
                    <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                        Pro Controller
                    </h1>
                    <div className="hidden items-center gap-2 md:ml-auto md:flex">
                        <Button variant="outline" size="sm">
                            <Link href={`/admin/dashboard/categories/${category}`}>
                                Discard
                            </Link>
                        </Button>
                        <Button size="sm" onClick={handleSubmit} disabled={isLoading}>{isLoading ? (
                            <>
                                <span>Add Product </span> <ImSpinner2 className='animate-spin' />
                            </>
                        ) : "Add Product"}</Button>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-[1fr_350px] lg:grid-cols-3 lg:gap-8">
                    <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                        <Card x-chunk="dashboard-07-chunk-0">
                            <CardHeader>
                                <CardTitle>Product Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name_En">Name in English</Label>
                                        <Input
                                            id="name_En"
                                            type="text"
                                            name="name_EN"
                                            className="w-full"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="name_Ar">Name in Arabic</Label>
                                        <Input
                                            id="name_Ar"
                                            type="text"
                                            name="name_AR"
                                            className="w-full"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="description_En">Description in English</Label>
                                        <Textarea
                                            id="description_En"
                                            className="min-h-32"
                                            name="description_EN"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="description_Ar">Description in Arabic</Label>
                                        <Textarea
                                            id="description_Ar"
                                            className="min-h-32"
                                            name="description_AR"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="price">Price</Label>
                                        <div className="flex items-center gap-3">
                                            <Input
                                                id="price"
                                                type="number"
                                                className="w-11/12"
                                                min={1}
                                                name="price"
                                                onChange={handleInputChange}
                                            />
                                            <span className="font-light">AED</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid auto-rows-max min-w-[400px] items-start gap-4 lg:gap-8">
                        <Card x-chunk="dashboard-07-chunk-3">
                            <CardHeader>
                                <CardTitle>Product Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="status">Status</Label>
                                        <Select onValueChange={(e: 'active' | 'archived') => setProductData((prevData) => ({ ...prevData, status: e }))} defaultValue={"active"}>
                                            <SelectTrigger id="status" aria-label="Select status">
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="active">Active</SelectItem>
                                                <SelectItem value="archived">Archived</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <AddProductImages imagesUrl={imagesUrl} setImages={setImages} setImagesUrl={setImagesUrl} />
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 md:hidden">
                    <Button variant="outline" size="sm">
                        <Link href={`/admin/dashboard/categories/${category}`}>
                            Discard
                        </Link>
                    </Button>
                    <Button size="sm">Add Product</Button>
                </div>
            </div>
        </main>
    )
}