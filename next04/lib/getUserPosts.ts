export default async function getUserPosts(userId: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        // this option object is a default option
            // { cache: 'force-cache' }
        // But you have to change it if you know that data changing constantly
        // the oposite of allowing it to be cached is :
            // { cache: 'no-store'}
        // But there are an other option which will check if there are a difference
            { next: { revalidate: 60 } }
            // Here it will sho the data for 60 seconds 
            // before to revalidate to check to see if there is new data
            // But you have to leave the page and come back to the page
    )

    if (!response.ok) return undefined

    return response.json();
}