import ItemFrut from "./ItemFrut"

const ListFruts = () => {

    const fruts = ["🍐", "🍌", "🍎"];

    return (
        <ul>
            {
                fruts.map((fruta, index) => (
                    <ItemFrut key={index} frut={fruta} />
                ))
            }
        </ul>
    )
}

export default ListFruts