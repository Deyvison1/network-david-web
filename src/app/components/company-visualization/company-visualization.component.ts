import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewQrCodeComponent } from '../view-qr-code/view-qr-code.component';

@Component({
  selector: 'app-company-visualization',
  templateUrl: './company-visualization.component.html',
  styleUrls: ['./company-visualization.component.scss']
})
export class CompanyVisualizationComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openModalQrCode() {
    this.dialog.open(ViewQrCodeComponent, {
      width: '800',
      height: '800'
    });
  }

}
