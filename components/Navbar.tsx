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
    <header>
      <h1
        style={{
          fontSize: "2.5rem",
        }}
      >
        Next.js Middleware i18n Routing Demo
      </h1>

      <div>
        <h2>Change locale</h2>
        <select value={locale} onChange={changeLocale}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="nl">Dutch</option>
        </select>
      </div>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2>English pages</h2>
          <ul>
            <li>
              <Link href="/">Index</Link>
            </li>
            <li>
              <Link href="/about" locale="en">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" locale="en">
                Services
              </Link>
            </li>
            <li>
              <Link href="/services/development" locale="en">
                Development
              </Link>
            </li>
            <li>
              <Link href="/services/development/app" locale="en">
                App Development
              </Link>
            </li>
            <li>
              <Link href="/services/development/website" locale="en">
                Website Development
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>French pages</h2>
          <ul>
            <li>
              <Link href="/" locale="fr">
                Index
              </Link>
            </li>
            <li>
              <Link href="/a-propos" locale="fr">
                A propos
              </Link>
            </li>
            <li>
              <Link href="/offres" locale="fr">
                Offres
              </Link>
            </li>
            <li>
              <Link href="/offres/developement" locale="fr">
                Développement
              </Link>
            </li>
            <li>
              <Link href="/offres/developement/app" locale="fr">
                Développement d&apos;applications
              </Link>
            </li>
            <li>
              <Link href="/offres/developement/site-web" locale="fr">
                Développement de sites
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Dutch pages</h2>
          <ul>
            <li>
              <Link href="/" locale="nl">
                Index
              </Link>
            </li>
            <li>
              <Link href="/over-ons" locale="nl">
                Over ons
              </Link>
            </li>
            <li>
              <Link href="/diensten" locale="nl">
                Diensten
              </Link>
            </li>
            <li>
              <Link href="/diensten/ontwikkeling" locale="nl">
                Ontwikkeling
              </Link>
            </li>
            <li>
              <Link href="/diensten/ontwikkeling/app" locale="nl">
                App ontwikkeling
              </Link>
            </li>
            <li>
              <Link href="/diensten/ontwikkeling/website" locale="nl">
                Website ontwikkeling
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
