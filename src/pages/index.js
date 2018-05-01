import React from "react"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import styles from "./index.module.css";

export default () =>
  <div className={styles.container}>
    <div className={styles.top}>
      <OutboundLink href="mailto:contact@helloalta.com"><h1>helloalta</h1></OutboundLink>
    </div>
    <div className={styles.middle}>
      <p>We are a tech and design duo creating mobile and web apps that we love to use. Makers of <OutboundLink href="https://itunes.apple.com/us/app/billy-currency-converter/id1311724635" target="_blank">Billy Currency Converter</OutboundLink> and <OutboundLink href="https://itunes.apple.com/us/app/movemeapp/id1108469133" target="_blank">Move Me App</OutboundLink>.</p>
    </div>
    <div className={styles.bottom}>
      <OutboundLink href="mailto:contact@helloalta.com">contact@helloalta.com</OutboundLink>
    </div>
  </div >