import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-pdf-dialog',
  templateUrl: './pdf-dialog.component.html',
  styleUrls: ['./pdf-dialog.component.scss'],
  providers: [DialogService],
})
export class PdfDialogComponent implements OnInit {
  public src = '';

  constructor(public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.src = this.config.data;
  }
}
