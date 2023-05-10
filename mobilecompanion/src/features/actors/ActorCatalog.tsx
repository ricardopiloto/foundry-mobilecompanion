import { Grid, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Actors } from "../../app/models/Actors";
import { getToken } from "../../services/apiAuth";
import axios from "axios";
import ApiInfo from "../../helpers/apiInfo";
import ActorList from "./ActorList";

export default function ActorCatalog() {
    const { world } = useParams<{world: string}>();
    const [actors, setActors] = useState<Actors[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getToken()
            .then(items =>
                axios.get(`${ApiInfo()}/api/v1/actors/${world}/type/character`, {
                    headers: {
                        'Authorization': `Bearer ${items.token}`,
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                    .then((res) => {
                        setActors(res.data)
                    })
                    .catch((error) => {
                        console.error(error)
                    })
                    .finally(() => setLoading(false))
            );
    }, [world])

    if (loading) return <h3>Loading...</h3>
    if (!world) return <h3>World not found...</h3>

    return (
        <>
            <ActorList actor={actors} world={world}/>
            {/* <Button variant="contained" onClick={listWorlds}>Get worlds</Button> */}
        </>
    )
}