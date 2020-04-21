import React, {Component} from "react";
import {requireNativeComponent, ViewProps} from "react-native";

import {VideoMirrorMode, VideoRenderMode} from "./Types";

interface RtcUidProps {
    uid: number;
}

interface RtcSurfaceViewProps extends ViewProps {
    zOrderMediaOverlay?: boolean;
    zOrderOnTop?: boolean;
    renderMode?: VideoRenderMode;
    channelId?: string;
    mirrorMode?: VideoMirrorMode;
}

interface RtcTextureViewProps extends ViewProps {
    mirror?: boolean;
}

const RCTRtcSurfaceView = requireNativeComponent('RCTAgoraRtcSurfaceView');

class RtcSurfaceView extends Component<RtcSurfaceViewProps & RtcUidProps, {}> {
    render() {
        return (
            <RCTRtcSurfaceView {...this.props}/>
        )
    }
}

const RCTRtcTextureView = requireNativeComponent('RCTAgoraRtcTextureView');

class RtcTextureView extends Component<RtcTextureViewProps & RtcUidProps, {}> {
    render() {
        return (
            <RCTRtcTextureView {...this.props}/>
        )
    }
}

export namespace RtcLocalView {
    export class SurfaceView extends Component<RtcSurfaceViewProps, {}> {
        render() {
            return (
                <RtcSurfaceView
                    {...this.props}
                    uid={0}/>
            );
        }
    }

    export class TextureView extends Component<RtcTextureViewProps, {}> {
        render() {
            return (
                <RtcTextureView
                    {...this.props}
                    uid={0}/>
            );
        }
    }
}

export namespace RtcRemoteView {
    export class SurfaceView extends Component<RtcSurfaceViewProps & RtcUidProps, {}> {
        render() {
            return (
                <RtcSurfaceView {...this.props}/>
            );
        }
    }

    export class TextureView extends Component<RtcTextureViewProps & RtcUidProps, {}> {
        render() {
            return (
                <RtcTextureView {...this.props}/>
            );
        }
    }
}