export function RoomCards({ image, title, subtitle, features }) {
    return (
        <article className="room">

            <div className="room-image">
                <img src={image} alt={title} />
            </div>

            <div className="room-content">
                <h3>{title}</h3>
                <p>{subtitle}</p>

                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                <a href="#reserva" className="btn btn-purple">
                    Ver más
                </a>
            </div>

        </article>
    );
}
