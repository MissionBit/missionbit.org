import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import IndigoButton from "components/IndigoButton";
import useScript from "react-script-hook";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const EVENT_HREF =
  "https://www.eventbrite.com/e/mission-bit-4th-annual-virtual-gala-tickets-118229304031";
const EVENT_ID = "118229304031";

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
      }): void;
    };
  }
}

const BuyGalaTicket: React.FC<{ className?: string }> = ({ className }) => {
  const id = `eventbrite-widget-modal-trigger-${EVENT_ID}`;
  const [loading, error] = useScript({
    src: "https://www.eventbrite.com/static/widgets/eb_widgets.js",
    checkForExisting: true,
  });
  const [success, setSuccess] = useState(false);
  const scriptEnabled = !loading && !error && !!window.EBWidgets;
  useEffect(() => {
    if (scriptEnabled) {
      window.EBWidgets?.createWidget({
        widgetType: "checkout",
        eventId: "118229304031",
        modal: true,
        modalTriggerElementId: "eventbrite-widget-modal-trigger-118229304031",
        onOrderComplete: (result) => {
          console.log({ onOrderComplete: result });
          setSuccess(true);
        },
      });
    }
  }, [scriptEnabled]);
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
        id={id}
        rel="noopener noreferrer"
        target="_blank"
        href={EVENT_HREF}
        onClick={handleClick}
      >
        Buy Ticket
      </IndigoButton>
      <Snackbar open={success} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Thank you! We look forward to having you attend our first virtual
          gala.
        </Alert>
      </Snackbar>
    </>
  );
};

export default BuyGalaTicket;
