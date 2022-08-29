import React from "react";
import ErrorBoundaries from "../../utils/ErrorBoundaries";
import { getDataFromServer } from "../../utils/query";

const Button = () => {
  return (
    <button
      onClick={() => {
        throw Error("Self triggered error");
      }}
      style={{
        color: "white",
        backgroundColor: "red",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Throw Error
    </button>
  );
};

export const getServerSideProps = async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await response.json();

  return {
    props: {
      data: [],
    },
  };
};
const ServerRendering = (props: any) => {
  getDataFromServer();

  return (
    <ErrorBoundaries>
      <div>
        {props?.data?.map((user: any) => (
          <div key={user.id}>{user.name}</div>
        ))}

        <Button />
      </div>
    </ErrorBoundaries>
  );
};

export default ServerRendering;
