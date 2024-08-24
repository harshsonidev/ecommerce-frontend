import React from "react";
import { Separator } from "../ui/separator";

export default function SectionTitle({ title = "", description = "" }) {
  return (
    <>
      {title && (
        <div>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
              {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
              )}
            </div>
          </div>
          <Separator className="my-4" />
        </div>
      )}
    </>
  );
}
