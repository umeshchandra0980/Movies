import React from 'react';
import styled from 'styled-components';

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="rating">
        <input type="radio" id="star5" name="rating" value="5" />
        <label htmlFor="star5"></label>

        <input type="radio" id="star4" name="rating" value="4" />
        <label htmlFor="star4"></label>

        <input type="radio" id="star3" name="rating" value="3" />
        <label htmlFor="star3"></label>

        <input type="radio" id="star2" name="rating" value="2" />
        <label htmlFor="star2"></label>

        <input type="radio" id="star1" name="rating" value="1" />
        <label htmlFor="star1"></label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .rating input {
    display: none; /* Hides native radio */
  }

  .rating label {
    font-size: 32px;
    cursor: pointer;
    color: #ccc;
    transition: color 0.2s;
  }

  .rating label:before {
    content: "★";
    display: inline-block;
  }

  /* Color when selected */
  .rating input:checked ~ label {
    color: #6f00ff;
  }

  /* Color when hovering */
  .rating label:hover,
  .rating label:hover ~ label {
    color: #6f00ff;
  }
`;

export default Radio;
