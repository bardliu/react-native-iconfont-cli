/* tslint:disable */
/* eslint-disable */

export const getIconColor = (color: string | string[] | undefined, index: number, defaultColor: string) => {
  return color
    ? (
      typeof color === 'string'
        ? color
        : color[index] || defaultColor
    )
    : defaultColor;
};

export const getIconSize = (size: number | number[] | undefined, index: number) => {
  return size
    ? (
      typeof size === 'number'
        ? size
        : size[index] || size[0] || 0
    )
    : 0;
};
