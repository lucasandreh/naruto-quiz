import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    width: 100%;
    padding: 15px;

    text-align: center;
    border: 2px solid #010101;

    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};

    font-size: 16px;
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <InputBase onChange={onChange} placeholder={placeholder} {...props} />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
