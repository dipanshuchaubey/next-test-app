import { useQuery } from "@tanstack/react-query";

interface User {
  id: string;
  name: string;
  email: string;
}

export const getData = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = response.json();

  return data;
};

export const getDataFromServer = () => {
  const key = ["123"];
  const { data } = useQuery(key, getData);

  console.log(data);
  return data;
};
