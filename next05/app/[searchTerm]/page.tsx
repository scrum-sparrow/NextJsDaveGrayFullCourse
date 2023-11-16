import getWikiResults from "@/lib/getWikiResults"
// component
import Item from "./components/Item";

type Props = {
    params: {
        searchTerm: string
    }
}

export async function generateMetadata({params: { searchTerm }}: Props) {
    const WikiData: Promise<SearchResult> = getWikiResults(searchTerm);
    const data = await WikiData;

    const displayTerm = searchTerm.replaceAll('%20', ' ');

    if ( !data?.query?.pages ) {
        return {
            title: `${displayTerm} Not Found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }

}

export default async function SearchResults({params: { searchTerm }}: Props) {
    console.log(searchTerm)
    const WikiData: Promise<SearchResult> = getWikiResults(searchTerm);
    const data = await WikiData;

    const results: Result[] | undefined = data?.query?.pages

    const content = (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            {
                results ? (
                    Object.values(results).map((result) => {
                        return <Item key={result.pageid} result={result} />
                    })
                ) : (
                    <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
                )
            }
        </main>
    )

    return content;
}