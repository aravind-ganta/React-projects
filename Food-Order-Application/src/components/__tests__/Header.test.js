import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";


test("Logo should load on rendering header", () => {
  // Load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  console.log(header);

  const logo= header.getAllByTestId("logo")
  console.log(logo[0]);

  expect(logo[0].src).toBe("http://localhost/dummy.png");
  // Checkmif logo loaded
});

test("Online Status should be Online on rendering header", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    console.log(header);
  
    const onlineStatus= header.getByTestId("online-status")
  
    expect(onlineStatus.innerHTML).toBe("Online");
    // Checkmif logo loaded
  });

  test("Cart should have zero items", () => {
    // Load Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    console.log(header);
  
    const cart= header.getByTestId("cart")
  
    expect(cart.innerHTML).toBe("Cart-0");
    // Checkmif logo loaded
  });
  
