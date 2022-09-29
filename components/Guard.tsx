import useGetAllUser from "../hooks/useGetAllUsers";
import useGetMe from "../hooks/useGetMe";

interface GuardProps {
    children: JSX.Element;
    excludedRoutes?: string[];
}

const Guard = ({ children, excludedRoutes }: GuardProps) => {
    const { data: test } = useGetAllUser();
    const { data: user } = useGetMe();
    console.log('user from guard', user)

    return (
        <div>
            {children}
        </div>
    );
};

export default Guard;