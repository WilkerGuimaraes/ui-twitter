import styled from "styled-components";

export const TimelineContainer = styled.main`
  .new-tweet-form {
    padding: 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      display: flex;
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
        margin-top: 0.75rem;
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
    }
  }
`;
