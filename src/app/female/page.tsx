import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Female() {
    return (
        <div>
            <div className="flex flex-wrap justify-evenly pt-20 ">
                <div>
                    <Card className=" w-72 hover:cursor-pointer">
                        <CardContent><Image className="w-full h-auto" src="/images/pro1.png" width={500} height={500} alt="not found" /></CardContent>
                        <CardContent>
                            <CardDescription className="font-extrabold text-base" >Brushed Raglan Sweatshirt
                            </CardDescription>
                            <CardDescription className="pt-2">Sweater</CardDescription>
                            <CardDescription className="pt-3 font-bold text-xl">$195</CardDescription>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className=" w-72 hover:cursor-pointer">
                        <CardContent><Image className="w-full h-auto" src="/images/f7.png" width={200} height={100} alt="not found" /></CardContent>
                        <CardContent>
                            <CardDescription className="font-extrabold text-base" >Cameryn Sash Tie Dress
                            </CardDescription>
                            <CardDescription className="pt-2">Dress</CardDescription>
                            <CardDescription className="pt-3 font-bold text-xl">$545</CardDescription>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className=" w-72 hover:cursor-pointer">
                        <CardContent><Image className="w-full h-auto" src="/images/f8.png" width={200} height={100} alt="not found" /></CardContent>
                        <CardContent>
                            <CardDescription className="font-extrabold text-base" >Flex Sweatshirt
                            </CardDescription>
                            <CardDescription className="pt-2">Sweater</CardDescription>
                            <CardDescription className="pt-3 font-bold text-xl">$175</CardDescription>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className=" w-72 hover:cursor-pointer">
                        <CardContent><Image className="w-full h-auto" src="/images/f1.png" width={200} height={100} alt="not found" /></CardContent>
                        <CardContent>
                            <CardDescription className="font-extrabold text-base" >Flex Sweatpants
                            </CardDescription>
                            <CardDescription className="pt-2">Paints</CardDescription>
                            <CardDescription className="pt-3 font-bold text-xl">$100</CardDescription>
                        </CardContent>
                    </Card>
                </div>

            </div>
            <div className="flex flex-wrap justify-evenly pt-16 ">
                <div>
                    <Card className=" w-72 hover:cursor-pointer">
                        <CardContent><Image className="w-full h-auto" src="/images/f2.png" width={500} height={500} alt="not found" /></CardContent>
                        <CardContent>
                            <CardDescription className="font-extrabold text-base" >Pink Fleece Sweatpants
                            </CardDescription>
                            <CardDescription className="pt-2">Paints</CardDescription>
                            <CardDescription className="pt-3 font-bold text-xl">$195</CardDescription>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className=" w-72 hover:cursor-pointer">
                        <CardContent><Image className="w-full h-auto" src="/images/f3.png" width={200} height={100} alt="not found" /></CardContent>
                        <CardContent>
                            <CardDescription className="font-extrabold text-base" >Lite Sweatpants
                            </CardDescription>
                            <CardDescription className="pt-2">Paints</CardDescription>
                            <CardDescription className="pt-3 font-bold text-xl">$150</CardDescription>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className=" w-72 hover:cursor-pointer">
                        <CardContent><Image className="w-full h-auto" src="/images/f4.png" width={200} height={100} alt="not found" /></CardContent>
                        <CardContent>
                            <CardDescription className="font-extrabold text-base" >Imperial Alpaca Hoodie
                            </CardDescription>
                            <CardDescription className="pt-2">Jackets</CardDescription>
                            <CardDescription className="pt-3 font-bold text-xl">$525</CardDescription>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className=" w-72 hover:cursor-pointer">
                        <CardContent><Image className="w-full h-auto" src="/images/f5.png" width={200} height={100} alt="not found" /></CardContent>
                        <CardContent>
                            <CardDescription className="font-extrabold text-base" >Muscle Tank
                            </CardDescription>
                            <CardDescription className="pt-2">T Shirts
                            </CardDescription>
                            <CardDescription className="pt-3 font-bold text-xl">
                                $75</CardDescription>
                        </CardContent>
                    </Card>
                </div>

            </div>
            <div className="flex flex-wrap justify-evenly pt-16 pb-24">
                <div>
                    <Card className=" w-72 hover:cursor-pointer">
                        <CardContent><Image className="w-full h-auto" src="/images/f6.png" width={500} height={500} alt="not found" /></CardContent>
                        <CardContent>
                            <CardDescription className="font-extrabold text-base" >Brushed Bomber
                            </CardDescription>
                            <CardDescription className="pt-2">Jackets</CardDescription>
                            <CardDescription className="pt-3 font-bold text-xl">
                                $225
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}