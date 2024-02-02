'use client';
import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  children: ReactNode;
  href: string;
  prefetch?: boolean;
}

export const NavLink: FC<NavLinkProps> = ({
  children,
  href,
  prefetch = false,
}) => {
  const pathname = usePathname();
  if (pathname === href) {
    return <span className="text-orange-800">{children}</span>;
  }

  return (
    <Link prefetch={prefetch} href={href} className={`text-orange-800`}>
      {children}
    </Link>
  );
};

export default NavLink;
