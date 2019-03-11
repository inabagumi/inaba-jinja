import { Filter, utils } from 'pixi.js'

const fragmentShader = `precision mediump float;
uniform vec3 keyColor;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

void main(void) {
  vec4 smpColor = texture2D(uSampler, vTextureCoord);
  float diff = length(keyColor - smpColor.rgb);

  if (diff < 0.6) {
    discard;
  } else {
    gl_FragColor = smpColor;
  }
}
`

export class ChromaKeyFilter extends Filter {
  public set keyColor(value: number) {
    utils.hex2rgb(value, this.uniforms.keyColor)
  }

  public get keyColor(): number {
    return utils.rgb2hex(this.uniforms.keyColor)
  }

  public constructor(keyColor = 0x00ff00) {
    super(undefined, fragmentShader)

    this.uniforms.keyColor = new Float32Array(3)
    this.keyColor = keyColor
  }
}
