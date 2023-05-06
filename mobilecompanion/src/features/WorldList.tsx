import { Grid } from "@mui/material";
import { Worlds } from "../app/models/Worlds";
import WorldCard from "./WorldCard";

interface Props {
    world: Worlds[];
}

export default function WorldList({ world }: Props) {
    return (
        <Grid container spacing={4}>
            {world.map(world => (
                <Grid key={world.id} item xs>
                    <WorldCard world={world} />
                </Grid>
            ))}
        </Grid>
    )
}