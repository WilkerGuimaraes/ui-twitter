import { Sparkle } from "phosphor-react";

import { HeaderContainer } from "./Header.style";

interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <HeaderContainer>
      {props.title}
      <Sparkle />
    </HeaderContainer>
  );
};
