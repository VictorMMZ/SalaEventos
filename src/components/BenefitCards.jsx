export function BenefitCards({ emoji, title, description, className }) {
    return (
        <div className={`benefit ${className || ""}`}>
            <div className="benefit-icon">{emoji}</div>

            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}
