import { CustomDashedBorder } from "custom-dashed-border";
import { CSSProperties } from "react";

export const Divider: React.FC<{
  className?: string;
  vertical?: boolean;
  style?: CSSProperties;
}> = ({ className, vertical, style }) => (
  <div className={`relative ${className}`} style={style}>
    <CustomDashedBorder
      bottom={
        vertical
          ? undefined
          : { color: "#e5e7eb", stripe: 16, spacing: 6, height: 2 }
      }
      left={
        vertical
          ? { color: "#e5e7eb", stripe: 16, spacing: 6, width: 2 }
          : undefined
      }
    />
  </div>
);
