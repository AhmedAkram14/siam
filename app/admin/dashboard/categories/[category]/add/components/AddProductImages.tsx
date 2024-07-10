"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { CircleX, Upload } from 'lucide-react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
interface IProps {
    imagesUrl: (string | ArrayBuffer | null)[]
    setImagesUrl: React.Dispatch<React.SetStateAction<(string | ArrayBuffer | null)[]>>
    setImages: React.Dispatch<React.SetStateAction<(File | null)[]>>
}

const AddProductImages = ({ imagesUrl, setImages, setImagesUrl }: IProps) => {
    const inputRef = useRef(null);
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        setImages((prevImages) => [...prevImages, file as File]);
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onloadend = function (e) {
                setImagesUrl((prevUrls) => [...prevUrls, reader.result]);
            }
        }
    }
    function handleClick() {
        (inputRef.current as HTMLInputElement | null)?.click();
    }
    function deleteImage(url: string) {
        const imgIndex = imagesUrl.findIndex((imgUrl) => imgUrl === url)
        setImagesUrl((prevUrls) => prevUrls.filter((url, index) => index !== imgIndex))
        setImages((prevImages) => prevImages.filter((url, index) => index !== imgIndex))
    }
    return (
        <Card
            className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
        >
            <CardHeader>
                <CardTitle>Product Images</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-2">
                    {imagesUrl?.[0] &&
                        <button className='relative group' onClick={() => deleteImage(imagesUrl?.[0] as string)}>
                            <CircleX className='h-6 w-6 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 z-10' />
                            <Image
                                alt="Product image"
                                className="aspect-square w-full rounded-md object-cover group-hover:opacity-40"
                                height="300"
                                src={imagesUrl?.[0] as string}
                                width="300"
                            />
                        </button>
                    }

                    <div className="grid grid-cols-3 gap-2">
                        {imagesUrl?.length > 1 && imagesUrl.map((imageUrl, index) => (
                            index > 0 && <button key={imageUrl as string} className='relative group' onClick={() => deleteImage(imageUrl as string)}>
                                <CircleX className='h-6 w-6 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 z-10' />
                                <Image
                                    alt="Product image"
                                    className="aspect-square w-full rounded-md object-cover group-hover:opacity-40"
                                    height="84"
                                    src={imageUrl as string}
                                    width="84"
                                />
                            </button>
                        ))}

                        <button onClick={handleClick} className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Upload</span>
                            <input ref={inputRef} type='file' hidden onChange={handleFileChange} />
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default AddProductImages;