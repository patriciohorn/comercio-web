import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link } from './ui/link';
import { Button } from './ui/button';
import { Tag, User, Handshake, LayoutList } from 'lucide-react';

function MobileMenu({ items, isSpanish }: any) {
  const linkItems = [
    {
      label: items.brands,
      icon: Tag,
    },
    {
      label: items.about,
      icon: User,
    },
    {
      label: items.categories,
      icon: LayoutList,
    },
    {
      label: items.clients,
      icon: Handshake,
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden text-white inline-flex items-center justify-center h-10 w-10">
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
            className="feather feather-menu">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent className="min-h-svh">
        <SheetHeader>
          <SheetTitle>
            {/* <img src={logo.src} className="max-w-20"></img> */}
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col justify-center space-y-6 py-8 ">
          <ul>
            {linkItems.map(
              ({ label, icon: IconComponent }, index) => (
                <li
                  key={index}
                  className="text-lg flex items-center gap-x-3">
                  <IconComponent size={18} color="#242528" />
                  <Link
                    variant="link"
                    className="text-lg text-[#242528] font-medium hover:underline px-0 justify-start"
                    href={
                      isSpanish
                        ? `/#${label.toLowerCase()}`
                        : `/en/#${label.toLowerCase()}`
                    }>
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <Button asChild>
            <Link
              size="sm"
              className="text-base"
              href={isSpanish ? '/contacto' : '/en/contact'}>
              {isSpanish ? 'Contacto' : 'Contact'}
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export { MobileMenu };
