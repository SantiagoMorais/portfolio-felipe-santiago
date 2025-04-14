import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { whatsAppLink } from "@/utils/whatsApp-link";

export const WhatsAppButton = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="size-fit rounded-full opacity-60 hover:opacity-100 md:right-10 md:bottom-10"
          size="icon"
          variant="secondary"
          asChild
        >
          <a href={whatsAppLink} className="p-3" target="_blank">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="size-full text-4xl text-white"
            />
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>WhatsApp</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
