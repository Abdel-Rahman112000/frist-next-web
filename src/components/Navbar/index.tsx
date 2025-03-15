"use client";
import { Link } from "@/i18n/navigation";
import { useLocale } from "next-intl";

function Navbar() {
  const locale = useLocale();
  return (
    <div>
      {locale == "ar" ? (
        <Link href={"/"} locale="en">
          en
        </Link>
      ) : (
        <Link href={"/"} locale="ar">
          ar
        </Link>
      )}
    </div>
  );
}

export default Navbar;
