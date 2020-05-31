import { NextPage } from "next";
import * as React from "react";
import { Layout, getStaticProps, LayoutStaticProps } from "components/Layout";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  indent: {
    paddingLeft: theme.spacing(2),
  },
}));

const Page: NextPage<LayoutStaticProps> = (props) => {
  const classes = useStyles();
  return (
    <Layout {...props} title="Mission Bit – Windows Laptops">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Container component="main">
        <h1>For existing MB laptops:</h1>
        <ol>
          <li>Press Windows+X and select "Windows PowerShell (Admin)"</li>
          <li>
            Type "<code>choco upgrade all</code>" and press enter.
          </li>
          <li>
            If there are any notifications for system updates, install the
            updates.
          </li>
          <li>Power off and clean the laptop with a microfiber cloth.</li>
        </ol>

        <h1>For NEW laptops:</h1>
        <h2>1. Install and activate Windows</h2>
        <div className={classes.indent}>
          <ol>
            <li>
              Install Windows 10 using flash drives with Autounattend (orange
              and pink flash drives). To do so:
            </li>
            <ol type="a">
              <li>Plug in the laptop to charge.</li>
              <li>
                Plug in the flash drive to a USB port and turn on computer.
              </li>
              <li>
                Press F12 repeatedly until you either see the Windows logo or
                the BIOS menu. If you see the menu, select the option to boot
                from USB.
              </li>
              <li>Wait.</li>
              <li>
                Log in with the credentials: username: missionbit password:
                missionbit
              </li>
              <li>Safely remove flash drive.</li>
              <li>
                Connect to the wi-fi. “The Vault (Members)” network, password:
                insidethevault123
              </li>
              <li>
                Press Windows and type "This". Right-click "This PC", select
                Properties, and click Activate Windows &gt;&gt; Change product
                key. The product key is on a sticker underneath the laptop. If
                you can’t find it, keep power cable connected, remove battery,
                and look for the product key under battery slot. Type in the
                product key, click next &gt;&gt; activate.
              </li>
            </ol>
          </ol>
        </div>
        <h2>2. Install the required software</h2>
        <div className={classes.indent}>
          <ol>
            <li>Press Windows+X and select "Windows PowerShell (Admin)"</li>
            <li>Copy and paste the following:</li>
            <code>
              iex ((New-Object
              System.Net.WebClient).DownloadString('https://www.missionbit.org/laptop/windows/setup.ps1'))
            </code>
          </ol>
        </div>
        <p>
          Also check for Windows updates. You can do that by pressing Windows
          and typing "updates." Select the option that says "Check for updates."
          This step can take a long time depending on the computer. Just make
          sure to leave it plugged in and don't turn off the computer until the
          updates are all installed.
        </p>
        <h2>3. Power off and clean</h2>
        <div className={classes.indent}>
          <ol>
            <li>Close any open apps (e.g. GitHub Desktop).</li>
            <li>Shut down Windows.</li>
            <li>Clean the laptop with a microfiber cloth.</li>
          </ol>
        </div>
      </Container>
    </Layout>
  );
};

export { getStaticProps };
export default Page;
