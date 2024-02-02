import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

interface PaginationLinkProps {
  children: ReactNode;
  href: string;
  enabled: boolean;
}

export const PaginationLink: FC<PaginationLinkProps> = ({
  children,
  href,
  enabled,
}) => {
  if (!enabled) {
    return (
      <span className="border cursor-not-allowed rounded text-slate-300 text-sm">
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="border rounded text-slate-500 text-sm
                 hover:bg-orange-100 hover:text-slate-700"
    >
      {children}
    </Link>
  );
};

export default PaginationLink;
