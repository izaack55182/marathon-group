declare module 'svg-dotted-map' {
    export interface MapOptions {
        width: number;
        height: number;
        mapSamples: number;
    }

    export interface Point {
        x: number;
        y: number;
    }

    export interface Marker {
        lat: number;
        lng: number;
        size?: number;
    }

    export interface ProcessedMarker extends Point {
        size?: number;
    }

    export interface DottedMapInstance {
        points: Point[];
        addMarkers: (markers: Marker[]) => ProcessedMarker[];
    }

    export function createMap(options: MapOptions): DottedMapInstance;
}
