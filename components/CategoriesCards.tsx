import { getCollectionAndDocuments } from "@/firebase/firestore/getData";
import CategoryCard from "./CategoryCard";

export default async function CategoriesCards() {
    const categories = await getCollectionAndDocuments();

    return (
        <>
            {categories.map(category => (
                <CategoryCard key={category.description_EN} category={category} />
            ))}
        </>
    )
}