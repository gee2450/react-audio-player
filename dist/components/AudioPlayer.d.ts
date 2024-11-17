import React from "react";
interface AudioElementNativeProps {
    /**
     * The address or URL of the a audio resource that is to be considered.
     */
    src: string;
    /**
     * Sets a flag to specify whether playback should restart after it completes. Defaults to `false`
     */
    loop?: boolean;
    /**
     * Initial volume level for the audio, minimum being `0`, maximum being `1`. Defaults to `0.75`
     */
    volume?: number;
    /**
     * Sets a flag that indicates whether the audio is muted. Defaults to `false`
     */
    muted?: boolean;
    /**
     * Sets a value that indicates whether to start playing the media automatically. Defaults to `false`
     */
    autoplay?: boolean;
    /**
     * The CORS setting for this media element. {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/crossOrigin MDN Reference}. Defaults to `null`
     */
    crossOrigin?: string;
    /**
     * Sets a value indicating what data should be preloaded, if any. Defaults to empty string
     */
    preload?: "" | "none" | "metadata" | "auto";
    /**
     * Sets the rate at which media is being played back. Defaults to `1.0`
     */
    playbackRate?: number;
}
interface AudioElementEventProps {
    onabort?: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    oncanplay?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    oncanplaythrough?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ondurationchange?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onemptied?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onended?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onerror?: OnErrorEventHandler | null;
    onloadeddata?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadedmetadata?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onloadstart?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onpause?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onplay?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onplaying?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onprogress?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onratechange?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onseeked?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onseeking?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onstalled?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onsuspend?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    ontimeupdate?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onvolumechange?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    onwaiting?: ((this: GlobalEventHandlers, ev: Event) => any) | null;
}
interface AudioPlayerProps {
    /**
     * Displays a minimal version of the audio player, with only the play/pause button, track bar and timestamp. Defaults to `false`
     */
    minimal?: boolean;
    /**
     * Width of the audio player
     */
    width: number;
    /**
     * Width of each individual bar in the visualization. Defaults to `2`
     */
    barWidth?: number;
    /**
     * Gap between each individual bar in the visualization. Defaults to `1`
     */
    gap?: number;
    /**
     * Represents whether the audio visualization (waveform) should be displayed. Defaults to `true`
     */
    visualise?: boolean;
    /**
     * Height of the visualization / trackbar area. Defaults to `75`
     */
    trackHeight?: number;
    /**
     * Background color for the audio player. Defaults to `#EFEFEF`
     */
    backgroundColor?: string;
    /**
     * Bar color for the bars in the visualization. This only applies to bars that have not currently been played
     */
    barColor?: string;
    /**
     * Bar color for the bars that have been played
     */
    barPlayedColor?: string;
    /**
     * Represents whether the skip forward/backward options should be displayed. Defaults to `true`. Not applicable when `minimal` is set to `true`
     */
    allowSkip?: boolean;
    /**
     * The number of seconds to skip forward/backward. Defaults to `5`
     */
    skipDuration?: number;
    /**
     * Represents whether to show the loop options. Defaults to `true`
     */
    showLoopOption?: boolean;
    /**
     * Represents whether the volume control should be shown. Defaults to `true`
     */
    showVolumeControl?: boolean;
    /**
     * Color for the audio seek bar
     */
    seekBarColor?: string;
    /**
     * Color for the volumn control
     */
    volumeControlColor?: string;
    /**
     * Hides the seek bar if set to `true`, the audio will still be seekable. Defaults to `false`
     */
    hideSeekBar?: boolean;
    /**
     * Hides the seek knob when audio is playing if set to `true`. Defaults to `false`
     */
    hideSeekKnobWhenPlaying?: boolean;
}
declare const AudioPlayer: React.FC<AudioElementNativeProps & AudioElementEventProps & AudioPlayerProps>;
export { AudioPlayer };
