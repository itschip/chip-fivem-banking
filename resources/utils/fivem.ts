export const Delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const sendMessage = (method: string, data = {}) => {
  return SendNuiMessage(
    JSON.stringify({
      app: 'NBWD',
      method: method,
      data: data,
    }),
  );
};
