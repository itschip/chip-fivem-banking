RegisterCommand(
  "fuckoff",
  () => {
    SendNuiMessage(
      JSON.stringify({
        app: "NBWD",
        method: "setVisibility",
        data: true,
      })
    );
  },
  false
);

RegisterCommand(
  "fuckon",
  () => {
    SendNuiMessage(
      JSON.stringify({
        app: "NBWD",
        method: "setVisibility",
        data: false,
      })
    );
  },
  false
);
