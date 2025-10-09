import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import UserDropdown from "./userDropdown";
import { searchStocks } from "@/lib/actions/finnhub.actions";
const Header = async ({ user }: { user: User }) => {
  const initialStocks = await searchStocks();
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/icons/logo.png"
            alt="InvestIQ Logo"
            width={120} // reasonable width
            height={30} // reasonable height
            className="h-auto w-auto cursor-pointer"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        {/* UserDropdown */}
        <UserDropdown user={user} inititalStocks={initialStocks} />
      </div>
    </header>
  );
};

export default Header;
