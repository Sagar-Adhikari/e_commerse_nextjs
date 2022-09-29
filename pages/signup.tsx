import { useCreateUser } from "../hooks/useCreateUser";
import styles from "../styles/Auth.module.css"



const Signup = () => {

    const [createUser] = useCreateUser();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const data = {
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                email: event.target.email.value,
                password: event.target.password.value,
                role: event.target.role.value
            }
            console.log('data:>::::::::::', data);
            await createUser({
                variables: {
                    addUserArgs: data
                }
            });
        } catch (error) {

            console.log("Error:::::::::::", error);

        }


    }
    return (
        <form onSubmit={handleSubmit} className={styles.container} >

            <label htmlFor="firstName">FirstName</label>
            <input type="firstName" name="firstName" id="firstName" required />

            <label htmlFor="lastName">LastName</label>
            <input type="lastName" name="lastName" id="lastName" required />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />

            <label htmlFor="role">Role</label>
            <input type="role" name="role" id="role" required />

            <button type="submit">Submit</button>

        </form>
    )
}

export default Signup;


