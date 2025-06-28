import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex gap-2 items-center">
      <img src={"/logo.png"} className="size-6" />
      <span className="font-poppins tracking-widest uppercase font-semibold text-white">
        logo
      </span>
    </Link>
  );
};

export default Logo;
