import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { Worlds } from "../../app/models/Worlds";
import baseUrl from "../../helpers/artInfo";
import { Link } from "react-router-dom";


interface Props {
    world: Worlds;
}

export default function WorldCard({ world }: Props) {
    let description = String(world.description) !== "null" ? String(world.description) : "";
    description = description.length > 200 ? `${description.substring(0, 200)}...` : description;
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: 'info.light'}}>
                        {world.title.charAt(0).toUpperCase()}
                    </Avatar>
                }
                title={world.system.toUpperCase()}
                titleTypographyProps={{
                    sx: {fontWeight: 'bold', color: 'primary.main'}
                }}
            />
            <CardMedia
                sx={{ height: 140}}
                image={`${baseUrl()}/` + world.background}
                title={world.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {world.title}
                </Typography>
                <Typography variant="body2" color="text.secondary"dangerouslySetInnerHTML={{ __html: description}}/>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/actorscatalog/${world.id}`} size="small">Open</Button>
            </CardActions>
        </Card>
    )
}