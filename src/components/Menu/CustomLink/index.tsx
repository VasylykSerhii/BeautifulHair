import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { Item } from "./styled-components";

interface ILink {
  href: string;
  title: string;
}

const reg = new RegExp("/([^/]+)/");

const CustomLink = memo(({ href, title }: ILink) => {
  const router = useRouter();

  const isActiveLink = router.query.slug
    ? router.pathname.match(reg)[1] === href.slice(1)
    : router.pathname === href;

  return (
    <Link href={href} key={title} passHref>
      <Item active={isActiveLink}>{title}</Item>
    </Link>
  );
});
export default CustomLink;
