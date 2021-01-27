import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`

      margin-top: 20px;

      width: 100%;
      padding: 10px 16px;

      background-color: ${({ theme }) => theme.colors.primary};

      color: #fff;
      border: 2px solid #010101;

      transition: 0.5s;

      font-size: 16px;

      cursor: pointer;

      &:disabled {
          background-color: grey;
          cursor: not-allowed;
      }
`;

Button.propTyper = {
  type: PropTypes.oneOf(['submit', 'type', 'button']),
  children: PropTypes.node.isRequired,
};

export default Button;
