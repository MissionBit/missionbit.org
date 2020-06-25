# Mission Bit Website

## Setup

* Recommended: Set up [Visual Studio Code](#visual-studio-code-setup)
* Install [Node.js](https://nodejs.org/en/download/)
* Check out a local copy of this repository (e.g. with [Github Desktop](https://desktop.github.com/))
* Run `npm install` from the Terminal (or [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal))

## Usage

These are the Terminal commands to work with the site:

Update the dependencies (make sure to do this if package.json has changed, often after a git pull):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Fix any formatting or lint issues:

```bash
npm run fix
```

Run a full build of the site:

```bash
npm run build
```

Run the static export of the site:

```bash
npm run export
```

## Visual Studio Code Setup

[Visual Studio Code](https://code.visualstudio.com/) is the editor we
recommend for working on this site.

Download Visual Studio Code from
[code.visualstudio.com](https://code.visualstudio.com/)

For each of the following commands, launch VS Code Quick Open (⌘+P),
paste the command, and press enter:

```vscode
ext install vscode-styled-jsx
ext install vscode-styled-jsx-languageserver
ext install msjsdiag.debugger-for-chrome
ext install editorconfig.editorconfig
ext install dbaeumer.vscode-eslint
ext install esbenp.prettier-vscode
ext install bungcip.better-toml
```

## Coding Conventions

This site is built with the [Next.js](https://nextjs.org/) framework in
[Typescript](https://www.typescriptlang.org/) using
[React](https://reactjs.org/).

The user interface is primarily built using components from
[Material-UI](https://material-ui.com/) and we use Material-UI's styling
solution [@material-ui/styles](https://material-ui.com/styles/basics/)
to manage CSS.

Code formatting and style is managed automatically with
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/).
This is automatically run before each git commit by
[husky](https://github.com/typicode/husky).

Timestamps are represented in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601)
format, such as
`"2020-06-20T08:00-07:00"` for June 20, 2020 at 8am Pacific Daylight Time or
`"2020-11-12T18:00-08:00"` for November 12 at 6pm Pacific Standard Time.

As we are deployed on [Netlify](https://www.netlify.com/), the site is built
in a way such that it can be statically rendered statically as plain HTML
with `next export`, there are no routes that depend on any server-side code.

## Asset Conventions

PDFs, zip files, and other data formats that are not displayed inline on
the web are stored in the public folder. These URLs map directly to the website, e.g.
`public/favicon.ico` is available from `https://www.missionbit.org/favicon.ico`.

Icons and user interface elements should be in SVG format. It's recommended
to embed these as React components as that makes it possible to apply styles
to them from the document. One example would be the expand button we use on FAQs,
if it was not an inline SVG we would have to have a separate file for each color.
See [components/icons/](https://github.com/MissionBit/missionbit.org/tree/master/components/icons)
for examples of this technique.

Fonts should be hosted locally in `woff` and `woff2` formats. The files should
be stored in the
[public/fonts/](https://github.com/MissionBit/missionbit.org/tree/master/public/fonts)
folder, the styles can be added to site using a component
[components/fonts/](https://github.com/MissionBit/missionbit.org/tree/master/components/fonts)
that is referenced from the main
[Layout](https://github.com/MissionBit/missionbit.org/tree/master/components/Layout.tsx)
component. Take care to only include font weights that are in use on the site, and choose
the files carefully as fonts are large. Generally we only depend on the Latin character set
so we may use fonts that only include those glyphs.

For vector content (diagrams, logos, etc.), it's preferable to use an SVG
formatted file. These are generally smaller than their bitmap counterpart
(JPG, PNG) and are scalable up or down without loss of quality. If drawn
by hand or generated by processing a bitmap image, the paths should be
simplified first using Illustrator or a similar tool. See
[`public/images/`](https://github.com/MissionBit/missionbit.org/tree/master/public/images)
for examples of these. Generally the images are in a folder with the same
name as the page it is associated with.

Other images (JPG, PNG) such as photos on the site are passed through
[next-optimized-images](https://github.com/cyrilwanner/next-optimized-images). The source
resolution on our site is typically the highest resolution that they may be displayed.
For example, the team headshots are currently saved at 400x400, which is much smaller than
the original photos.
Ideally, we host at least two versions of each image (jpg or png, and webp) as an
optimization for modern browsers. In some cases, such as the large photos for
student testimonials, we also have multiple sizes of each image. This is a trade-off
that allows us to improve load times for users who have smaller screens.
In the future we may be able to generate these resized images automatically, but
the current next-optimized-images can resize an image or convert it to webp but not both.
See
[`public/images/`](https://github.com/MissionBit/missionbit.org/tree/master/public/images)
for examples of these. Generally the images are in a folder with the same
name as the page it is associated with.

## Commonly Updated Components

[Home](https://www.missionbit.org/):

* [components/index/Alerts.tsx](https://github.com/MissionBit/missionbit.org/tree/master/components/index/Alerts.tsx) -
  The alert displayed on the landing page. Update this whenever something interesting is happening soon.
* [components/index/Stats.tsx](https://github.com/MissionBit/missionbit.org/tree/master/components/index/Stats.tsx) -
  The statistics we show should be updated at least once per semester.
* [components/index/StudentTestimonials.tsx](https://github.com/MissionBit/missionbit.org/tree/master/components/index/StudentTestimonials.tsx) -
  If we get new student testimonials, they can be added here.
  Note that we also need images, and that the text should be kept short so that
  it does not get cropped on smaller screens.

[About](https://www.missionbit.org/about):

* [components/about/TeamData.tsx](https://github.com/MissionBit/missionbit.org/tree/master/components/about/TeamData.tsx) -
  Adding or removing team members (core, student advisory board, teachers, board) can be done here. Note that each
  member should have a corresponding photo.
* [components/about/Jobs.tsx](https://github.com/MissionBit/missionbit.org/tree/master/components/about/Jobs.tsx) -
  This lists the current job openings. We currently link to PDFs for each position.

[Programs](https://www.missionbit.org/programs):

* [components/programs/ClassInstanceData.tsx](https://github.com/MissionBit/missionbit.org/tree/master/components/programs/ClassInstanceData.tsx) -
  The data for each class and workshop. We may want to revisit the naming of these variables to be less specific to spring/summer/etc.
* [components/programs/Enroll.tsx](https://github.com/MissionBit/missionbit.org/tree/master/components/programs/Enroll.tsx) -
  There's text here that will need to change from semester to semester.
* [components/programs/Faq.tsx](https://github.com/MissionBit/missionbit.org/tree/master/components/programs/Faq.tsx) -
  The FAQs may also change from semester to semester.

[Events](https://www.missionbit.org/events):

* [components/events/index.tsx](https://github.com/MissionBit/missionbit.org/tree/master/components/events/index.tsx) -
  This page gets updated from semester to semester to reference new workshops, whenever we have events such as a demo day, and
  when we have new videos related to past events.

## Runbook

The site is deployed by Netlify for both production and PR deployment previews.

The Netlify dashboard is at
[app.netlify.com/sites/missionbit/overview](https://app.netlify.com/sites/missionbit/overview).
Contact bob@missionbit.org or cora@missionbit.org if you need access to this
team for some reason.

The deployment configuration is at
[app.netlify.com/sites/missionbit/settings/deploys](https://app.netlify.com/sites/missionbit/settings/deploys).
These environment variables are used by APIs on the site:

* `SENTRY_AUTH_TOKEN` - Sentry authorization token (for marking releases)
* `SENTRY_ORG` - Set to mission-bit
* `SENTRY_PROJECT` - Set to mission-bit
* `SENDGRID_API_KEY` - API key for sending email
* `STRIPE_PK_LIVE` - Publishable key for missionbit.org
* `STRIPE_SK_LIVE` - Secret key for missionbit.org
* `STRIPE_WEBHOOK_SIGNING_SECRET_LIVE` - Webhook signing key for missionbit.org
* `STRIPE_PK_TEST` - Publishable key for testing (PR builds)
* `STRIPE_SK_TEST` - Secret key for testing (PR builds)
* `STRIPE_WEBHOOK_SIGNING_SECRET_TEST` - Webhook signing key for testing (PR builds)

DNS is currently hosted by:

* Cloudflare (missionbit.com)
* Azure (missionbit.org)
* [Netlify](https://app.netlify.com/teams/missionbit/dns) (missionbits.com, missionbits.org)

Errors are collected with sentry.io at
[sentry.io/organizations/mission-bit/issues/?project=5269525](https://sentry.io/organizations/mission-bit/issues/?project=5269525)

Donations are processed with [Stripe](https://dashboard.stripe.com/dashboard).

In order to test the Stripe integration locally, you must set the environment
variables below. You can find their values from the netlify dashboard and from
Stripe's Developer settings while viewing test data.

You should use the `STRIPE_WEBHOOK_SIGNING_SECRET_TEST` key generated by having
[Stripe CLI](https://stripe.com/docs/stripe-cli) listen in a separate terminal
before starting the dev server:

```bash
stripe listen --forward-to=http://localhost:3000/api/webhook
```

The easiest way to ensure they are set is to create a `.env` file in this
directory with the following format
(actual key suffixes replaced by REDACTED):

```bash
STRIPE_PK_TEST=pk_test_REDACTED
STRIPE_SK_TEST=sk_test_REDACTED
STRIPE_WEBHOOK_SIGNING_SECRET_TEST=whsec_REDACTED
SENDGRID_API_KEY=REDACTED
```
