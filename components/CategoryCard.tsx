import { formatDistance } from 'date-fns';
import { categorySchemaType } from '../schemas/category';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';

export default function CategoryCard({ category }: { category: categorySchemaType }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex flex-col items-center gap-2 justify-between">
                    <Image src={category.imageUrl as string} width={400} height={400} alt={category.title_EN} />
                    <span className="truncate font-bold">
                        {category.title_EN}
                    </span>
                    {/* {form.published && <Badge>Published</Badge>}
                    {!form.published && <Badge variant={"destructive"}>Draft</Badge>} */}
                </CardTitle>
                <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
                    {/* {formatDistance(category.createdAt, new Date(), {
                        addSuffix: true
                    })} */}
                </CardDescription>
            </CardHeader>
            <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
                {category.description_EN}
            </CardContent>
            <CardFooter>
                {/* {form.published &&
                    (<div className="flex justify-center align-items-center mt-2 w-full gap-1">
                        <Button asChild className="grow text-md gap-4 rounded-md rounded-r-none">
                            <Link href={`/forms/${form.id}`}>View submissions <BiRightArrowAlt /></Link>
                        </Button>
                        <DeleteFormBtn id={form.id} />
                    </div>
                    )
                }
                {!form.published &&
                    (
                        <div className="flex justify-center align-items-center mt-2 w-full gap-1">
                            <Button asChild variant={"secondary"} className="grow text-md gap-4 rounded-md rounded-r-none">
                                <Link href={`/builder/${form.id}`}>Edit form <FaEdit /></Link>
                            </Button>
                            <DeleteFormBtn id={form.id} />
                        </div>
                    )
                } */}
            </CardFooter>
        </Card>
    )
}