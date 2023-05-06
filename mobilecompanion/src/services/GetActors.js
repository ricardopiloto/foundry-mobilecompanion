export async function getActors(token) {
    let request = fetch('http://tossurrpg.servegame.com:5011/api/v1/actors/forgotten-realms/id/5Yrs4VHePHS8FIbc', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + String(token),
        },
    })
    const response = await request;
    const parsed = await response.json();
    return (parsed)
}