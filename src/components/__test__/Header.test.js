import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("Logo Should load on rendering header", () => { 
    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    const logo = header.getByTestId("logo");

    expect(logo.src).toBe("https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg");
 });

 test("The Status should be Green and Online", () => { 
    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    const status = header.getByTestId("status");

    expect(status.innerHTML).toBe("Online");
 });


 test("Initial Cart items should be 0", () => { 
    const header=render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </StaticRouter>
    );

    const cartItems = header.getByTestId("cartItems");

    expect(cartItems.innerHTML).toBe("Cart Items - 0");
 });