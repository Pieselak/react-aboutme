const calculateAge = (birthdate: string) => {
  const todayDate = new Date();
  const birthDate = new Date(birthdate);

  let age = todayDate.getFullYear() - birthDate.getFullYear();
  const month = todayDate.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && todayDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export default calculateAge;
