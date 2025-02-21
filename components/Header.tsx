import Image from "next/image";


export function Header() {
    return (
        <div className="w-screen p-5 flex justify-between border-b border-[#303352]">
            <Image src={"/logo.png"} alt="SumTube" width="150" height={"150"}/>
            <button className="text-white rounded outline outline-cyan-500 p-2">Get Started</button>
        </div>
    )
}