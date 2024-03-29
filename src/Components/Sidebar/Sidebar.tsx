"use client";

import { useGlobalState } from "@/context/GlobalProvider";
import Image from "next/image";
import styled from "styled-components";
import menu from "@/utils/menu";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const pathname = useParams();
  const { theme } = useGlobalState();
  //   console.log("color", theme);

  const handleClick = (link: string) => {
    router.push(link);
  };
  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image width={70} height={70} src="/avatar1.png" alt="profile" />
        </div>
        <h1>
          <span>Hen</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {
          const link = item.link;
          return (
            <li
              key={item.id}
              className={`nav-item ${pathname === link ? "active" : ""}`}
              onClick={() => handleClick(link)}
            >
              {item.icon}
              <Link href={link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <button></button>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Sidebar;
