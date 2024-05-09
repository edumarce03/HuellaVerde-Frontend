import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css',
})
export class MaterialComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    AOS.init();
  }
}
