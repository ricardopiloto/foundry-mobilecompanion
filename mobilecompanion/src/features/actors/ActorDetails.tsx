import { List, ListItem, Typography } from "@mui/material";
import { Actors } from "../../app/models/Actors";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ApiInfo from "../../helpers/apiInfo";
import { getToken } from "../../services/apiAuth";

export default function ActorDetails() {
    const { id, world } = useParams<{ id: string, world: string }>();
    const [actor, setActors] = useState<Actors[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getToken()
            .then(items =>
                axios.get(`${ApiInfo()}/api/v1/actors/${world}/id/${id}`, {
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
    }, [id])

    if (loading) return <h3>Loading...</h3>
    if (!id) return <h3>Actor not found...</h3>

    return (
        <Typography variant="h2">
            <List>
                {actor.map(actor => (
                    <ListItem key={id} alignItems="flex-start">
                        {actor.name}
                    </ListItem>
                ))}
            </List>
        </Typography>
    )
}