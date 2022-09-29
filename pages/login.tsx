import cx from 'classnames';
import useLoginUser from '../hooks/useLoginUser';
import styles from "../styles/login.module.css"

const login = () => {
    const { loginUser }: any = useLoginUser();

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // try {
        const data = {
            email: event.target.email.value,
            password: event.target.password.value,
        }
        console.log('data:>::::::::::', data);
        await loginUser(data.email, data.password);
        // } catch (error) {

        //     console.log("Error:::::::::::", error);

        // }

    }

    return (
        <>
            <main className={cx(styles["form-signin"], "text-center", "mt-5")}>
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mt-4">
                        <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className={cx(styles.checkbox, "mb-3")}>
                        <label>
                            <input type="checkbox" name="rememberMe" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>

        </>
    )

}

export default login;