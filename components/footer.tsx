"use client";

import Link from "next/link";
import SocialsLine from "./socials-line";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useTranslation } from "react-i18next";

const links = [
  {
    tk: "privacyPolicy",
    title: "Private Policy",
    link: "/private-policy",
  },
  {
    tk: "termsAndConditions",
    title: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    tk: "cookiePolicy",
    title: "Cookie Policy",
    link: "/cookie-policy",
  },
  {
    tk: "license",
    title: "License",
    link: "/licence",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation()

  return (
    <footer className="py-10 bg-footer text-footer-foreground">
      <div className="container flex gap-20 justify-between rounded-lg">
        <div className="flex flex-col justify-between gap-5">
          <div>
            <Link href="/">
              <img src="/assets/logo/unicorp-white.svg" alt="logo" />
            </Link>
            <p className="mt-2 text-[#878787] text-sm">
              OOO UNICORP - {currentYear}
            </p>
          </div>
          <SocialsLine />
        </div>

        <div>
          <h1 className="text-2xl font-medium mb-2.5 text-white">{t('footer.navigation.title')}</h1>
          <div className="flex flex-col gap-2.5">
            {links.map((link) => (
              <Link
                className="text-base font-normal"
                href={link.link}
                key={link.tk}
              >
                {t(`footer.navigation.${link.tk}`)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-medium mb-2.5 text-white">{t('common.contact')}</h1>
          <div className="flex flex-col gap-2.5">
            <a className="hover:underline" href="tel:+998771516633">
              +998 77 151 66 33
            </a>
            <a href="mailto:support@unicorp.uz" className="hover:underline">
              support@unicorp.uz
            </a>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-medium mb-2.5 text-white">{t('footer.location')}</h1>
          <div className="flex flex-col gap-2.5">
            <HoverCard>
              <HoverCardTrigger
                target="blank"
                className="hover:underline hover:bg-background duration-200 box-border px-2 rounded-md -ml-2"
                href="https://maps.google.com/?q=Uzbekistan"
              >
                Tashkent. Mirzo Ulugbek. Qorabog 12
              </HoverCardTrigger>
              <HoverCardContent className="p-1" side="top">
                <iframe
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.249242791448!2d69.3065537768514!3d41.32519327130801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef554e0e30ac5%3A0x63dea647b9d813be!2sNuovo%20Boutique%20Hotel!5e0!3m2!1suz!2s&output=embed&z=15&disable_default_ui=true"
                  width="100%"
                  height="300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
