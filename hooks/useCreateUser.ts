import { gql, useMutation } from "@apollo/client";

interface AddUserArgs {
    addUserArgs: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: string
    }

}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
}

const CREATE_USER = gql`
mutation AddUser($addUserArgs: AddUserArgs!){
    addUser(addUserArgs:$addUserArgs)
  }
`;

export const useCreateUser = () => {
    return useMutation<User, AddUserArgs>(CREATE_USER)
}
