import { Form } from "react-router-dom";
import Card from "../UI/Card.js";
import classes from "./QuoteForm.module.css";

export default function QuoteForm() {
  return (
    <Card>
      <Form method="post" className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="">Author</label>
          <input name="author" type="" required />
          <label htmlFor=" ">Text</label>
          <input name="text" type="text" required />
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </Form>
    </Card>
  );
}
