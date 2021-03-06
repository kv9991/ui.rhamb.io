import React from 'react';
import { dissoc } from 'ramda';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { List } from '../list';

export const HorizontalMenuRaw = ({
  children,
  className,
  classes,
  as,
  ...rest
}) => (
  <List
    className={classnames(className, classes.list)}
    as={as}
    {...dissoc('theme', rest)}
  >
    {children}
  </List>
);

HorizontalMenuRaw.propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

HorizontalMenuRaw.defaultProps = {
  as: null,
  className: null,
};
