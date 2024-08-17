import { useRouter ,useSearchParams } from "next/navigation"
import { trpc } from "../_trcp/client"

const Page= async()=> {
    const router =useRouter()

    const searchParams = useSearchParams()
    const origin = searchParams.get('origin')

    const apiResponse =await fetch('/api/whatever')


    const data2  =await apiResponse.json()
    
    // const {data , isLoading} = trpc.test.useQuery()
}

export default Page