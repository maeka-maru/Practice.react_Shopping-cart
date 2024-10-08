import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const quantity: number = 2
    return (
        <Card className="h-100">
            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{ objectFit: 'cover' }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title
                    className="d-flex justify-content-between align-items-baseline mb-4"
                >
                    <span className="fs-2">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100">
                            Add to cart
                        </Button>
                    ) : (
                            <div className="d-flex flex-column align-items-center " style={{gap: '1rem'}}>
                                <div className="d-flex flex-row align-items-center justify-content-center " style={{gap: '1rem'}}>
                                    <Button> - </Button>
                                    <div>
                                        <span className="fs-4">{quantity}</span> in cart
                                    </div>
                                    <Button> + </Button>
                                </div>
                                <div>
                                    <Button variant="danger" size="sm">
                                        Remove
                                    </Button>
                                </div>
                            </div>
                    ) }
                </div>
            </Card.Body>
        </Card>
    )
}