import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Worlds } from "../../app/models/Worlds";
import baseUrl from "../../helpers/artInfo";
import { Link } from "react-router-dom";
import { Actors } from "../../app/models/Actors";


interface Props {
    actor: Actors;
    world: string;
}

export default function ActorCard({ actor, world }: Props) {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'info.light'}}>
                        {actor.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={actor.type.toUpperCase()}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
            />
            <CardMedia
                sx={{ height: 140}}
                image={`${baseUrl()}/` + actor.img}
                title={actor.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {actor.name}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary"dangerouslySetInnerHTML={{ __html: description}}/> */}
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/actor/${world}/${actor.id}`} size="small">Open</Button>
            </CardActions>
        </Card>
    )
}