export function SaveRegisterData(values) {
  //console.log(values);
  return {
    type: "SaveRegisterData",
    payload: values,
  };
}
export function AuthenticateData(values) {
  // console.log(values);
  return {
    type: "Check_data",
    payload: values,
  };
}
