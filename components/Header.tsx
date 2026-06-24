import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import UserDropdown from "./userDropdown";

const Header = async ({ user }: { user: User }) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper flex items-center justify-between">
        <Link href="/">
          <Image
            src="/assets/icons/logo-trimmed.png"
            alt="InvestIQ Logo"
            width={1920}
            height={1079}
            className="h-12 w-auto cursor-pointer object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"
          />
        </Link>
        <nav className="hidden sm:block">
          <NavItems initialStocks={[]} />
        </nav>
        {/* UserDropdown */}
        <UserDropdown user={user} />
      </div>
    </header>
  );
};

export default Header;
