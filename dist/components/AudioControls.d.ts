import { type ReactElement } from "react";
interface Props {
    isPlaying: boolean;
    allowSkip: boolean;
    onPlayClick: () => void;
    onPauseClick: () => void;
    onSkipForwardClick: () => void;
    onSkipBackwardClick: () => void;
}
declare const AudioControls: ({ isPlaying, allowSkip, onPlayClick, onPauseClick, onSkipForwardClick, onSkipBackwardClick, }: Props) => ReactElement;
export default AudioControls;
