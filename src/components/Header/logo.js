import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/iaa_logo.svg"

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <div className="w-12 rounded-full overflow-hidden mx-3">
                <Image src={profileImg} alt="Ivar Alexander Abusdal"
                        className="w-full h-auto p-1 rounded-full bg-dark" />
            </div>
            <span className="font-bold text-xl">Ivar A. Abusdal</span>
        </Link>
    )
}

export default Logo;