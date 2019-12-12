export const updateObject = (oldObject, updatePropeties) => {
  return {
    ...oldObject,
    ...updatePropeties
  };
};