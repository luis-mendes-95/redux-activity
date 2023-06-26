export const addStamina = (stamina: any) => {
  return {
    type: "ADD_STAMINA",
    stamina,
  };
};

export const decreaseStamina = (stamina: any) => {
  return {
    type: "DECREASE_STAMINA",
    stamina,
  };
};
