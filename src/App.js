import Container from "react-bootstrap/Container";
import OderEntry from "./Pages/entry/OrderEntry";
import OrderDetailsProvider from "./contexts/OrderDetails";

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/* summary page and entry page need provider */}
        <OderEntry />
      </OrderDetailsProvider>
      {/* confirmation page does not need provider */}
    </Container>
  );
}

export default App;
