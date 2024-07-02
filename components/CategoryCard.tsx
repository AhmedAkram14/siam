import { formatDistance } from 'date-fns';
import { categorySchemaType } from '../schemas/category';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import CategoriesEditButton from './CategoriesEditButton';
import { useState } from 'react';
import CategoryDeleteBtn from './CategoryDeleteButton';

export default function CategoryCard({ category }: { category: categorySchemaType }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-col items-center gap-2 justify-between">
                    <Image src={category.imageUrl as string} width={400} height={400} alt={category.title_EN} className='w-[400px] h-[200px]' />
                    <span className="truncate font-bold">
                        {category.title_EN}
                    </span>
                    {/* {form.published && <Badge>Published</Badge>}
                    {!form.published && <Badge variant={"destructive"}>Draft</Badge>} */}
                </CardTitle>
                <CardDescription className="flex flex-col  justify-between text-muted-foreground text-sm">
                    <p className='font-bold'>Created: <span className='font-normal'>{formatDistance(category.createdAt as Date, new Date(), {
                        addSuffix: true
                    })}
                    </span>
                    </p>
                    {category.updatedAt && <p className='font-bold'>Updated: <span className='font-normal'>{formatDistance(category.updatedAt as Date, new Date(), {
                        addSuffix: true
                    })}</span></p>}
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
                {category.description_EN}
            </CardContent>
            <CardFooter>

                <div className="flex justify-center align-items-center mt-2 w-full gap-1">
                    <Button asChild className="grow text-md gap-4 rounded-md rounded-r-none">
                        <Link href={`/admin/dashboard/categories/${category.title_EN}`}>View Products</Link>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="secondary"
                                className='rounded-md rounded-l-none ring-0 rind-'
                                style={{ outline: 'none' }}
                            >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" >
                            <DropdownMenuItem asChild><CategoriesEditButton category={category} /></DropdownMenuItem>
                            <DropdownMenuItem asChild><CategoryDeleteBtn category={category} /></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardFooter>
        </Card>
    )
}