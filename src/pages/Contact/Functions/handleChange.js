export const handleChange = (e, setFieldEmail) => {
  setFieldEmail((old) => ({
    ...old,
    [e.target.name]: e.target.value,
  }));
};
