import { type ReactElement } from "react";
interface Props {
    current: number;
    setCurrent: (c: number) => void;
    total: number;
    showTrack?: boolean;
    showKnob?: boolean;
    trackHeight?: number;
    color?: string;
    "data-testid"?: string;
}
declare const TrackBar: ({ current, setCurrent, total, showTrack, showKnob, trackHeight, color, ...rest }: Props) => ReactElement;
export default TrackBar;
