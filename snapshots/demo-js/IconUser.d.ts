/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg-animation-fix';

interface Props extends GProps, ViewProps {
  size?: number | number[];
  color?: string | string[];
}

declare const IconUser: FunctionComponent<Props>;

export default IconUser;
