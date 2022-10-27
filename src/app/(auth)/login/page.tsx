import { GoogleLogo, GTNLogo } from "common/assets";
import { classNames } from "common/utils";
import Link from "next/link";

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center px-10">
      <div className="flex w-full max-w-[400px] flex-col items-center gap-y-8 rounded-md border bg-white p-10">
        <GTNLogo />

        <div className="font-bold">{`~ 管理者用管理画面 ~`}</div>
        <Link
          prefetch={false}
          href="/api/auth/login"
          className={classNames(
            "flex w-full items-center gap-x-10 rounded-sm bg-[#4285f4] p-[1px]"
          )}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-white">
            <GoogleLogo />
          </div>
          <div className="font-medium text-white">{`Googleでログインする`}</div>
        </Link>
        <Link
          prefetch={false}
          href="/api/auth/login"
          className="link"
        >{`アカウント発行を希望の方へ`}</Link>
      </div>
    </div>
  );
};
export default LoginPage;
