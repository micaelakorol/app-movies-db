import React from 'react';

const useLoading = (loading, error) => {

  const LoadingErrorComponent = () => {
    if (loading) return <h1 className="title">Loading...</h1>;
    if (error !== "") return <h1 className="title">{error}</h1>;
    return null;
  };
  return {LoadingErrorComponent};
};

export default useLoading;
