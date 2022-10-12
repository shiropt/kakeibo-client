import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getPage, initTestHelpers } from "next-page-tester";
import { Layout } from "./Layout";
initTestHelpers();

describe("Layoutのテスト", () => {
  it("初期表示でliteテーマアイコンであること", async () => {
    render(<Layout>main</Layout>);
    expect(screen.getByTestId("moon")).toBeInTheDocument();
  });
  // it("アイコンクリックでテーマが切り替わること", async () => {
  //   const { page } = await getPage({ route: "/" });
  //   render(page);
  //   const icon = screen.getByTestId("icon");
  //   userEvent.click(icon);
  //   expect(await screen.findByTestId("moon-off")).toBeInTheDocument();
  //   userEvent.click(icon);
  //   expect(await screen.findByTestId("moon")).toBeInTheDocument();
  // });
});
