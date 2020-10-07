import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import IndigoButton from "components/IndigoButton";
import useScript from "react-script-hook";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { eventId, registerUrl } from "./Metadata";
import Link from "@material-ui/core/Link";
import { useRouter } from "next/router";

declare global {
  interface Window {
    EBWidgets?: {
      createWidget(opts: {
        widgetType: "checkout";
        eventId: string;
        modal: boolean;
        modalTriggerElementId: string;
        onOrderComplete: (result: { orderId: string }) => void;
        iFrameContainerId?: string;
        iFrameContainerHeight?: number;
        iFrameAutoAdapt?: number;
        promoCode?: string;
        extraParams?: { [k: string]: string };
      }): void;
    };
  }
}

const modalTriggerElementId = `eventbrite-widget-modal-trigger-${eventId}`;

function onlyString(value: string | string[] | undefined): string | undefined {
  return value && typeof value === "string" ? value : undefined;
}

function addDiscount(url: string, discount: string | undefined) {
  return discount ? `${url}?discount=${encodeURIComponent(discount)}` : url;
}

const BuyGalaTicket: React.FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();
  const [loading, error] = useScript({
    src: "https://www.eventbrite.com/static/widgets/eb_widgets.js",
    checkForExisting: true,
  });
  const [success, setSuccess] = useState(false);
  const discount = onlyString(router.query.discount);
  const scriptEnabled = !loading && !error && !!window.EBWidgets;
  useEffect(() => {
    if (scriptEnabled) {
      window.EBWidgets?.createWidget({
        widgetType: "checkout",
        eventId,
        modal: true,
        modalTriggerElementId,
        promoCode: discount,
        onOrderComplete: (result) => {
          console.log({ onOrderComplete: result });
          setSuccess(true);
        },
      });
    }
  }, [scriptEnabled, discount]);
  const handleClose = useCallback(() => {
    setSuccess(false);
  }, []);
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (scriptEnabled) {
        event.preventDefault();
      }
    },
    [scriptEnabled]
  );
  return (
    <>
      <IndigoButton
        className={className}
        variant="contained"
        size="large"
        id={modalTriggerElementId}
        rel="noopener noreferrer"
        target="_blank"
        href={addDiscount(registerUrl, discount)}
        onClick={handleClick}
      >
        Buy Ticket
      </IndigoButton>
      <Snackbar open={success} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Thank you! We look forward to having you attend our first virtual
          gala. Interested in adding a wine tasting? Check out the packages from{" "}
          <Link
            href="https://www.voluptuarywine.com/mission-bit"
            rel="noopener noreferrer"
            target="_blank"
          >
            Voluptuary &amp; Lucid Wines
          </Link>
          , they'll even match any donation you make with your order!
        </Alert>
      </Snackbar>
    </>
  );
};

export default BuyGalaTicket;
