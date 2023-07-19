import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from "../Body";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";
import { RESTRAUNT_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(RESTRAUNT_DATA);
        },
    });
});

test("Shimmer should be load First", () => { 
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    const shimmer = body.getByTestId("shimmer");

    expect(shimmer).toBeInTheDocument();

});


test("Loading Search Button", async () => { 
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    
    await waitFor(()=>expect(body.getByTestId("search-btn")));

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(15);

});

test("Giving the String(food) in the search input", async () => { 
    const body=render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    
    await waitFor(()=>expect(body.getByTestId("search-btn")));

    const input = body.getByTestId("search-input");

    fireEvent.change(input,{target:{
        value:"food",
        },  
    });

    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);

    const resList = body.getByTestId("res-list");

    expect(resList.children.length).toBe(4);

});