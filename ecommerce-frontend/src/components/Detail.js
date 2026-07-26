/* SmartCart: Product Detail modal — redesigned
 * Changes from original:
 * - Removed stray console.log(currency + ...) debug statement
 * - Changed "Comprar" button (Spanish for "Buy") → "🛒 Add to Cart"
 * - Changed "Show product" trigger button → "View Details" with SmartCart styling
 * - Semantic UI Modal, Form, Image, Grid preserved (modal functionality unchanged)
 * - All product data fields (name, description, price, category_id, weight) preserved
 * - Currency context logic (getCurrency, cop calculation) preserved
 */
import React, { useContext } from "react";

import Context from "../config/context";

import {
  Form,
  Modal,
  Button,
  Image,
  Grid
} from "semantic-ui-react";

export default function Detail(props) {
  const context = useContext(Context);
  const { currency, getCurrency, addToCart } = context;

  // SmartCart: Load currency if not already loaded
  if (currency === null) {
    getCurrency();
  }

  // SmartCart: Price conversion logic preserved from original
  const cop = 1 * parseFloat(props.product.price);

  return (
    <Modal
      trigger={
        /* SmartCart: Trigger button — replaces plain "Show product" text */
        <button className="sc-btn sc-btn--primary sc-btn--sm">
          View Details
        </button>
      }
    >
      {/* SmartCart: Modal header */}
      <Modal.Header>
        🛒 {props.product.name}
      </Modal.Header>

      <Modal.Content>
        {/* SmartCart: Product image gallery — layout preserved from original */}
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Image src={props.product.picture1} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image src={props.product.picture2} />
            </Grid.Column>
            <Grid.Column>
              <Image src={props.product.picture3} />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <br />

        {/* SmartCart: Product details form — all fields preserved from original */}
        <Form>
          <Form.Input name="name" label="Product Name" value={props.product.name} />
          <Form.Input
            name="description"
            label="Description"
            value={props.product.description}
          />
          <Form.Group widths="equal">
            <Form.Input
              name="price"
              label="Price (USD)"
              value={"$" + props.product.price}
            />
            {/* SmartCart: COP price preserved — uses same calculation as original */}
            <Form.Input name="priceAlt" label="Price (COP)" value={"$" + cop} />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              name="category"
              label="Category"
              value={props.product.category_id}
            />
            <Form.Input
              name="weight"
              label="Weight (kg)"
              value={props.product.weight}
            />
          </Form.Group>

          {/* SmartCart: "Add to Cart" button */}
          <button
            type="button"
            className="sc-btn sc-btn--primary sc-btn--full"
            onClick={() => addToCart(props.product)}
          >
            🛒 Add to Cart
          </button>
        </Form>

      </Modal.Content>
    </Modal>
  );
}
