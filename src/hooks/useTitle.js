import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `CarMagination | ${title}`;
    }, [title])
}
export default useTitle;