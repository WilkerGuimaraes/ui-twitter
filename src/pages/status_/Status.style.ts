import styled from "styled-components";

export const StatusContainer = styled.main`
  .answer-tweet-form {
    padding: 1.5rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid #ebeef0;

    label {
      display: flex;
      flex: 1;
      align-items: center;
      gap: 0.75rem;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 999px;
        object-fit: cover;
      }

      textarea {
        flex: 1;
        border: 0;
        font-size: 1.25rem;
        font-weight: 500;
        margin-top: 1.25rem;
        resize: none;

        &:focus {
          outline: none;
        }

        &::placeholder {
          color: #5b7083;
        }
      }
    }

    button[type="submit"] {
      margin-left: auto;
      background: var(--twitter-blue);
      border-radius: 9999px;
      padding: 0.75rem 1.5rem;
      color: #fff;
      font-size: 1rem;
      font-weight: 900;
      border: 0;

      &:hover {
        filter: brightness(0.9);
      }

      svg {
        width: 1.5rem;
        height: 1.5rem;
        display: none;
      }
    }

    @media (max-width: 780px) {
      label textarea {
        font-size: 1rem;
      }

      button[type="submit"] {
        padding: 0.75rem;

        svg {
          display: block;
        }

        span {
          display: none;
        }
      }
    }
  }
`;
