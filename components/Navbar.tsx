import Link from "next/link";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";

export const Navbar = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLocale = (e: SyntheticEvent<HTMLSelectElement>) => {
    const locale = e.currentTarget.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav>
      <select value={locale} onChange={changeLocale}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="nl">Dutch</option>
      </select>

      <ul>
        <li>
          <Link href="/">Index</Link>
        </li>
        <li>
          <Link href="/over-ons" locale="nl">
            Over ons
          </Link>
        </li>
        <li>
          <Link href="/a-propos" locale="fr">
            à propos
          </Link>
        </li>
        <li>
          <Link href="/about" locale="en">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
