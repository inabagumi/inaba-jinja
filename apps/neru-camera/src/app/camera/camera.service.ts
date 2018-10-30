import { Injectable } from '@angular/core';
import {
  Color,
  LinearFilter,
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  PlaneGeometry,
  RGBFormat,
  Scene,
  ShaderMaterial,
  VideoTexture,
  WebGLRenderer
} from 'three';

interface ExtendedHTMLVideoElement extends HTMLVideoElement {
  playsInline: boolean;
}

const fragmentShader = `precision mediump float;

uniform sampler2D texture;
uniform vec3 keyColor;
varying vec2 vUv;

void main(void) {
  vec4 smpColor = texture2D(texture, vUv);
  float diff = length(keyColor - smpColor.rgb);

  if (diff < 0.8) {
    discard;
  } else {
    gl_FragColor = smpColor;
  }
}
`;
const vertexShader = `precision mediump float;

varying vec2 vUv;

void main(void) {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  private camera: OrthographicCamera;
  private renderer: WebGLRenderer;
  private scene: Scene;

  public static async loadVideo(src: string | MediaStream): Promise<HTMLVideoElement> {
    return new Promise<ExtendedHTMLVideoElement>((resolve, reject) => {
      const video = document.createElement('video') as ExtendedHTMLVideoElement;
      video.autoplay = true;
      video.playsInline = true;
      video.crossOrigin = 'anonymous';
      video.loop = true;
      video.muted = true;

      video.addEventListener('canplaythrough', () => {
        video.play().then(() => resolve(video)).catch(resolve);
      });
      video.addEventListener('error', reject);

      if (typeof src === 'string') {
        video.src = src;
      } else {
        video.srcObject = src;
      }
    });
  }

  constructor() { }

  public init(canvas: HTMLCanvasElement, stream: HTMLVideoElement, video: HTMLVideoElement): void {
    this.renderer = this.createRenderer(canvas, stream);
    this.scene = this.createScene(stream);
    this.camera = this.createCamera(stream);

    const videoTexture = new VideoTexture(video);
    videoTexture.minFilter = LinearFilter;
    videoTexture.magFilter = LinearFilter;
    videoTexture.format = RGBFormat;
    const geometry = new PlaneGeometry(video.videoWidth / 2, video.videoHeight / 2, 1, 1);
    const material = new ShaderMaterial({
      fragmentShader,
      transparent: true,
      uniforms: {
        keyColor: {
          type: 'c',
          value: new Color(0x00ff00)
        },
        texture: {
          type: 't',
          value: videoTexture
        }
      },
      vertexShader
    });
    const mesh = new Mesh(geometry, material);
    mesh.position.z = 100;
    this.scene.add(mesh);

    this.render();
  }

  private createBackground(video: HTMLVideoElement): Mesh {
    const texture = new VideoTexture(video);
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBFormat;

    const geometry = new PlaneGeometry(video.videoWidth, video.videoHeight, 1, 1);
    const material = new MeshBasicMaterial({ map: texture });
    return new Mesh(geometry, material);
  }

  private createCamera(video: HTMLVideoElement): OrthographicCamera {
    const camera = new OrthographicCamera(
      video.videoWidth / -2,
      video.videoWidth / 2,
      video.videoHeight / 2,
      video.videoHeight / -2,
      1,
      2000
    );

    camera.position.z = 500;

    return camera;
  }

  private createRenderer(canvas: HTMLCanvasElement, stream: HTMLVideoElement): WebGLRenderer {
    const renderer = new WebGLRenderer({ canvas, preserveDrawingBuffer: true });
    renderer.setSize(stream.videoWidth, stream.videoHeight, false);

    return renderer;
  }

  private createScene(video: HTMLVideoElement): Scene {
    const scene = new Scene();
    const background = this.createBackground(video);

    scene.add(background);

    return scene;
  }

  private render = (): void => {
    this.renderer.render(this.scene, this.camera);

    requestAnimationFrame(this.render);
  }
}
