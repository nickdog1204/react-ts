import React, {useEffect, useState} from "react";
import axios from "axios";

const Search: React.FC = () => {
    const [term, setTerm] = useState<string>('programming')
    const [results, setResults] = useState<{ title: string; snippet: string; pageid: number }[]>([])
    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            setResults(data.query.search)
        }
        if (term && !results.length) {
            console.log('111')
            search();

        } else {
            console.log('222')
            const timeoutId = setTimeout(() => {
                if (term) {
                    search();
                }
            }, 2000);
            return () => {
                console.log('CLEANUPPPP')
                clearTimeout(timeoutId)
            }

        }

    }, [term, results.length]);
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