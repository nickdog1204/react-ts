import React, {useEffect, useState} from "react";
import axios from "axios";

const Search: React.FC = () => {
    const [term, setTerm] = useState<string>('programming')
    const [debouncedTerm, setDebouncedTerm] = useState<string>(term);
    const [results, setResults] = useState<{ title: string; snippet: string; pageid: number }[]>([])
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)
        return () => {
            clearTimeout(timerId);
        }
    }, [term])
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResults(data.query.search);
        }
        search();
    }, [debouncedTerm]);
    const displayedResults = results.map(result => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >前往</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="term">輸入搜尋詞:</label>
                    <input
                        className="input"
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {displayedResults}
            </div>
        </div>
    )

}

export default Search;