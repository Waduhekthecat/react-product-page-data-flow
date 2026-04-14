function ProductCard({ product }) {
    const { name, media, price, description, tagline, highlights } = product

    const primaryMedia =
        media?.find((item) => item.primary) || media?.[0]

    const imageSrc = primaryMedia?.src
    const imageAlt = primaryMedia?.alt || name

    return (
        <article className="product-card">
            <div className="product-card_image-wrapper">
                {imageSrc && (
                    <img
                        className="product-card_image"
                        src={imageSrc}
                        alt={imageAlt}
                    />
                )}
            </div>
            <div className="product-card_content">
                <p className="product-card_tagline">{tagline}</p>
                <h2 className="product-card_title">{name}</h2>
                <p className="product-card_price">${price?.toFixed ? price.toFixed(2) : price}</p>
                <p className="product-card_description">{description}</p>

                <ul className="product-card_highlights">
                    {highlights?.map((highlight, index) => (
                        <li key={index}>
                            {typeof highlight === "string"
                                ? highlight
                                : highlight.label}
                        </li>
                    ))}
                </ul>

                <button className="product-card_button" type="button">
                    View Product
                </button>
            </div>
        </article>
    )
}

export default ProductCard