export const addHealth = (health: any) => {
  return {
    type: "ADD_HEALTH",
    health,
  };
};

export const decreaseHealth = (health: any) => {
  return {
    type: "DECREASE_HEALTH",
    health,
  };
};

