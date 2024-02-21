import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Male() {
    return (
        <div>
            <div className="flex flex-wrap justify-center pt-20 ">
                <div>
                    <div className="w-72 hover:cursor-pointer">
                        <CardContent><Image className="w-full h-auto" src="/male1.png" width={500} height={500} alt="not found" /></CardContent>
                        <CardContent>
                            <CardDescription className="font-extrabold text-base" >Brushed Raglan Sweatshirt
                            </CardDescription>
                            <CardDescription className="pt-2">Sweater</CardDescription>
                            <CardDescription className="pt-3 font-bold text-xl">$195</CardDescription>
                        </CardContent>
                    </div>
                </div>
                <div>
                    <div className="w-72 hover:cursor-pointer">
                        <CardContent><Image className="w-full h-auto" src="/male2.png" width={200} height={100} alt="not found" /></CardContent>
                        <CardContent>
                            <CardDescription className="font-extrabold text-base" >Cameryn Sash Tie Dress
                            </CardDescription>
                            <CardDescription className="pt-2">Dress</CardDescription>
                            <CardDescription className="pt-3 font-bold text-xl">$545</CardDescription>
                        </CardContent>
                    </div>
                </div>
            </div>
        </div>

    )
}