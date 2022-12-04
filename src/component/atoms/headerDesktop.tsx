import { FC, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "@styles/atoms/headerDesktop.module.scss";
const RegisterDialog = dynamic(
  () => import("@component/molecule/registerDialog"),
  {
    ssr: false,
  }
);
import { BASE_IMAGE_URL, BASE_URL } from "@config/env";

const HeaderDesktop: FC = () => {
  const links: { url: string; label: string }[] = [
    { url: `${BASE_URL}/reksadana`, label: "Reksadana" },
    { url: `${BASE_URL}/robo-advisor`, label: "Robo Advisor" },
    { url: `${BASE_URL}/sbn`, label: "SBN" },
    { url: `${BASE_URL}/bareksaemas`, label: "Emas" },
    { url: `${BASE_URL}/umroh`, label: "Umroh" },
    { url: `${BASE_URL}/prioritas`, label: "Prioritas" },
    { url: `${BASE_URL}/bisnis`, label: "Bisnis" },
    { url: `${BASE_URL}/id/data`, label: "Data" },
    { url: `/`, label: "Berita" },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <header className={`${styles.header} b-color-bg__surface--light`}>
        <div>
          <Link href={BASE_URL || "/"}>
            <Image
              src={`${BASE_IMAGE_URL}/logo/1.0.0/logo.svg`}
              width={157.5}
              height={42}
              alt="Bareksa"
            />
          </Link>
          <nav>
            {links.map(({ url, label }) => (
              <Link
                key={url}
                href={url}
                className={`b-typography__subtitle-3--medium ${
                  url === "/"
                    ? "b-color-text__primary--800"
                    : "b-color-text__onsurface--high-emphasis"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <Link
            href={`${BASE_URL}/id/member/login`}
            className="b-typography__button b-color-text__onsurface--medium-emphasis"
          >
            Login
          </Link>
          <button
            onClick={() => setIsDialogOpen(true)}
            className="b-typography__button b-color-text__onsurface--high-emphasis b-color-bg__primary--500"
          >
            Daftar
          </button>
        </div>
      </header>

      <RegisterDialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default HeaderDesktop;
