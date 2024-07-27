export default function SingleCat({ name, latinName, image }) {
    return (
        <div className="cat">
            <h3>{name}</h3>
            <p>Latin Name: {latinName}</p>
            {image && <img src={image} alt={name} />}
        </div>
    );
}