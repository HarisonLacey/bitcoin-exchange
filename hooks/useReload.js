import { useEffect } from 'react'
import { useRouter } from 'next/router'

// hook to reload page every 2 minutes

export const useReload = () => {
    const router = useRouter()
    useEffect(() => {
        setInterval(() => {
            router.reload()
        }, 120000)
    }, [])
}
