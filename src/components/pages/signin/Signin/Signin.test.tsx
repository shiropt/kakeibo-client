import { render, screen } from "@testing-library/react";
import { getPage } from "next-page-tester";
import userEvent from "@testing-library/user-event";

beforeEach(async () => {
  const { page } = await getPage({ route: "/signin" });
  render(page);
});

describe("Signinページ表示テスト", () => {
  it("タイトルに「ログイン」が表示されていること", () => {
    expect(screen.getByText("ログイン")).toBeInTheDocument();
  });

  it("「メールアドレスでログイン」ボタンが表示されていること", () => {
    expect(screen.getByText("メールアドレスでログイン")).toBeInTheDocument();
  });

  it("「Googleでログイン」ボタンが表示されていること", () => {
    expect(screen.getByText("Googleでログイン")).toBeInTheDocument();
  });

  it("「アカウントをお持ちでない方」が表示されていること", () => {
    expect(screen.getByText("アカウントをお持ちでない方")).toBeInTheDocument();
  });

  it("「会員登録ボタン」が表示されていること", () => {
    expect(screen.getByText("会員登録")).toBeInTheDocument();
  });
});

describe("Signinページ ボタン押下テスト", () => {
  it("メールアドレスでログインボタンクリックでEメールでログインページへ遷移すること", async () => {
    await userEvent.click(screen.getByText("メールアドレスでログイン"));
    expect(await screen.findByTestId("email-signin-title")).toBeInTheDocument();
  });

  it("GoogleでログインボタンクリックでGoogleでログインページへ遷移すること", async () => {
    await userEvent.click(screen.getByText("Googleでログイン"));
    // expect(await screen.findByTestId("email-signin-title")).toBeInTheDocument();
  });

  it("会員登録ボタンクリックで会員登録ページへ遷移すること", async () => {
    await userEvent.click(screen.getByText("会員登録"));
    expect(await screen.findByTestId("signup-title")).toBeInTheDocument();
  });
});
