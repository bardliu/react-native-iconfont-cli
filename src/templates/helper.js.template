/* eslint-disable */

/**
 * @param {string | string[] | undefined} color
 * @param {number} index
 * @param {string} defaultColor
 * @return {string}
 */
export const getIconColor = (color, index, defaultColor) => {
  return color
    ? (
      typeof color === 'string'
        ? color
        : color[index] || defaultColor
    )
    : defaultColor;
};

/**
 * @param {number | number[] | undefined} size
 * @param {number} index
 * @return {number}
 */
export const getIconSize = (size, index) => {
  return size
    ? (
      typeof size === 'number'
        ? size
        : size[index] || size[0] || 0
    )
    : 0;
};
