import CategoriesCards from "@/components/CategoriesCards";
import CategoriesCreateButton from "@/components/CategoriesCreateButton";

const Categories = () => {
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <h1 className="text-xl font-bold">Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <CategoriesCreateButton />
                <CategoriesCards />
            </div>
        </main>
    )
}
export default Categories;