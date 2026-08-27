export function PriceCards({ title, features, description, price, className, popular }) {
    return (
        <article className="pricing-card">

            {popular && <span className="popular">⭐ MÁS ELEGIDO</span>}

            <h3>{title}</h3>

            <div className="price">
                <small>Desde</small>
                <strong>{price}</strong>
            </div>

            <p>{description}</p>

            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <a href="#reserva" className={className}>
                🎈 Reservar
            </a>

        </article>
    );
}

