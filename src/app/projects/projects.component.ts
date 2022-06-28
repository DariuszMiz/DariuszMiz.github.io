import { DataViewModel } from './../interfaces/dataView.interface';
import { PdfDialogComponent } from './pdf-dialog/pdf-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './../servieces/data-service/data.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { ImageModel } from '../interfaces/img.interface';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public projects: ImageModel[] = [];
  public sortOptions: SelectItem[] = [];
  public sortField = '';

  public loaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private primengConfig: PrimeNGConfig,
    private dataService: DataService,
    private dialogService: DialogService
  ) {}

  public openPdfView(path: string): void {
    this.dialogService.open(PdfDialogComponent, {
      data: path,
      width: '100%',
      height: '100%',
      contentStyle: { overflow: 'hidden' },
    });
  }

  public isPdf(path: string): boolean {
    return path.includes('.pdf');
  }

  ngOnInit(): void {
    this.dataService.getProjects().subscribe({
      next: (projects: DataViewModel) => {
        this.projects = projects.files;
        this.sortOptions = projects.types;
        this.loaded.next(true);
      },
      error: () => this.loaded.next(false),
    });
    this.primengConfig.ripple = true;
  }

  public get loadedBool(): boolean {
    return this.loaded.value;
  }

  public onChange(event: any, dv: any): void {
    dv.filter(event.value, 'contains');
  }
}
