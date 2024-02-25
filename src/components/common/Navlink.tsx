"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

export { NavLink };

interface NavLinkProps {
  href: string;
  exact?: boolean;
  className?: string;
  childrenRenderer?: (isActive: boolean) => ReactNode;
  children?: ReactNode;
}

const NavLink: FC<NavLinkProps> = ({
  href,
  exact,
  children,
  childrenRenderer,
  ...props
}) => {
  const pathName = usePathname();
  const isActive = exact ? pathName === href : pathName.includes(href);
  if (isActive) {
    props.className += " active";
  }

  return (
    <Link href={href} {...props}>
      {childrenRenderer ? childrenRenderer(isActive) : children}
    </Link>
  );
};
