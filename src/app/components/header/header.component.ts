import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  downloadPdf(): void {
    const pdfUrl = '/assets/sumanth_resume.pdf'; // Update with the actual path
    this.downloadFile(pdfUrl, 'sumanth_resume.pdf');
  }
  downloadFile(fileUrl: string, fileName: string): void {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }
}
