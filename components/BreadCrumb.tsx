import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className="flex items-center gap-1 font-open-Sans text-sm">
      <Link href={"/"}>Home</Link>
      <MdOutlineKeyboardDoubleArrowRight />
      <span className="text-[#b20d5d]">Admin</span>
    </div>
  );
};

export default BreadCrumb;
