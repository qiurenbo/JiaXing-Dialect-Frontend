import { Component, OnInit } from "@angular/core";
import Psittacus from "psittacus";
@Component({
  selector: "app-learning",
  templateUrl: "./learning.component.html",
  styleUrls: ["./learning.component.scss"],
})
export class LearningComponent implements OnInit {
  title = "recorder";

  config = {
    method: "AudioContext",
    bufferSize: 4096,
    sampleRate: 16000,
    bitDepth: 16,
  };

  recorder = new Psittacus(this.config);
  startOrStop = "Start";

  onStart() {
    if (this.startOrStop === "Start") {
      this.startOrStop = "Stop";
      this.recorder.start();
    } else {
      this.startOrStop = "Start";
      this.recorder.stop();
    }
  }

  onDownload() {
    this.recorder.export("wav", (blob) => {
      const downloadEl = document.createElement("a");
      downloadEl.innerHTML = "download";
      downloadEl.download = "audio.wav";
      downloadEl.href = URL.createObjectURL(blob);
      document.body.appendChild(downloadEl);
      downloadEl.click();
      document.body.removeChild(downloadEl);
    });
  }

  ngOnInit() {}
}
