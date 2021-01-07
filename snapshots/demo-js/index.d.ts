/* eslint-disable */

import { FunctionComponent } from 'react';
// Don't forget to install package: @types/react-native
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg-animation-fix';

interface Props extends GProps, ViewProps {
  name: 'alipay' | 'user' | 'setup';
  size?: number | number[];
  color?: string | string[];
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
