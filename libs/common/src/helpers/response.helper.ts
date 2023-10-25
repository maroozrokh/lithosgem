export const OK = (data: any, force = false) => {
  if (force) return { error: false, ...data };
  return { error: false, data };
};
export const BAD_REQUEST = (message: any) => {
  return { error: true, message };
};
