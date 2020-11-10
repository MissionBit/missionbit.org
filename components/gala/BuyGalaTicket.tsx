import * as React from "react";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import IndigoButton from "components/IndigoButton";
import useScript from "react-script-hook";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { eventId, registerUrl } from "./Metadata";

import { useRouter } from "next/router";

type ExtraParams = readonly {
  readonly name: string;
  readonly value: string;
}[];

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
        extraParams?: ExtraParams;
      }): void;
    };
  }
}

let uniqueId = 0;
const getUniqueId = () => uniqueId++;

function useModalTriggerElementId(): string {
  const idRef = useRef<null | number>(null);
  if (idRef.current === null) {
    idRef.current = getUniqueId();
  }
  return `eventbrite-widget-modal-trigger-${eventId}-${idRef.current}`;
}

function onlyString(value: string | string[] | undefined): string | undefined {
  return value && typeof value === "string" ? value : undefined;
}

function addExtraParams(url: string, params: ExtraParams) {
  const qs = params
    .map((p) => `${encodeURIComponent(p.name)}=${encodeURIComponent(p.value)}`)
    .join("&");
  return qs ? `${url}?${qs}` : url;
}

const BuyGalaTicket: React.FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();
  const [loading, error] = useScript({
    src: "https://www.eventbrite.com/static/widgets/eb_widgets.js",
    checkForExisting: true,
  });
  const [success, setSuccess] = useState(false);
  const discount = onlyString(router.query.discount);
  const aff = onlyString(router.query.aff);
  const scriptEnabled = !loading && !error && !!window.EBWidgets;
  const modalTriggerElementId = useModalTriggerElementId();
  const extraParams = useMemo(
    () => [
      ...(discount ? [{ name: "discount", value: discount }] : []),
      ...(aff ? [{ name: "aff", value: aff }] : []),
    ],
    [discount, aff]
  );
  useEffect(() => {
    if (scriptEnabled) {
      window.EBWidgets?.createWidget({
        widgetType: "checkout",
        eventId,
        modal: true,
        modalTriggerElementId,
        promoCode: discount,
        extraParams,
        onOrderComplete: (result) => {
          console.log({ onOrderComplete: result });
          setSuccess(true);
        },
      });
    }
  }, [modalTriggerElementId, scriptEnabled, discount, extraParams]);
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
        href={addExtraParams(registerUrl, extraParams)}
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
