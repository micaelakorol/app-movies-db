import { useSearchParams } from "react-router-dom";

const HandleParams = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChangeParams = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return { handleChangeParams, searchParams };
};

export default HandleParams;