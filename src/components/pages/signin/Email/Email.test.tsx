import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { EmailSignin } from "./Email";
import { getPage } from "next-page-tester";
import userEvent from "@testing-library/user-event";

beforeEach(async () => {
  const { page } = await getPage({ route: "/signin/email" });
  render(page);
});

describe("Eメールでログインページ表示テスト", () => {
  it("タイトルに「ログイン」が表示されていること", () => {
    expect(screen.getByTestId("email-signin-title").textContent).toEqual("ログイン");
  });

  it("メールアドレスのラベルが表示されていること", () => {
    expect(screen.getByText("メールアドレス")).toBeInTheDocument();
  });

  it("メールアドレス入力フォームが表示されていること", () => {
    expect(screen.getByTestId("mail-input")).toBeInTheDocument();
  });

  it("パスワードのラベルが表示されていること", () => {
    expect(screen.getByText("パスワード")).toBeInTheDocument();
  });

  it("パスワード入力フォームが表示されていること", () => {
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
  });

  it("ログインボタンが表示されていること", () => {
    expect(screen.getByRole("button").textContent).toEqual("ログイン");
  });

  it("パスワードを忘れた方はこちら >のリンクが表示されていること", () => {
    expect(screen.getByText("パスワードを忘れた方はこちら >")).toBeInTheDocument();
  });
});

describe("バリデーションテスト", () => {
  it("入力フォーム未入力でバリデーションが発火すること", async () => {
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText("メールアドレスは必須です")).toBeInTheDocument();
    expect(
      await screen.findByText("パスワードは6文字以上の半角英数字を組み合わせて入力してください")
    ).toBeInTheDocument();
  });

  it("入力フォーム未入力でバリデーションが発火すること", async () => {
    userEvent.type(screen.getByTestId("mail-input"), "sample@co.jp");
    userEvent.type(screen.getByTestId("password-input"), "aaaa3a88g9a");

    userEvent.click(screen.getByRole("button"));
    waitFor(() => {
      screen.debug();
    });

    expect(await screen.findByText("メールアドレスの形式が正しくありません")).toBeInTheDocument();
    expect(
      await screen.findByText("パスワードは6文字以上の半角英数字を組み合わせて入力してください")
    ).toBeInTheDocument();
  });
});
