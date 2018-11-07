import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
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
  public failed = false;
  public loading = true;

  @ViewChild('canvas')
  private canvas: ElementRef<HTMLCanvasElement>;

  public constructor(private cameraService: CameraService, public snackBar: MatSnackBar) { }

  public ngAfterViewInit(): void {
    if (typeof navigator.mediaDevices === 'undefined') {
      this.failed = true;
      this.loading = false;
      this.snackBar.open('Error...', null, { duration: 1000 });

      return;
    }

    const promises = [
      navigator.mediaDevices.getUserMedia(constraints)
        .then(stream => CameraService.loadVideo(stream)),
      this.downloadVideo(environment.overlay.src)
        .then(url => CameraService.loadVideo(url))
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
        this.snackBar.open(error.message);
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

  // NOTE: The Service Worker not yet supports a HTTP Range request.
  // Since the video element uses the Range request in many web browsers,
  // it fails fetch via the Service Worker.
  private async downloadVideo(src: string): Promise<string> {
    const req = new Request(src);
    const res = await fetch(req);
    const blob = await res.blob();

    return URL.createObjectURL(blob);
  }
}
