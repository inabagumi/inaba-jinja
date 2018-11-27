import {
  Color,
  LinearFilter,
  OrthographicCamera,
  PlaneGeometry,
  RGBFormat,
  ShaderMaterial,
  Scene,
  WebGLRenderer,
  Mesh,
  MeshBasicMaterial,
  VideoTexture,
} from 'three';

const fragmentShader = `precision mediump float;
uniform sampler2D texture;
uniform vec3 keyColor;
varying vec2 vUv;
void main(void) {
  vec4 smpColor = texture2D(texture, vUv);
  float diff = length(keyColor - smpColor.rgb);
  if (diff < 0.6) {
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

export default class Renderer {

  private background: Mesh;
  private camera: OrthographicCamera;
  private overlay: Mesh;
  private renderer: WebGLRenderer;
  private sceen: Scene;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new WebGLRenderer({ canvas, preserveDrawingBuffer: true });
    this.sceen = new Scene();

    const { height, width } = this.renderer.getSize();
    this.setCamera(width, height);
  }

  render() {
    this.renderer.render(this.sceen, this.camera);
  }

  setCamera(width: number, height: number) {
    this.camera = new OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      2000,
    );

    this.camera.position.z = 500;
  }

  setBackground(media: HTMLVideoElement) {
    const { videoHeight, videoWidth } = media;

    this.renderer.setSize(videoWidth, videoHeight, false);
    this.setCamera(videoWidth, videoHeight);

    const texture = new VideoTexture(media);
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBFormat;

    const geometry = new PlaneGeometry(videoWidth, videoHeight, 1, 1);
    const material = new MeshBasicMaterial({ map: texture });
    this.background = new Mesh(geometry, material);

    this.sceen.add(this.background);
  }

  setOverlay(media: HTMLVideoElement) {
    const { videoHeight, videoWidth } = media;

    const texture = new VideoTexture(media);
    texture.minFilter = LinearFilter;
    texture.magFilter = LinearFilter;
    texture.format = RGBFormat;

    const geometry = new PlaneGeometry(videoWidth, videoHeight, 1, 1);
    const material = new ShaderMaterial({
      fragmentShader,
      vertexShader,
      transparent: true,
      uniforms: {
        keyColor: {
          type: 'c',
          value: new Color(0x00ff00),
        },
        texture: {
          type: 't',
          value: texture,
        },
      },
    });
    this.overlay = new Mesh(geometry, material);
    this.overlay.scale.x = this.overlay.scale.y = 0.5;

    this.sceen.add(this.overlay);
  }

  start() {
    this.renderer.setAnimationLoop(() => this.render());
  }

  updateTransform(scale: number, x: number, y: number) {
    const { clientHeight, clientWidth, height, width } = this.renderer.domElement;
    const deviation = 100 * ((scale / 0.5) - 1);

    this.overlay.position.x = (x + deviation) / (clientWidth / width);
    this.overlay.position.y = -((y + deviation) / (clientHeight / height));
    this.overlay.scale.x = this.overlay.scale.y = scale;
  }
}
