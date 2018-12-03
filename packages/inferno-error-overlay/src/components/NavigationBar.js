/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { red, redTransparent } from '../styles';

const navigationBarStyle = {
  'margin-bottom': '0.5rem',
};

const buttonContainerStyle = {
  'margin-right': '1em',
};

const _navButtonStyle = {
  'background-color': redTransparent,
  color: red,
  border: 'none',
  'border-radius': '4px',
  padding: '3px 6px',
  cursor: 'pointer',
};

const leftButtonStyle = {
  ..._navButtonStyle,
  'border-top-right-radius': '0px',
  'border-bottom-right-radius': '0px',
  'margin-right': '1px',
};

const rightButtonStyle = {
  ..._navButtonStyle,
  'border-top-left-radius': '0px',
  'border-bottom-left-radius': '0px',
};

function NavigationBar(props) {
  const { currentError, totalErrors, previous, next } = props;
  return (
    <div style={navigationBarStyle}>
      <span style={buttonContainerStyle}>
        <button onClick={previous} style={leftButtonStyle}>
          ←
        </button>
        <button onClick={next} style={rightButtonStyle}>
          →
        </button>
      </span>
      {`${currentError} of ${totalErrors} errors on the page`}
    </div>
  );
}

export default NavigationBar;