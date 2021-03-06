import { useQuery, gql } from "@apollo/client";
import LaunchItem from './LaunchItem'
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
    query LaunchesQuery{
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    return (
        <div className="container">
            <h1 className="display-4 my-3">Launches</h1>
            <MissionKey />
            {displayLaunches(loading, error, data)}
        </div>
    );
};

function displayLaunches(loading, error, data) {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data) {
        return (
            Object.values(data['launches']).map(launch => {
                return (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                );
            })
        );
    }
}

export default Launches;