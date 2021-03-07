export const Delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const sendMessage = (method: string, data = {}) => {
  //@ts-ignore
  return SendNuiMessage(
    JSON.stringify({
      app: 'NBWD',
      method: method,
      data: data,
    }),
  );
};

function getDistance(player: number[], target: number[]) {
  return (
    player
      .map((x, i) => Math.abs(x - target[i]) ** 2) // square the difference
      .reduce((sum, now) => sum + now) ** // sum
    (1 / 2)
  );
}
