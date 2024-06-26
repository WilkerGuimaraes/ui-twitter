import styled from "styled-components";

export const TweetContainer = styled.div`
  .tweet {
    padding: 1.5rem 1.25rem;
    display: grid;
    grid-template-columns: 3rem 1fr;
    gap: 0.75rem;
    border-bottom: 1px solid #ebeef0;
    text-decoration: none;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 999px;
      object-fit: cover;
    }
  }

  .tweet-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .tweet-content-header {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      span {
        font-size: 0.875rem;
        color: #89a2b8;
      }
    }

    p {
      line-height: 1.25;
    }

    .tweet-content-footer {
      display: flex;
      align-items: center;
      gap: 3rem;
      margin-top: 0.75rem;

      button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: transparent;
        border: 0;
        font-size: 0.875rem;
        color: #89a2b8;

        &:hover {
          color: var(--twitter-blue);
        }

        svg {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }
  }
`;
