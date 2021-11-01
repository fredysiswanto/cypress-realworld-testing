import { connectStateResults } from "react-instantsearch-dom"

function Hits({ searchState, searchResults }) {
  const validQuery = searchState.query?.length >= 2

  return (
    <div className="search-results absolute bg-white px-4">
      {searchResults?.hits.length === 0 && validQuery && (
        <p>No search results were found.</p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol>
          {searchResults.hits.map((hit) => (
            <>
              {console.log(hit)}
              <li key={hit.objectID} className="mb-2">
                <a href={hit.url}>{hit.title}</a>
              </li>
            </>
          ))}
        </ol>
      )}
    </div>
  )
}

export default connectStateResults(Hits)
