
import { HttpClientModule } from '@angular/common/http';
import { not } from '@angular/compiler/src/output/output_ast';
import { Component, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';


import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';



describe(PhotoListComponent.name, () => {
  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;
  let service: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoListComponent],
      imports: [PhotoListModule, HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PhotoBoardService)
  });

  it(`Should create component`, () => {
    expect(component).toBeTruthy();
  });

  it(`(D) Should display board when data  arrives`, () => {
    const photos = buildPhotoList()
    spyOn(service, 'getPhotos').and.returnValue(of(photos));
    fixture.autoDetectChanges()
    const board = fixture.nativeElement.querySelector('app-photo-board')
    const loader = fixture.nativeElement.querySelector('.loader')
    expect(board).not.toBeNull();
    expect(loader).toBeNull();
  });
  it(`(D) Should display loader while  waiting for data `, () => {
    const photos = buildPhotoList()
    spyOn(service, 'getPhotos').and.returnValue(null);
    fixture.autoDetectChanges()
    const board = fixture.nativeElement.querySelector('app-photo-board')
    const loader = fixture.nativeElement.querySelector('.loader')
    expect(board).toBeNull();
    expect(loader).not.toBeNull();
  });


});
