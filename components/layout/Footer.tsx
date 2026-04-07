import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-16">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl text-stone-900">
              {site.companyName}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {site.footer.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-10 sm:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                Navigate
              </p>
              <ul className="mt-4 space-y-2">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-stone-600 transition-colors hover:text-stone-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                Contact
              </p>
              <ul className="mt-4 space-y-2 text-sm text-stone-600">
                <li>{site.contact.details.email}</li>
                <li>{site.contact.details.phone}</li>
                <li>{site.contact.details.address}</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-14 border-t border-stone-100 pt-8 text-xs text-stone-500">
          © {site.footer.copyrightYear} {site.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
