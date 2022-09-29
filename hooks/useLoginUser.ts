import { gql, useQuery } from "@apollo/client";

const LOGIN = gql`
query Login($email:String!, $password:String!){
  login(email:$email,password:$password)
}`;

const useLoginUser = () => {
    return useQuery(LOGIN);
}

export default useLoginUser;

