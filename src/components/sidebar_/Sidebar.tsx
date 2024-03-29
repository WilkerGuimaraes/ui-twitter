import twitterLogo from "../../assets/logo-twitter.svg";

import {
  Bell,
  BookBookmark,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "phosphor-react";

import { SidebarStyle } from "./Sidebar.style";

export const Sidebar = () => {
  return (
    <SidebarStyle>
      <img className="logo" src={twitterLogo} alt="twitterLogo" />

      <nav className="main-navigation">
        <a href="/">
          <House className="active" weight="fill" />
          <span>Home</span>
        </a>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notification</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookBookmark />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </SidebarStyle>
  );
};
