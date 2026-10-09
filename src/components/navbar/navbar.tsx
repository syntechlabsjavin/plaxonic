import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import Logo from "./logo";

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  /** Dropdown links. Leave empty until you have the real menu content. */
  children?: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "What we do" },
  { label: "Who we serve" },
  { label: "Who we are" },
  { label: "Insights" },
  { label: "Careers" },
];

interface NavbarProps {
  onAskArchI?: () => void;
}

export default function Navbar({ onAskArchI }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);

  // Close any open dropdown when clicking outside the nav
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleMenu = (label: string) =>
    setOpenMenu((current) => (current === label ? null : label));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="flex items-center justify-between h-16 xl:h-20">
          <div className="flex items-center">
            <a href="/" className="cursor-pointer" aria-label="Plaxonic home">
              <Logo className="xl:w-[120px] xl:h-[45px]" />
            </a>

            <nav
              ref={navRef}
              className="hidden lg:flex items-center space-x-0 xl:space-x-0.5 2xl:space-x-1 ml-6 xl:ml-10 2xl:ml-40"
            >
              {NAV_ITEMS.map((item) => {
                const isOpen = openMenu === item.label;
                return (
                  <div key={item.label} className="relative">
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className="flex items-center space-x-1 px-2 xl:px-2.5 2xl:px-4 py-2 text-gray-700 hover:text-primary transition-colors rounded-lg whitespace-nowrap"
                    >
                      <span className="font-normal text-sm xl:text-[15px] 2xl:text-lg whitespace-nowrap">
                        {item.label}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen && item.children && item.children.length > 0 && (
                      <ul className="absolute left-0 top-full mt-1 min-w-[220px] bg-white shadow-lg border border-gray-100 py-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              className="block px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="hidden lg:flex items-center space-x-2 2xl:space-x-3">
            <a
              href="/contact"
              className="h-9 xl:h-10 px-3 xl:px-4 2xl:px-5 text-primary font-normal text-sm xl:text-[15px] 2xl:text-lg border border-primary hover:bg-primary/5 transition-colors flex items-center justify-center whitespace-nowrap"
            >
              Contact
            </a>

            <button
              type="button"
              onClick={onAskArchI}
              className="h-9 xl:h-10 px-3 xl:px-4 2xl:px-5 bg-primary text-white font-normal text-sm xl:text-[15px] 2xl:text-lg hover:bg-primary-dark transition-colors flex items-center justify-center space-x-1.5 xl:space-x-2 whitespace-nowrap"
            >
              <Sparkles
                className="w-3.5 h-3.5 xl:w-4 xl:h-4 flex-shrink-0"
                aria-hidden="true"
              />
              <span>
                Ask Arch
                <span style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}>
                  I
                </span>
              </span>
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 sm:px-6 py-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  className="w-full text-left py-2 text-gray-700 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href="/contact"
              className="h-10 px-5 text-primary border border-primary flex items-center justify-center"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={onAskArchI}
              className="h-10 px-5 bg-primary text-white flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>
                Ask Arch
                <span style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}>
                  I
                </span>
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}