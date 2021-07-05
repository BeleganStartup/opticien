// Next
import Link from 'next/link'
import { useRouter } from 'next/router'

const index = () => {
    // Routing
    const router = useRouter()
    console.log(router.query)

    return (
        <div>
            index
        </div>
    )
}

export default index
