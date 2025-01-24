import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import logo from '../assets/comweb-logo-outline.png';
import { Link } from './ui/link';

function MobileMenu({ items, isSpanish }: any) {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden text-white inline-flex items-center justify-center h-10 w-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu block overflow-visible">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {/* <img src={logo.src} className="max-w-20"></img> */}
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col justify-center space-y-4">
          <ul>
            {items.map((link: any, index: number) => (
              <li key={index} className="text-lg">
                <Link
                  variant="link"
                  className="text-lg text-black font-medium hover:underline px-0 justify-start"
                  href={
                    isSpanish
                      ? `/#${link.toLowerCase()}`
                      : `/en/#${link.toLowerCase()}`
                  }>
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* <Link
            variant="link"
            href="/about"
            className="text-lg font-medium hover:underline px-0 justify-start">
            About
          </Link> */}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export { MobileMenu };
