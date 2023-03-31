import { useEffect } from "react";


export default function useTitleWebside (title) {
    useEffect(() => {
        document.title = title
    }, [title])
}