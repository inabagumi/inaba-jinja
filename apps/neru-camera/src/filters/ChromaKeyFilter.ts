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
  public constructor(keyColor = '#00ff00') {
    super(undefined, fragmentShader)

    this.uniforms.keyColor = new Float32Array(3)
    this.keyColor = keyColor
  }

  public get keyColor(): string {
    const hex = utils.rgb2hex(this.uniforms.keyColor)

    return utils.hex2string(hex)
  }

  public set keyColor(value: string) {
    const hex = utils.string2hex(value)

    utils.hex2rgb(hex, this.uniforms.keyColor)
  }
}
