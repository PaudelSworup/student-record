export const registerStudent = async (data: any) => {
  localStorage.setItem("studentsdetail", JSON.stringify(data));
};
