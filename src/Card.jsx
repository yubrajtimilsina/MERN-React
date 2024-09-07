import './Card.css'

function Card(props){
    return (
        <div class="card">
        <img src="https://via.placeholder.com/300" alt="Card Image" class="card-image"/>
        <div class="card-content">
            <h2 class="card-title">{props.title}</h2>
            <p class="card-description">This is a simple card description. It provides a brief overview of the content.</p>
            <a href="#" class="card-button">Learn More</a>
        </div>
    </div>
    )
}


export default Card
