import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "../../../styles/molecule/footer.module.scss";
import { BASE_IMAGE_URL, BASE_URL } from "../../config/env";
import SocialMedia from "../atoms/socialMedia";
import apps, { downloadsItemType } from "../../config/apps";

interface FooterProps {}

type FooterLink = {
  label: string;
  url?: string;
  onClick?: () => void;
};

const Footer: FC<FooterProps> = () => {
  const footerLinks: FooterLink[][] = [
    [
      { label: "Tentang Bareksa", url: `${BASE_URL}/tentangkami` },
      { label: "Pusat Bantuan", url: `${BASE_URL}/faq` },
      { label: "Kontak Kami", url: `${BASE_URL}/kontak` },
      { label: "Syarat & Ketentuan", url: `${BASE_URL}/syaratketentuan` },
      { label: "Kebijakan Privasi", url: `${BASE_URL}/kebijakan-privasi` },
    ],
    [
      { label: "Berita & Analisis", url: `/` },
      { label: "Kamus Investasi", url: `${BASE_URL}/kamus` },
      { label: "Bareksa Community", onClick() {} },
      { label: "Karir", url: `${BASE_URL}/karir` },
    ],
  ];
  const downloads: { [index: string]: downloadsItemType } = apps.downloads;
  return (
    <footer className={styles.footer}>
      <section>
        <div>
          <Link href={BASE_URL || "/"}>
            <Image
              src={`${BASE_IMAGE_URL}/logo/1.0.0/logo.svg`}
              width={148.3}
              height={40}
              alt="Bareksa"
            />
          </Link>
          <h6 className="b-typography__subtitle-1--reguler b-color-text__onsurface--high-emphasis">
            Ikuti Kami
          </h6>
          <SocialMedia size={36} />
        </div>
        {footerLinks.map((footerLink, idx) => (
          <div key={`footer-link-${idx}`}>
            {footerLink.map(({ label, url, onClick }) =>
              url ? (
                <Link
                  key={url}
                  href={url || ""}
                  onClick={onClick}
                  className="b-typography__subtitle-2--medium b-color-text__onsurface--high-emphasis"
                >
                  {label}
                </Link>
              ) : (
                <button
                  key={label}
                  onClick={onClick}
                  className="b-typography__subtitle-2--medium b-color-text__onsurface--high-emphasis"
                >
                  {label}
                </button>
              )
            )}
          </div>
        ))}
        <div>
          {Object.keys(downloads).map((key) => {
            const appsItem = downloads[key];
            return (
              <Link key={appsItem.url} href={appsItem.url} target="_blank">
                <Image
                  src={appsItem.imageURL}
                  alt={`aplikasi ${key}`}
                  height={40}
                  width={135}
                />
              </Link>
            );
          })}
        </div>
      </section>
      <span className="b-typography__caption b-color-text__onsurface--disabled">
        Copyright 2020 © PT. Bareksa Portal Investasi.
      </span>
    </footer>
  );
};

export default Footer;
