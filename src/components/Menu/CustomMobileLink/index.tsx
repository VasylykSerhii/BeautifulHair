import Link from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, memo } from "react";
import { Item } from "./styled-components";

interface ILink {
  href: string;
  title: string;
  styleAnimation: string;
  style?: CSSProperties;
  animatedLink?: boolean;
}

const reg = new RegExp("/([^/]+)/");

const CustomMobileLink = ({
  href,
  title,
  styleAnimation,
  style,
  animatedLink,
}: ILink) => {
  const router = useRouter();

  const isActiveLink = router.query.slug
    ? router.pathname.match(reg)[1] === href.slice(1)
    : router.pathname === href;

  return (
    <Link href={href} key={title} passHref>
      <Item
        styleAnimation={styleAnimation}
        active={isActiveLink}
        style={style}
        animatedLink={animatedLink}
      >
        {title}
      </Item>
    </Link>
  );
};
CustomMobileLink.defaultProps = {
  style: null,
  animatedLink: null,
};

export default memo(CustomMobileLink);
