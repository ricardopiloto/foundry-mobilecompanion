import { Grid } from "@mui/material";
import { Actors } from "../../app/models/Actors";
import ActorDetails from "./ActorDetails";
import ActorCard from "./ActorCard";
import { Worlds } from "../../app/models/Worlds";


interface Props {
    actor: Actors[];
    world: string;
}


export default function WorldList({ actor, world }: Props) {
    return (
        <Grid container spacing={1}>
            {actor.map(actor => (
                <Grid key={actor.id} item xs>
                    <ActorCard actor={actor} world={world}/>
                </Grid>
            ))}
        </Grid>
    )
}