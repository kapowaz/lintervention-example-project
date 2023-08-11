/**
 * An example file with an eslint-ignore rule that we probably shouldn’t use
 */

export const multiply = (a, b) => {
  const result = a * b;

  // eslint-disable-next-line no-console
  console.log({ result });
  return result;
};
