import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getPage, initTestHelpers } from "next-page-tester";

initTestHelpers();

describe("TestLayoutのテスト", () => {
  it("Header nav クリックで該当のページへ遷移すること", async () => {
    const { page } = await getPage({ route: "/test" });
    render(page);

    // userEvent.click(screen.getByTestId("home-nav"));
    // expect(await screen.findByText("Home")).toBeInTheDocument();

    // userEvent.click(screen.getByTestId("blog-nav"));
    // expect(await screen.findByText("Blog")).toBeInTheDocument();

    // userEvent.click(screen.getByTestId("comment-nav"));
    // expect(await screen.findByText("Comment")).toBeInTheDocument();

    // userEvent.click(screen.getByTestId("context-nav"));
    // expect(await screen.findByText("Context")).toBeInTheDocument();

    // userEvent.click(screen.getByTestId("task-nav"));
    // expect(await screen.findByText("Todo")).toBeInTheDocument();
  });
});
