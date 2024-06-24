import { Button, Form } from "react-bootstrap";

const Contacto = () => {
  return (
    <Form className="text-center">
      <h1 className="mt-5">Cuentanos, ¿en que te podemos ayudar?</h1>
      <Form.Group className="mx-5" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group
        className="mb-3 mx-5"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="danger" type="submit">
        Enviar
      </Button>
    </Form>
  );
};
export default Contacto;
