import { FaSpinner } from "react-icons/fa";

const loading = () => {
    return (
        <div className='flex w-full flex-grow h-[100vh] items-center justify-center'>
            <FaSpinner className="w-8 h-8 animate-spin" />
        </div>
    )
}
export default loading;