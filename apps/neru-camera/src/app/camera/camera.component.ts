import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';

interface CanvasSize {
  height: number;
  width: number;
}

interface ExtendedHTMLVideoElement extends HTMLVideoElement {
  playsInline: boolean;
}

const constraints: MediaStreamConstraints = {
  audio: false,
  video: {
    facingMode: 'environment'
  }
};

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements AfterViewInit {

  public canvasHeight = 720;
  public canvasWidth = 1280;
  public context: CanvasRenderingContext2D;
  public stream: ExtendedHTMLVideoElement;
  public video: ExtendedHTMLVideoElement;

  @ViewChild('canvas') canvas: ElementRef;

  public constructor() { }

  public ngAfterViewInit(): void {
    const promises = [
      this.loadVideo(environment.neruVideoURL),
      navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => this.loadVideo(stream))
    ];

    Promise.all(promises)
      .then(([video, stream]) => {
        const { nativeElement: canvas } = this.canvas;
        this.context = canvas.getContext('2d');
        this.video = video;
        this.stream = stream;

        this.adjustCanvasSize({
          height: this.stream.videoHeight,
          width: this.stream.videoWidth
        });
        requestAnimationFrame(this.draw);
      });
  }

  private adjustCanvasSize({ height, width }: CanvasSize): void {
    this.canvasHeight = height;
    this.canvasWidth = width;
  }

  private cromaKey(video: HTMLVideoElement): HTMLCanvasElement {
    const tempCanvas = document.createElement('canvas');
    const tempContext = tempCanvas.getContext('2d');

    tempCanvas.width = video.videoWidth / 2;
    tempCanvas.height = video.videoHeight / 2;

    tempContext.drawImage(video, 0, 0, tempCanvas.width, tempCanvas.height);
    const imageData = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
    const { data } = imageData;
    const length = data.length / 4;

    for (let i = 0; i < length; ++i) {
      const red = data[i * 4];
      const green = data[i * 4 + 1];
      const blue = data[i * 4 + 2];

      if (red < 80 && green > 70 && blue < 80) {
        data[i * 4 + 3] = 0;
      }
    }
    tempContext.putImageData(imageData, 0, 0);

    return tempCanvas;
  }

  private draw = (): void => {
    const video = this.cromaKey(this.video);

    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.context.drawImage(
      this.stream,
      0,
      0,
      this.canvasWidth,
      this.canvasHeight
    );
    this.context.drawImage(
      video,
      this.canvasWidth / 2 - video.width / 2,
      this.canvasHeight / 2 - video.height / 2,
      video.width,
      video.height
    );

    requestAnimationFrame(this.draw);
  }

  private async loadVideo(src: string | MediaStream) {
    return new Promise<ExtendedHTMLVideoElement>((resolve, reject) => {
      const video = document.createElement('video') as ExtendedHTMLVideoElement;
      video.autoplay = true;
      video.playsInline = true;
      video.crossOrigin = 'anonymous';
      video.loop = true;
      video.muted = true;

      video.addEventListener('canplay', () => {
        video.play()
          .then(() => resolve(video))
          .catch(reject);
      });
      video.addEventListener('error', reject);

      if (typeof src === 'string') {
        video.src = src;
      } else {
        video.srcObject = src;
      }
    });
  }
}
