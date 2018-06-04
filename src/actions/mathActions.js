export function addNumber(number) {
  return {
    type: "ADD",
    payload: number
  };
}

export function subtrackNumber(number) {
  return {
    type: "SUBTRACK",
    payload: number
  };
}
