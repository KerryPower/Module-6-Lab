import { useState } from 'react';
import SingleCat from './SingleCat';
import cats from './cats.json';

export default function BigCats() {
    const [list, setList] = useState(cats);
    const [filtered, setFiltered] = useState();
    const [reversed, setReversed] = useState(false);
    const [alphabetised, setAlphabetised] = useState(false);
    const [prevList, setPrevList] = useState();

    const handleReverseClick = () => {
        if (!reversed) {
            setPrevList(list);
            setList(prevList => [...prevList].reverse());
            setReversed(true);
        } else {
            setList(prevList);
            setReversed(false);
        }
    };

    const handleAlphabetiseClick = () => {
        if (!alphabetised) {
            setPrevList(list);
            setList(prevList => [...prevList].sort((a, b) => a.name.localeCompare(b.name)))
            setAlphabetised(true);
        } else {
            setList(prevList);
            setAlphabetised(false);
        }
    };

    const handleFilterClick = () => {
        setFiltered(prevFiltered => !prevFiltered);
    };

    const displayList = filtered
        ? list.filter(cat => cat.latinName.includes("Panthera"))
        : list;

    return (
        <div className="big-cats">
            <h2>Big Cats List</h2>
            <button onClick={handleReverseClick}>
                {reversed ? 'Reset' : 'Reverse List'}</button>
            <button onClick={handleAlphabetiseClick}>
                {alphabetised ? 'Reset' : 'Alphabetise List'}</button>
            <button onClick={handleFilterClick}>
                {filtered ? 'Reset Filter' : 'Panthera Filter'}</button>
            <div className="cats-list">
                {displayList.map((cat, index) => (
                    <div key={index} className="single-cat">
                        <SingleCat
                            name={cat.name}
                            latinName={cat.latinName}
                            image={`/images/${cat.image}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}