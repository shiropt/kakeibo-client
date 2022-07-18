import { render, screen } from "@testing-library/react";
import { EmailSignin } from "./Email";

describe("emailでログインページが表示されること", () => {
  it("renders a heading", () => {
    render(<EmailSignin />);
    const title = screen.getByRole("heading", {
      name: /ログイン/i,
    });
    expect(title).toBeInTheDocument();
    expect(screen.getByText("パスワードを忘れた方はこちら >")).toBeInTheDocument();
  });
});
