import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { auth } from "@/lib/better-auth/auth";
import { redirect } from "next/navigation";
const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (session?.user) redirect("/");
  return (
    <main className="auth-layout">
      {/* Left Section */}
      <section className="auth-left-section scrollbar-hide">
        <Link href="/" className="">
          <Image
            src="/assets/icons/logo1.png"
            alt="InvestIQ"
            width={360}
            height={360}
            className="-m-14"
          />
        </Link>

        <div className="pb-1 lg:pb-2 flex-1">{children}</div>
      </section>

      {/* Right Section */}
      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            “InvestIQ transformed my watchlist into a winning list. The insights
            and alerts are incredibly accurate, giving me the confidence to make
            smarter moves in the market.”
          </blockquote>

          <div className="flex items-center justify-between">
            <div>
              <cite className="auth-testimonial-author">- Zubayer A.</cite>
              <p className="max-md:text-xs text-gray-500">Retail Investor</p>
            </div>

            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star"
                  key={star}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex-l">
          <Image
            src="/assets/images/1.png"
            alt="Dashboard Preview"
            width={1140}
            height={950}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
};

export default Layout;
