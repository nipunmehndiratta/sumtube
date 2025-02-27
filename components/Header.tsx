import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <div className="h-[109px] sticky top-0 w-full p-5 flex justify-center bg-opacity-90 z-50 bg-inherit">
            <div className="flex justify-between items-center border border-gray-700 rounded-2xl w-4/6 p-3">
                <Link href={"/"}>
                    <Image src="/logo.png" alt="SumTube Logo" width={150} height={150}/>
                </Link>
            </div>
        </div>
    );
}
