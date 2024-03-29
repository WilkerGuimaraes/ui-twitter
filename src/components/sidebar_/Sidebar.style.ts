import styled from "styled-components";

export const SidebarContainer = styled.aside`
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .logo {
    width: 2rem;
    height: 2rem;
  }

  .new-tweet {
    background: var(--twitter-blue);
    border-radius: 9999px;
    padding: 1rem;
    display: flex;
    justify-content: center;
    width: 100%;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 900;
    border: 0;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      display: none;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .main-navigation {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    a {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      font-size: 1.25rem;
      font-weight: 700;
      text-decoration: none;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }

    .active {
      color: var(--twitter-blue);
    }
  }
`;
