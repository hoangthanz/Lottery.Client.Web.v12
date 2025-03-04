import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AseanLottoService {
  constructor(private httpClient: HttpClient) {}

  getLottoVietNam_MienBac() {
    return this.httpClient.get(
      `${environment.assanLottoDomain}/api/test/vietnam/mienBac`
    );
  }
}
