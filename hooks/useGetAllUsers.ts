import { gql, useQuery } from "@apollo/client";
const GET_ALL = gql`
query allUser{
    users{
      id
      firstName
    }
}`;

const useGetAllUser = () => {
  return useQuery(GET_ALL);
}

export default useGetAllUser;