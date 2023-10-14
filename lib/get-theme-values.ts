export const getThemeValues = (nameArray: string[]) => {
  const nameValue: string[] = [];
  nameArray.forEach((e, index) => {
    const value = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--" + e);
    nameValue[index] = value;
  });
  return nameValue;
};
