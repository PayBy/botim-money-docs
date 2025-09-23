import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import "@site/src/css/antd.variable.css";
import Layout from "@theme/Layout";
import { Button, ConfigProvider } from "antd";
import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

ConfigProvider.config({
  theme: {
    primaryColor: "#3C8404",
  },
});
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title hero--primary", styles.title)}>{siteConfig.title}</h1>
        <p className={clsx("hero__subtitle", styles.tagline)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Button ghost type="primary" size="large" style={{ borderColor: "#3C8404", color: "#3C8404" }}>
            <Link to="/docs/createorder">API reference</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
