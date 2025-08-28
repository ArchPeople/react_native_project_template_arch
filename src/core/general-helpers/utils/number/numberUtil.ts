export const numberUtil = {
  isEvent: (value: number): boolean => {
    let result: boolean = false;
    if (value % 2 === 0) {
      result = true;
    }
    return result;
  },
};