import SingleCat from './SingleCat';
import cats from './cats.json';

export default function BigCats() {
   
    return (
        <div className="big-cats">
            <h2>Big Cats List</h2>
            <div className="cats-list">
                {cats.map((cat, index) => (
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