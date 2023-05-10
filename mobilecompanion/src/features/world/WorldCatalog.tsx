import { useState, useEffect } from "react";
import { Worlds } from "../../app/models/Worlds";
import { getToken } from "../../services/apiAuth";
import { getWorlds } from "../../services/GetWorlds";
import Worldlist from "./WorldList";

export default function WorldCatalog() {
    const [world, setWorld] = useState<Worlds[]>([]);

    useEffect(() => {
        getToken()
            .then(items =>
                getWorlds(items.token)
                    .then(response => setWorld(response)))
    }, [])

    return (
        <>
            <Worldlist world={world} />
            {/* <Button variant="contained" onClick={listWorlds}>Get worlds</Button> */}
        </>
    )
}