export const validateDOB = (date: String) => {
  if (date.length !== 8) {
    return false;
  }

  if (Number(date.substring(0, 2)) > 12) {
    return false;
  }

  if (Number(date.substring(2, 4)) > 31) {
    return false;
  }

  const currentTime = new Date();
  const year = currentTime.getFullYear();

  if (Number(date.substring(4, 8)) >= year) {
    return false;
  }

  return true;
};
