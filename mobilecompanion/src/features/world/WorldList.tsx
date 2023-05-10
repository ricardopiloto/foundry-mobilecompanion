import { Grid } from "@mui/material";
import WorldCard from "./WorldCard";
import { Worlds } from "../../app/models/Worlds";


interface Props {
    world: Worlds[];
}


export default function WorldList({ world }: Props) {
    return (
        <Grid container spacing={4}>
            {world.map(world => (
                <Grid key={world.id} item xs zeroMinWidth>
                    <WorldCard world={world} />
                </Grid>
            ))}
        </Grid>
    )
}