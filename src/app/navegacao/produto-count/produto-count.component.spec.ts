import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCountComponent } from './produto-count.component';

describe('ProdutoCountComponent', () => {
  let component: ProdutoCountComponent;
  let fixture: ComponentFixture<ProdutoCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
