import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { CameraService } from './camera.service';

interface CanvasSize {
  height: number;
  width: number;
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
  public loading = true;

  @ViewChild('canvas')
  private canvas: ElementRef<HTMLCanvasElement>;

  public constructor(private cameraService: CameraService) { }

  public ngAfterViewInit(): void {
    const promises = [
      navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => CameraService.loadVideo(stream)),
      CameraService.loadVideo(environment.neruVideoURL)
    ];

    Promise.all(promises)
      .then(([stream, video]) => {
        this.adjustCanvasSize({
          height: stream.videoHeight,
          width: stream.videoWidth
        });

        this.cameraService.init(this.canvas.nativeElement, stream, video);
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.loading = false;
      });
  }

  public onClick(): void {
    const { nativeElement: canvas } = this.canvas;
    const anchor = document.createElement('a');

    let otherTab: Window;

    if (typeof anchor.download !== 'string') {
      otherTab = window.open('assets/logo.png', '_blank');
    }

    canvas.toBlob((blob) => {
      anchor.href = URL.createObjectURL(blob);

      if (!otherTab) {
        anchor.download = `NeruCamera-${Date.now()}.png`;
        anchor.target = '_blank';

        anchor.click();
      } else {
        otherTab.location.href = anchor.href;
      }
    }, 'image/png', 1.0);
  }

  private adjustCanvasSize({ height, width }: CanvasSize): void {
    this.canvasHeight = height;
    this.canvasWidth = width;
  }
}
