import axios from "axios";
import ApiInfo from "../helpers/apiInfo";

export async function getActors(token, selectedWorld) {
    const AuthStr = `Bearer ${token}`;
    const request = await axios.get(axios.get(`${ApiInfo()}/api/v1/actors/${selectedWorld}`), {headers: {Authorization: AuthStr}});
    const response = await request;
    return (response)
}